import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";
import { extract, scoreResume } from "./lib/ats-score.mjs";

/**
 * Second-opinion résumé review by Claude, run in CI after the deterministic
 * ATS gate. Authenticates with Workload Identity Federation: the SDK reads
 * ANTHROPIC_IDENTITY_TOKEN_FILE plus the federation IDs from the job
 * environment, so no API key is stored in the repository.
 *
 * Advisory only: it writes findings and suggested rewrites to the job summary
 * and review.json, and never edits the résumé. Content changes stay with the
 * author, because a model must not add claims the author has not made.
 *
 * Usage: node --import ./scripts/lib/asset-stub.mjs scripts/ai-resume-review.mjs [--pdf path]
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const pdfPath = path.resolve(root, args.includes("--pdf") ? args[args.indexOf("--pdf") + 1] : "public/victor-lam-resume.pdf");
const model = process.env.RESUME_REVIEW_MODEL || "claude-opus-5-5";

const bytes = fs.readFileSync(pdfPath);
const { lines } = await extract(bytes);
const ats = await scoreResume(bytes);

const instructions = `You are an executive recruiter and an applicant tracking system (ATS) specialist reviewing a résumé for public-sector CIO, IT Director, and senior IT leadership roles.

The text below is exactly what an ATS extracts from the PDF, in reading order. A deterministic checker already scored it ${ats.total}/100 for parseability, headings, dates, and keywords.

Review it and respond with JSON only, matching this shape:
{
  "ats_score": <0-100, your estimate of how well a commercial ATS would parse and rank it>,
  "recruiter_score": <0-100, strength for a CIO shortlist>,
  "strengths": [<string>],
  "issues": [{"severity": "high" | "medium" | "low", "section": <string>, "problem": <string>, "fix": <string>}],
  "rewrites": [{"original": <exact line from the résumé>, "suggested": <string>, "why": <string>}],
  "missing_keywords": [<string>]
}

Rules:
- Never invent employers, titles, dates, numbers, certifications, or achievements. A rewrite may only rephrase or tighten what the line already claims.
- Flag any claim that looks unverifiable or inconsistent instead of strengthening it.
- Keep rewrites to the 8 highest-impact lines.`;

const client = new Anthropic();
const message = await client.messages.create({
  model,
  max_tokens: 4000,
  messages: [{ role: "user", content: `${instructions}\n\n<resume>\n${lines.join("\n")}\n</resume>` }],
});
const raw = message.content.filter((b) => b.type === "text").map((b) => b.text).join("");
const json = raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
let review;
try {
  review = JSON.parse(json);
} catch {
  console.error("Claude returned non-JSON output:\n" + raw);
  process.exit(1);
}
fs.writeFileSync(path.join(root, "review.json"), JSON.stringify({ model, deterministic_ats: ats.total, ...review }, null, 2));

const md = [
  `### Claude résumé review (${model})`,
  "",
  `Deterministic ATS: **${ats.total}/100** · Claude ATS estimate: **${review.ats_score}/100** · Recruiter shortlist: **${review.recruiter_score}/100**`,
  "",
  "**Issues**",
  "",
  "| Severity | Section | Problem | Fix |",
  "|---|---|---|---|",
  ...(review.issues || []).map((i) => `| ${i.severity} | ${i.section} | ${i.problem} | ${i.fix} |`),
  "",
  "**Suggested rewrites** (review before applying; no new claims)",
  "",
  ...(review.rewrites || []).map((r) => `- ~~${r.original}~~\n  → ${r.suggested}\n  _${r.why}_`),
  "",
  `**Missing keywords:** ${(review.missing_keywords || []).join(", ") || "none"}`,
].join("\n");
console.log(md);
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
