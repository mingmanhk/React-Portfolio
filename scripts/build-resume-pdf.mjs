import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";
import { scoreResume } from "./lib/ats-score.mjs";

/**
 * Builds the downloadable résumé from the production build's print stylesheet,
 * so the PDF always matches src/data/profile.js.
 *
 * It renders every layout candidate below, scores each with the ATS check, and
 * writes only the best: highest score first, then fewest pages, then the most
 * readable (earliest) candidate. If no candidate reaches --min (default 100),
 * nothing is written and the script fails, so a weaker résumé never ships.
 *
 * Run after `npm run build`. Set CHROME_PATH if Chromium is not at a default
 * Playwright location.
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public/victor-lam-resume.pdf");
const port = 4317;
const args = process.argv.slice(2);
const minScore = Number(args.includes("--min") ? args[args.indexOf("--min") + 1] : 100);
const alsoTo = args.includes("--copy-to") ? path.resolve(root, args[args.indexOf("--copy-to") + 1]) : null;

// Ordered most to least readable; each maps to html[data-print-density] in styles.css.
const CANDIDATES = ["standard", "compact", "tight"];

const preview = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

async function render(page, density) {
  await page.evaluate((d) => (document.documentElement.dataset.printDensity = d), density);
  // Tagged PDF keeps a logical reading order for ATS parsers and screen readers.
  const raw = await page.pdf({ format: "Letter", printBackground: false, preferCSSPageSize: true, tagged: true, outline: true });

  // Document properties are indexed by ATS and search engines; Chromium leaves them generic.
  const doc = await PDFDocument.load(raw);
  doc.setTitle("Victor Lam – Résumé – Acting Chief Information Officer / IT Manager");
  doc.setAuthor("Victor Lam");
  doc.setSubject("Résumé: public-sector CIO and enterprise IT leader, Seattle, WA");
  doc.setKeywords([
    "Victor Lam", "Chief Information Officer", "CIO", "IT Manager", "IT Director", "Enterprise Architecture",
    "IT Governance", "Program and Portfolio Management", "Procurement Strategy", "Cybersecurity Architecture",
    "Zero Trust", "Data Governance", "IT Financial Management", "Business Continuity", "Disaster Recovery",
    "ITIL", "Microsoft 365", "Azure", "AWS", "VMware", "Public Sector", "Seattle",
  ]);
  doc.setCreator("mingmanhk.github.io/React-Portfolio");
  doc.setProducer("Victor Lam");
  doc.setLanguage("en-US");
  return Buffer.from(await doc.save({ updateFieldAppearances: false }));
}

try {
  const url = `http://localhost:${port}/React-Portfolio/`;
  for (let i = 0; i < 40; i++) {
    try {
      if ((await fetch(url)).ok) break;
    } catch {
      // Preview server still starting.
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  // Open every role so the PDF carries the full history, as beforeprint does in browsers.
  await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
  await page.emulateMedia({ media: "print", colorScheme: "light" });

  const scored = [];
  for (const density of CANDIDATES) {
    const bytes = await render(page, density);
    const { total, pages, results } = await scoreResume(bytes);
    scored.push({ density, bytes, total, pages, results });
    const misses = results.filter((r) => r.points < r.weight).map((r) => `${r.category}: ${r.detail}`);
    console.log(`  ${density.padEnd(9)} ${String(total).padStart(5)} / 100  ${pages} pages${misses.length ? `  — ${misses.join("; ")}` : ""}`);
  }
  await browser.close();

  const best = scored.sort((a, b) => b.total - a.total || a.pages - b.pages || CANDIDATES.indexOf(a.density) - CANDIDATES.indexOf(b.density))[0];
  if (best.total < minScore) {
    console.error(`✗ Best layout "${best.density}" scored ${best.total} / 100, below the required ${minScore}. PDF not written.`);
    process.exit(1);
  }
  fs.writeFileSync(out, best.bytes);
  if (alsoTo) fs.writeFileSync(alsoTo, best.bytes);
  console.log(`✓ Résumé PDF written to ${path.relative(root, out)}: "${best.density}" layout, ATS ${best.total} / 100, ${best.pages} pages, ${Math.round(best.bytes.length / 1024)} KB`);
} finally {
  preview.kill();
}
