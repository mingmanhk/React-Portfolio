import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";

/**
 * Post-build quality gate, run locally and in CI against the production build:
 * - page renders with no JavaScript errors
 * - no WCAG 2.1 AA accessibility violations (axe-core)
 * - no horizontal overflow on a 320px phone
 * - key interactions work (theme toggle, plan tabs, earlier-work toggle)
 * - résumé PDF, sitemap, and privacy page are served
 * - initial transfer stays under a size budget
 * Exits non-zero on any failure so CI blocks the deploy.
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 4318;
const base = `http://localhost:${port}/React-Portfolio/`;
const BUDGET_KB = 400; // uncompressed; roughly 120 KB over the wire with gzip

const failures = [];

// Console errors count only when they come from this site; third-party loads
// (analytics, GitHub-hosted screenshots) can fail on flaky networks without a site bug.
const isSiteError = (m) =>
  m.type() === "error" && !/goatcounter/i.test(m.text()) &&
  (!/Failed to load resource/.test(m.text()) || (m.location().url || "").startsWith(`http://localhost:${port}`));
const check = (ok, label, detail = "") => {
  console.log(`${ok ? "✓" : "✗"} ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures.push(label);
};

const preview = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

try {
  for (let i = 0; i < 40; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {
      // Preview server still starting.
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  for (const file of ["victor-lam-resume.pdf", "sitemap.xml", "privacy-policy.html", "social-share-image.jpg", "zh-hant/", "zh-hans/", "llms.txt"]) {
    const res = await fetch(base + file);
    check(res.ok, `serves ${file}`, String(res.status));
  }

  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });

  // Desktop: errors, accessibility, interactions, weight.
  // axe-core requires pages created from an explicit browser context.
  const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => isSiteError(m) && errors.push(m.text()));
  // Budget covers what blocks first render (HTML, CSS, JS, fonts). Images are
  // lazy-loaded at timing-dependent moments, which made a total-bytes check flaky.
  let bytes = 0;
  const critical = new Set(["document", "stylesheet", "script", "font"]);
  page.on("response", async (r) => {
    if (r.url().startsWith(`http://localhost:${port}`) && critical.has(r.request().resourceType())) {
      bytes += (await r.body().catch(() => Buffer.alloc(0))).length;
    }
  });
  await page.goto(base, { waitUntil: "networkidle" });
  check(errors.length === 0, "no JavaScript errors", errors.join(" | "));
  check(bytes / 1024 < BUDGET_KB, `render-critical assets under ${BUDGET_KB} KB`, `${Math.round(bytes / 1024)} KB`);

  const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  check(
    axe.violations.length === 0,
    "no accessibility violations (WCAG 2.1 AA)",
    axe.violations.map((v) => `${v.id} ×${v.nodes.length}`).join(", ")
  );

  const before = await page.locator("html").getAttribute("data-theme");
  await page.getByRole("button", { name: /switch to (dark|light) theme/i }).click();
  check((await page.locator("html").getAttribute("data-theme")) !== before, "theme toggle works");

  await page.getByRole("tab", { name: "One Login" }).click();
  check((await page.locator(".netmap__caption").innerText()).includes("identity"), "plan tabs update the caption");

  check((await page.locator("#projects > .projects > .project").count()) === 6, "six shipped products lead the projects section");
  await page.locator(".earlier > summary").click();
  check((await page.locator(".earlier .project").first().isVisible()), "earlier coding work expands");

  // Dark theme contrast.
  const dark = await (await browser.newContext({ colorScheme: "dark" })).newPage();
  await dark.goto(base, { waitUntil: "networkidle" });
  const axeDark = await new AxeBuilder({ page: dark }).withRules(["color-contrast"]).analyze();
  check(axeDark.violations.length === 0, "dark theme passes color contrast", axeDark.violations.map((v) => v.id).join(", "));

  // Chinese pages: correct language, translated content, hydrate without errors.
  for (const [route, lang, sample] of [
    ["zh-hant/", "zh-Hant", "代理資訊長"],
    ["zh-hans/", "zh-Hans", "代理首席信息官"],
  ]) {
    const zh = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
    const zhErrors = [];
    zh.on("pageerror", (e) => zhErrors.push(e.message));
    zh.on("console", (m) => isSiteError(m) && zhErrors.push(m.text()));
    await zh.goto(base + route, { waitUntil: "networkidle" });
    const htmlLang = await zh.locator("html").getAttribute("lang");
    const text = await zh.locator("body").innerText();
    check(htmlLang === lang && text.includes(sample) && zhErrors.length === 0, `${lang} page renders`, zhErrors.join(" | "));
    const zhAxe = await new AxeBuilder({ page: zh }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    check(zhAxe.violations.length === 0, `${lang} has no accessibility violations`, zhAxe.violations.map((v) => v.id).join(", "));
  }

  // Phone: layout must not scroll sideways.
  const phone = await (await browser.newContext({ viewport: { width: 320, height: 640 }, isMobile: true, hasTouch: true })).newPage();
  for (const route of ["", "zh-hant/", "zh-hans/"]) {
    await phone.goto(base + route, { waitUntil: "networkidle" });
    const overflow = await phone.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(overflow <= 0, `no horizontal scroll at 320px (/${route})`, `${overflow}px`);
  }

  await browser.close();
} finally {
  preview.kill();
}

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed.`);
  process.exit(1);
}
console.log("\nAll checks passed.");
