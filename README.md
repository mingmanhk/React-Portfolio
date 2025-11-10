# React Portfolio for Victor Lam

A modern single-page portfolio for Victor Lam powered by React 18 + Vite. It highlights leadership experience, project work, and contact information with a cinematic hero, glassmorphism-inspired cards, and responsive layouts.

## Live Site

Visit the production build: **[https://mingmanhk.github.io/React-Portfolio/](https://mingmanhk.github.io/React-Portfolio/)**

## Highlights

- **Hero + Storytelling:** Animated typed headline, career metrics, and actionable CTAs.
- **Modular Sections:** Summary, skills, resume timeline, portfolio grid, and contact tiles are all component-driven.
- **Responsive Design System:** Shared tokens for typography/colors plus Bootstrap utilities ensure consistency across breakpoints.
- **SEO & Analytics:** Includes structured meta tags, `ads.txt`, AdSense snippet, and Google Analytics.
- **Fast Tooling:** Vite dev server for instant HMR, production build optimized for static hosting or Vercel.

## Tech Stack

- [React 18](https://reactjs.org/) with functional components and hooks.
- [Vite 5](https://vitejs.dev/) for bundling, dev server, and build output (`build/`).
- [Bootstrap 5](https://getbootstrap.com/) + [Bootstrap Icons](https://icons.getbootstrap.com/) for layout and iconography.
- [gh-pages](https://www.npmjs.com/package/gh-pages) for GitHub Pages deployment.
- Optional hosting via Vercel using `vercel.json` (build command + `build` output directory).

## Getting Started

### Prerequisites

- **Node.js 18+ (tested on 25.1.0)** – Vite 5 requires ≥18 and the repo currently targets the latest stable release.
- npm 9+ (npm 11.6 ships with Node 25)

If you use `nvm`, run the following before installing dependencies to pick up the pinned toolchain:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 25
nvm use 25
```

### Installation & Development

```sh
git clone https://github.com/mingmanhk/React-Portfolio.git
cd React-Portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` (or the port shown in the CLI). Hot Module Replacement is enabled by default.

### Useful Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Start Vite dev server with HMR.                  |
| `npm run build`    | Create an optimized production build in `build`. |
| `npm run preview`  | Preview the production bundle locally.           |
| `npm run deploy`   | Publish `build/` to the `gh-pages` branch (requires Node ≥18, tested on 25). |

### Deployment Notes

- **GitHub Pages:** `npm run deploy` builds and pushes `build/` to GitHub Pages (configured for `https://mingmanhk.github.io/React-Portfolio/`).
- **Vercel or other hosts:** Use the included `vercel.json` or configure your platform to run `npm run build` and serve the `build/` directory.

## Customization Tips

- Update `src/components/projects.js` to add/edit portfolio items (name, links, summary, imagery).
- Modify hero stats/strings in `src/intro.js`.
- Edit design tokens in `src/App.css` for branding changes (fonts, colors, spacing).
- Add new sections by composing components and wiring them up in `src/App.js`.

Feel free to fork and adapt the portfolio to your own story—just keep Node 18+ in mind for Vite compatibility.
