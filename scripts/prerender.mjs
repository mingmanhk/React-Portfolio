import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

/**
 * Writes one fully rendered HTML page per language (/, /zh-hant/, /zh-hans/).
 * Without this the page is an empty <div id="root"> until JavaScript runs, which
 * hides content from crawlers and link previews. Each page gets its own lang,
 * title, description, canonical URL, and hreflang alternates.
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const SITE = "https://mingmanhk.github.io/React-Portfolio/";

const { render, getContent, locales } = await import(
  pathToFileURL(path.join(root, "build-ssr/entry-server.js")).href
);
const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error("Prerender marker not found in build/index.html");

// Preload the Latin font subset used by the headline so text paints in its final face sooner.
const font = fs
  .readdirSync(path.join(buildDir, "assets"))
  .find((f) => /^public-sans-latin-wght-normal-.*\.woff2$/.test(f));
const base = template.match(/src="([^"]*)assets\//)?.[1] ?? "/";
const preload = font ? `<link rel="preload" href="${base}assets/${font}" as="font" type="font/woff2" crossorigin>` : "";

const alternates = [
  ...locales.map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${SITE}${l.path}" />`),
  `<link rel="alternate" hreflang="x-default" href="${SITE}" />`,
].join("\n    ");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const ogLocale = { en: "en_US", "zh-Hant": "zh_TW", "zh-Hans": "zh_CN" };

for (const l of locales) {
  const { ui } = getContent(l.id);
  const url = SITE + l.path;
  let html = template
    .replace('<html lang="en">', `<html lang="${l.hreflang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(ui.title)}</title>\n    ${preload}`)
    .replace("<!--HREFLANG-->", alternates)
    .replace(marker, `<div id="root">${render(l.id)}</div>`);

  if (l.id !== "en") {
    html = html
      .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(ui.description)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(ui.description)}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${escape(ui.description)}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(ui.title)}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${escape(ui.title)}`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:locale" content=")[^"]*/, `$1${ogLocale[l.id]}`);
  }

  const outDir = path.join(buildDir, l.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`✓ Prerendered ${l.id} → build/${l.path}index.html`);
}

fs.rmSync(path.join(root, "build-ssr"), { recursive: true, force: true });
