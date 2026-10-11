import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { PDFDocument, PDFDict, PDFName } from "pdf-lib";
import { person, experience, capabilities } from "../../src/data/profile.js";

/**
 * ATS readiness scoring for the résumé PDF, shared by the PDF builder (which
 * keeps the best-scoring layout) and the CI check (which blocks regressions).
 *
 * Applicant tracking systems read the PDF text layer in content-stream order,
 * not the visual layout, so this extracts text the way a parser does and
 * scores what a parser needs. It is a deterministic proxy for commercial
 * scanners (Jobscan, Workday, Greenhouse parsers), not a replacement for them.
 */
// Keywords recruiters and ATS filters use for public-sector CIO / IT Director
// roles. Each must appear verbatim (case-insensitive) somewhere in the text.
export const KEYWORDS = [
  "Chief Information Officer", "CIO", "IT strategy", "roadmap", "enterprise architecture",
  "IT governance", "technology standards", "program and portfolio management", "capital planning", "PMO", "procurement",
  "vendor management", "IT financial management", "budget", "data governance", "cybersecurity",
  "Zero Trust", "identity and access management", "risk assessment", "compliance", "audit",
  "business continuity", "disaster recovery", "infrastructure", "hybrid cloud", "Azure", "AWS",
  "VMware", "Microsoft 365", "network architecture", "SIEM", "ITIL", "ServiceNow", "SLA", "KPI",
  "service desk", "asset lifecycle", "M&A", "ISO", "SOX", "HIPAA", "people leadership",
  "org design", "public sector", "AI", "Python", "SQL",
];

const SECTIONS = [
  ["summary", /^(professional\s+)?summary$/i],
  ["experience", /^(professional\s+)?experience$/i],
  ["skills", /^(core\s+)?(skills|competencies)$/i],
  ["education", /^education$/i],
];

const MONTH = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)";
const DATE_RANGE = new RegExp(`(${MONTH} \\d{4}|\\d{4}) – (${MONTH} \\d{4}|\\d{4}|Present)`);

async function countType3Fonts(bytes) {
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });
  let n = 0;
  for (const [, obj] of doc.context.enumerateIndirectObjects()) {
    if (obj instanceof PDFDict && obj.get(PDFName.of("Type")) === PDFName.of("Font") && obj.get(PDFName.of("Subtype")) === PDFName.of("Type3")) n++;
  }
  return n;
}

async function rawText(bytes) {
  const doc = await getDocument({ data: new Uint8Array(bytes), useSystemFonts: true, disableFontFace: true }).promise;
  let out = "";
  for (let p = 1; p <= doc.numPages; p++) {
    const content = await (await doc.getPage(p)).getTextContent({ disableNormalization: true });
    // Concatenate glyph runs exactly as stored; no spaces added from positions.
    out += content.items.map((i) => i.str ?? "").join("") + "\n";
  }
  return out;
}

export async function extract(bytes) {
  const doc = await getDocument({ data: new Uint8Array(bytes), useSystemFonts: true }).promise;
  const meta = await doc.getMetadata();
  const lines = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const content = await (await doc.getPage(p)).getTextContent();
    // Group text runs into lines by baseline, in reading order, as parsers do.
    let current = null;
    for (const item of content.items) {
      if (!("str" in item)) continue;
      const y = Math.round(item.transform[5]);
      if (!current || Math.abs(current.y - y) > 2) {
        current = { y, text: "" };
        lines.push(current);
      }
      current.text += item.str + (item.hasEOL ? " " : "");
    }
  }
  return {
    pages: doc.numPages,
    info: meta.info || {},
    lines: lines.map((l) => l.text.replace(/\s+/g, " ").trim()).filter(Boolean),
  };
}

