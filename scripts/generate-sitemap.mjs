import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the base URL from environment variable or use a default
const BASE_URL = process.env.VITE_SITE_URL || 'https://mingmanhk.github.io/React-Portfolio';

const today = new Date().toISOString().split('T')[0];

// Fragment URLs (#about) are ignored by crawlers, so only real pages are listed.
// One entry per language, each listing its alternates so search engines link them.
const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/zh-hant/', priority: '0.8', changefreq: 'monthly' },
  { path: '/zh-hans/', priority: '0.8', changefreq: 'monthly' },
];
const alternates = [
  ['en', '/'], ['zh-Hant', '/zh-hant/'], ['zh-Hans', '/zh-hans/'], ['x-default', '/'],
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
${alternates.map(([lang, p]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}${p}"/>`).join('\n')}
  </url>`).join('\n')}
  <url>
    <loc>${BASE_URL}/victor-lam-resume.pdf</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
`;

// Write to build directory
const buildDir = path.join(__dirname, '../build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
console.log(`✓ Sitemap generated with base URL: ${BASE_URL}`);

// Also generate robots.txt
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(buildDir, 'robots.txt'), robotsTxt);
console.log(`✓ robots.txt generated with base URL: ${BASE_URL}`);
