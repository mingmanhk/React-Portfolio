import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as OpenCC from "opencc-js";

/**
 * Generates src/i18n/zh-Hans.js from the Traditional Chinese source so the two
 * versions never drift. Uses Taiwan-phrase → Mainland conversion (網路→网络,
 * 軟體→软件, 專案→项目). Run after editing zh-Hant.js: npm run i18n:hans
 */
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/i18n");
const source = fs.readFileSync(path.join(dir, "zh-Hant.js"), "utf8");
const convert = OpenCC.Converter({ from: "twp", to: "cn" });

// Mainland usage the phrase table does not cover.
const fixes = [
  ["身分", "身份"],
  ["繁體中文", "简体中文"],
  ['lang: "zh-Hant"', 'lang: "zh-Hans"'],
];

let out = convert(source);
for (const [from, to] of fixes) out = out.split(from).join(to);
out = out.replace(
  /^\/\*\*[\s\S]*?\*\//,
  "/**\n * Simplified Chinese text. GENERATED from zh-Hant.js by scripts/gen-zh-hans.mjs —\n * do not edit by hand; edit zh-Hant.js and run npm run i18n:hans.\n */"
);

fs.writeFileSync(path.join(dir, "zh-Hans.js"), out);
console.log("✓ src/i18n/zh-Hans.js generated");