export async function scoreResume(bytes, { maxPages = 3 } = {}) {
  const results = [];
  const score = (category, weight, ratio, detail) =>
    results.push({ category, weight, points: Math.round(weight * Math.max(0, Math.min(1, ratio)) * 10) / 10, detail });

  const { pages, info, lines } = await extract(bytes);
  const text = lines.join("\n");
  const flat = lines.join(" ");
  const has = (s) => flat.toLowerCase().includes(s.toLowerCase());

  // 1. Text layer: a parser gets real, plentiful text.
  score("Text layer", 10, text.length >= 4000 ? 1 : text.length / 4000, `${text.length} characters extracted`);

  // 2. Clean characters and readable fonts. Ligatures, private-use glyphs, and
  // replacement marks break keyword matching; Type 3 fonts (how Chromium embeds
  // variable web fonts) are unreadable to several parsers and lose word spaces.
  const bad = text.match(/[\uFB00-\uFB06\uE000-\uF8FF\uFFFD]/g) || [];
  const type3 = await countType3Fonts(bytes);
  // Raw stream text without position-inferred spaces, as simple parsers see it.
  const raw = await rawText(bytes);
  const glued = experience.filter((job) => job.org.includes(" ") && !raw.includes(job.org)).map((job) => job.org);
  // Standard "•" bullets in the text itself, one per duty, and no middle dots
  // (OCR-based parsers misread "·" as a period and split phrases).
  const duties = experience.reduce((n, job) => n + (job.groups || []).reduce((m, g) => m + g.duties.length, 0) + (job.duties || []).length, 0);
  const bullets = (text.match(/^•/gm) || []).length;
  const middots = (text.match(/\u00B7/g) || []).length;
  const clean = [
    [bullets >= duties, `${bullets}/${duties} bullets as "•" text`],
    [middots === 0, middots ? `${middots} middle-dot separators` : "ATS-safe separators"],
    [bad.length === 0, bad.length ? `${bad.length} unreadable glyphs` : "no ligatures or unknown glyphs"],
    [type3 === 0, type3 ? `${type3} Type 3 fonts` : "no Type 3 fonts"],
    [glued.length === 0, glued.length ? `spaces lost in: ${glued.join(", ")}` : "word spaces intact"],
  ];
  score("Clean text and fonts", 10, clean.filter(([ok]) => ok).length / clean.length,
    clean.map(([ok, label]) => `${ok ? "✓" : "✗"} ${label}`).join(", "));

  // 3. Contact block: name first, then email, LinkedIn, and location near the top.
  const top = lines.slice(0, 6).join(" ");
  const contact = [
    [lines[0] === person.name, "name on first line"],
    [/[\w.+-]+@[\w-]+\.[\w.]+/.test(top), "email"],
    [/linkedin\.com\/in\/\w+/i.test(top), "LinkedIn URL"],
    [/\b[A-Z][a-z]+, [A-Z]{2}\b/.test(top), "city, state"],
  ];
  score("Contact details", 10, contact.filter(([ok]) => ok).length / contact.length,
    contact.map(([ok, label]) => `${ok ? "✓" : "✗"} ${label}`).join(", "));

  // 4. Standard section headings, each on its own line.
  const found = SECTIONS.filter(([, re]) => lines.some((l) => re.test(l)));
  score("Section headings", 15, found.length / SECTIONS.length,
    SECTIONS.map(([name]) => `${found.some(([n]) => n === name) ? "✓" : "✗"} ${name}`).join(", "));

  // 5. Every role: employer, title, and a parseable date range on the employer line.
  const roleChecks = experience.map((job) => {
    const orgLine = lines.findIndex((l) => l.startsWith(job.org));
    const dated = orgLine >= 0 && DATE_RANGE.test(lines[orgLine]);
    const titled = orgLine >= 0 && lines.slice(orgLine + 1, orgLine + 3).some((l) => l.startsWith(job.title));
    return { org: job.org, ok: orgLine >= 0 && dated && titled, why: orgLine < 0 ? "employer missing" : !dated ? "no date range" : !titled ? "title not under employer" : "" };
  });
  score("Work history", 20, roleChecks.filter((r) => r.ok).length / roleChecks.length,
    roleChecks.filter((r) => !r.ok).map((r) => `${r.org}: ${r.why}`).join("; ") || `${roleChecks.length}/${roleChecks.length} roles parse`);

  // 6. Keyword coverage for the target role.
  const missing = KEYWORDS.filter((k) => !has(k));
  score("Keyword coverage", 25, 1 - missing.length / KEYWORDS.length,
    missing.length ? `missing: ${missing.join(", ")}` : `${KEYWORDS.length}/${KEYWORDS.length} keywords`);

  // 7. Format: length recruiters accept, and document properties that ATS index.
  const fmt = [
    [pages <= maxPages, `${pages} pages (max ${maxPages})`],
    [bytes.length < 1024 * 1024, "under 1 MB"],
    [String(info.Title || "").includes(person.name), "title metadata"],
    [String(info.Author || "") === person.name, "author metadata"],
    [capabilities.every((g) => has(g.name)), "all skill groups present"],
  ];
  score("Format and metadata", 10, fmt.filter(([ok]) => ok).length / fmt.length,
    fmt.map(([ok, label]) => `${ok ? "✓" : "✗"} ${label}`).join(", "));

  const total = Math.round(results.reduce((s, r) => s + r.points, 0) * 10) / 10;
  return { total, pages, results };
}
