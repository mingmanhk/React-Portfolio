# Victor Lam - Professional IT Portfolio

A modern, high-performance portfolio website built with React and Vite, showcasing IT leadership experience and full-stack development projects.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://victorportfolio.vercel.app)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF)](https://vitejs.dev/)

## Live Demo

**GitHub Pages:** [https://mingmanhk.github.io/React-Portfolio/](https://mingmanhk.github.io/React-Portfolio/)

---

## Features

### Core Features
- **Modern React Architecture**: Built with React 18+ and functional components with hooks
- **Component-Based Design**: Modular, reusable components for easy maintenance
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and auto-generated sitemap
- **Analytics Integration**: Vercel Analytics and Google Analytics tracking

### Performance & Reliability
- **Code Splitting**: Lazy loading with React.lazy() and Suspense for optimal bundle size
- **Error Boundary**: Graceful error handling with user-friendly fallback UI
- **React.memo**: Optimized re-renders for better performance
- **Image Optimization**: Lazy loading images with proper alt text
- **Fast Build Times**: Vite's lightning-fast HMR and build process

### Developer Experience
- **PropTypes**: Type checking for component props
- **Clean Code**: Consistent formatting and modern JavaScript
- **Git Workflow**: Structured commits and deployment pipeline
- **Environment Variables**: Configurable URLs for different environments

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, JavaScript (ES6+) |
| **Build Tool** | Vite 7 |
| **Styling** | Bootstrap 5, Custom CSS |
| **Icons** | Bootstrap Icons |
| **Analytics** | Vercel Analytics, Google Analytics |
| **Deployment** | Vercel, GitHub Pages |

---

## Getting Started

### Prerequisites

- **Node.js**: v20.19.0 or higher
- **npm**: v9 or higher
- **Git**: For version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mingmanhk/React-Portfolio.git
   cd React-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   ```bash
   # For Vercel deployment, set in Vercel dashboard
   VITE_SITE_URL=https://yoursite.vercel.app
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will open at `http://localhost:3000` with automatic reloading on file changes.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
- Bundles and minifies JavaScript and CSS
- Optimizes images and assets
- Generates sitemap.xml and robots.txt
- Creates source maps for debugging
- Outputs to the `build/` directory

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Configure environment variables** in Vercel dashboard:
   - **Variable Name**: `VITE_SITE_URL`
   - **Value**: `https://yoursite.vercel.app`
3. **Deploy**: Vercel auto-deploys on push to main branch

The sitemap and robots.txt will be automatically generated with the correct URLs.

### GitHub Pages

Deploy to GitHub Pages:

```bash
npm run deploy
```

This command:
- Builds the production bundle
- Pushes to the `gh-pages` branch
- Deploys to `https://yourusername.github.io/React-Portfolio/`

**Note:** Update the `base` in `vite.config.mjs` for GitHub Pages deployment.

---

## Project Structure

```
React-Portfolio/
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── generate-sitemap.mjs # Auto-generate sitemap
├── src/
│   ├── assets/              # Images and media
│   ├── components/          # React components
│   │   ├── ErrorBoundary.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── ProjectList.jsx
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── experience.jsx
│   │   ├── resume.jsx
│   │   ├── Footer.jsx
│   │   └── projects.js      # Project data
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main app component
│   ├── intro.jsx            # Hero section
│   └── main.jsx             # App entry point
├── .gitignore
├── index.html               # HTML template
├── package.json
├── vite.config.mjs          # Vite configuration
└── README.md
```

---

## Customization

### Update Portfolio Content

1. **Projects**: Edit `src/components/projects.js`
   ```javascript
   {
     name: "Project Name",
     summary: "Brief description",
     img: "/path/to/image.png",
     alt: "Image description",
     project: "https://github.com/...",
     deployment: "https://project-url.com"
   }
   ```

2. **Personal Info**: Update `src/intro.jsx` and `src/components/Profile.jsx`

3. **Experience**: Modify `src/components/experience.jsx`

4. **Resume**: Edit `src/components/resume.jsx`

### Styling

- **Global styles**: `src/App.css`
- **CSS variables**: Defined in `:root` for easy theming
- **Bootstrap**: Override in your CSS files

### SEO & Meta Tags

Update meta tags in `index.html`:
- Title, description, keywords
- Open Graph tags for social media
- Twitter Card tags
- Canonical URL

---

## Performance Optimizations

- **Code Splitting**: Components lazy-loaded on demand
- **Tree Shaking**: Dead code eliminated in production
- **Image Lazy Loading**: Images load as user scrolls
- **React.memo**: Prevent unnecessary component re-renders
- **Error Boundaries**: Catch errors without crashing the app
- **Minification**: CSS and JS minified in production
- **Source Maps**: Available for debugging production issues

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Security

- **Dependencies**: Regularly updated to patch vulnerabilities
- **XSS Protection**: React's built-in escaping
- **External Links**: `rel="noopener noreferrer"` on all external links
- **HTTPS**: Enforced on production deployments
- **Environment Variables**: Sensitive data not committed to Git

Run security audit:
```bash
npm audit
npm audit fix
```

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Victor Lam**  
- **Email**: mingmanhk@gmail.com  
- **LinkedIn**: [linkedin.com/in/mingmanhk](https://www.linkedin.com/in/mingmanhk)  
- **GitHub**: [github.com/mingmanhk](https://github.com/mingmanhk)  
- **Portfolio**: [victorportfolio.vercel.app](https://victorportfolio.vercel.app)

---

## Acknowledgments

- **React Team** for the amazing framework
- **Vite** for the blazing-fast build tool
- **Bootstrap** for the responsive grid system
- **Vercel** for seamless deployment

---

**Built with care by Victor Lam** | Last updated: December 2025
