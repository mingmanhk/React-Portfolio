import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

/**
 * Injects server-rendered HTML into build/index.html. Without this the page is an
 * empty <div id="root"> until JavaScript runs, which hides content from crawlers
 * that don't execute JS and from LinkedIn/Slack link previews.
 */
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "build/index.html");
const serverEntry = path.join(root, "build-ssr/entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const html = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("Prerender marker not found in build/index.html");

// Preload the Latin font subset used by the headline so text paints in its final face sooner.
const assetsDir = path.join(root, "build/assets");
const font = fs.readdirSync(assetsDir).find((f) => /^public-sans-latin-wght-normal-.*\.woff2$/.test(f));
const base = html.match(/src="([^"]*)assets\//)?.[1] ?? "/";
const preload = font
  ? `<link rel="preload" href="${base}assets/${font}" as="font" type="font/woff2" crossorigin>`
  : "";

fs.writeFileSync(
  indexPath,
  html
    .replace("</title>", `</title>\n    ${preload}`)
    .replace(marker, `<div id="root">${render()}</div>`)
);
fs.rmSync(path.join(root, "build-ssr"), { recursive: true, force: true });
console.log("✓ Prerendered page content into build/index.html");
