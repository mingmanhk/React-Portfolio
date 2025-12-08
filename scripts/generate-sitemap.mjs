import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the base URL from environment variable or use a default
const BASE_URL = process.env.VITE_SITE_URL || 'https://victorportfolio.vercel.app';

const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/#about', priority: '0.8', changefreq: 'monthly' },
  { path: '/#experience', priority: '0.8', changefreq: 'monthly' },
  { path: '/#resume', priority: '0.8', changefreq: 'monthly' },
  { path: '/#projects', priority: '0.8', changefreq: 'monthly' },
  { path: '/#contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy.html', priority: '0.5', changefreq: 'yearly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`).join('\n')}
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
