import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { scoreResume } from "./lib/ats-score.mjs";

/**
 * CI gate: scores the résumé PDF for ATS readiness and fails below --min.
 * Usage: node --import ./scripts/lib/asset-stub.mjs scripts/check-resume-ats.mjs [--min 100] [--pdf path]
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const pdfPath = path.resolve(root, opt("--pdf", "public/victor-lam-resume.pdf"));
const minScore = Number(opt("--min", "100"));

const { total, results } = await scoreResume(fs.readFileSync(pdfPath));
console.log(`ATS readiness: ${path.relative(root, pdfPath)}\n`);
for (const r of results) {
  console.log(`${r.points === r.weight ? "✓" : "✗"} ${r.category.padEnd(20)} ${String(r.points).padStart(5)} / ${r.weight}  ${r.detail}`);
}
console.log(`\nScore: ${total} / 100 (minimum ${minScore})`);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,
    `### Résumé ATS score: ${total} / 100\n\n| Check | Points | Detail |\n|---|---|---|\n` +
    results.map((r) => `| ${r.category} | ${r.points} / ${r.weight} | ${r.detail} |`).join("\n") + "\n");
}
if (total < minScore) process.exit(1);
