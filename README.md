# Victor Lam — Portfolio

Personal portfolio of Victor Lam, Acting Chief Information Officer at the City of Lakewood, WA.

**Live sites**

| Host | URL | Deploys |
|---|---|---|
| GitHub Pages (canonical) | https://mingmanhk.github.io/React-Portfolio/ | Automatically on every push to `main` (GitHub Actions) |
| Vercel | https://victorlam-portfolio.vercel.app | Automatically on every push to `main`; other branches get preview URLs |

Both hosts serve the same build. Canonical and Open Graph URLs point to GitHub Pages so search engines index one copy.

## Stack

- React 19 and Vite 8
- Hand-written CSS with design tokens, light and dark themes
- Public Sans (the U.S. Web Design System typeface), self-hosted
- Inline SVG icons and an interactive SVG diagram of how Victor approaches city IT
- GoatCounter for cookie-free visitor analytics (optional)
- Hosted on GitHub Pages and Vercel

## Develop

Requires Node.js 20.19 or later.

```bash
npm install
npm run dev      # http://localhost:3000/React-Portfolio/
npm run lint
npm run build    # outputs to build/
npm run preview  # serves the production build
npm run check    # quality gate against the build (needs Chromium; set CHROME_PATH if not auto-found)
npm test         # lint + build + check
```

## Résumé PDF

`public/victor-lam-resume.pdf` is generated from the same data as the site, using the print stylesheet. After editing `src/data/profile.js`:

```bash
npm run build && npm run resume:pdf
```

Commit the updated PDF. Printing the live page from a browser produces the same layout.

## Quality checks

Every push and pull request runs `npm run check` in CI before deploying: no JavaScript errors, no WCAG 2.1 AA violations (axe-core) in light and dark themes, no horizontal scroll at 320px, working theme toggle, plan tabs and project filter, required files served, and an initial-load budget of 350 KB. Dependabot opens grouped dependency updates weekly; each must pass the same checks.

## Edit content

All résumé content lives in [`src/data/profile.js`](src/data/profile.js): experience, highlights, capabilities, projects, education, and links. Components only render that data.

## Deploy

**GitHub Pages**

Push to `main`. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow lints, builds with base path `/React-Portfolio/`, and publishes `build/` with the official Pages actions. It can also be run manually from the Actions tab.

**Vercel**

Push to `main`. Vercel detects `VERCEL=1` and builds with base path `/`. Settings live in [`vercel.json`](vercel.json): Vite framework, `build/` output, `gh-pages` builds disabled, and HTTP security headers.

## Visitor analytics

Page views are counted with GoatCounter (site code `mingmanhk`, set in [`.env.production`](.env.production)).

- Dashboard: https://mingmanhk.goatcounter.com
- The footer shows total page views when **Allow adding visitor counts on your website** is enabled in GoatCounter settings.
- To turn analytics off, empty `VITE_GOATCOUNTER_CODE` and redeploy; the CSP then blocks GoatCounter entirely.

GoatCounter sets no cookies and collects no personal data, so no consent banner is needed. See [`public/privacy-policy.html`](public/privacy-policy.html).

## Security

- Content Security Policy injected at build time (`vite.config.mjs`); analytics origins are allowed only when configured
- On Vercel, real HTTP headers add HSTS, `frame-ancestors 'none'`, Permissions-Policy, and long-term asset caching
- No inline scripts, no third-party fonts or CDNs, no production source maps
- External links use `rel="noopener noreferrer"`

## License

[MIT](LICENSE)
