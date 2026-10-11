import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";

/**
 * Renders the production build with the print stylesheet and saves it as the
 * downloadable résumé, so the PDF always matches src/data/profile.js.
 * Run after `npm run build`; commit the resulting public/victor-lam-resume.pdf.
 * Set CHROME_PATH if Chromium is not at a default Playwright location.
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public/victor-lam-resume.pdf");
const port = 4317;

const preview = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

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
  // Tagged PDF keeps a logical reading order for ATS parsers and screen readers.
  const raw = await page.pdf({ format: "Letter", printBackground: false, preferCSSPageSize: true, tagged: true, outline: true });
  await browser.close();

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
  fs.writeFileSync(out, await doc.save({ updateFieldAppearances: false }));
  console.log(`✓ Résumé PDF written to ${path.relative(root, out)} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
} finally {
  preview.kill();
}
