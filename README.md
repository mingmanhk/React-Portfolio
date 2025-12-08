sh
    git add .
    ```
2.  **Commit your changes:**
# React Portfolio

A modern, single-page portfolio built with React and Vite. This project serves as a template for creating a personal portfolio website with a clean design and smooth animations.

## Live Demo

Check out the live version of the portfolio: **[https://mingmanhk.github.io/React-Portfolio/](https://mingmanhk.github.io/React-Portfolio/)**

## Features

- **Component-Based Architecture:** Easily manage and customize sections of the portfolio.
- **Responsive Design:** Looks great on all devices, from desktops to smartphones.
- **Optimized for Performance:** Fast loading times thanks to Vite's efficient bundling.
- **Simple Deployment:** Deploy to GitHub Pages or any static hosting service with a single command.
- **SEO Friendly:** Includes a sitemap and meta tags to improve search engine visibility.

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/) for styling and layout.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mingmanhk/React-Portfolio.git
   ```
2. **Navigate to the project directory:**
 установки
   ```sh
   cd React-Portfolio
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

### Development

To start the development server, run:

```sh
npm run dev
```

This will open the project in your browser at `http://localhost:3000`. The server supports Hot Module Replacement (HMR) for a fast and efficient development workflow.

### Building for Production

To create a production-ready build, run:

```sh
npm run build
```

The optimized files will be generated in the `build` directory.

### Deployment

#### GitHub Pages

To deploy the portfolio to GitHub Pages, run:

```sh
npm run deploy
```

This command will build the project and push the `build` directory to the `gh-pages` branch of your repository.

#### Vercel

To deploy to Vercel:

1. **Set the environment variable in Vercel:**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Go to "Environment Variables"
   - Add a new variable:
     - Name: `VITE_SITE_URL`
     - Value: Your production URL (e.g., `https://yoursite.vercel.app`)
   - Save the variable

2. **Deploy:**
   - Push your changes to GitHub
   - Vercel will automatically build and deploy

The sitemap and robots.txt will be automatically generated with the correct URL during the build process.

## Customization

- **Portfolio Content:** Update `src/components/projects.js` to add or modify your projects.
- **Personal Information:** Edit `src/intro.js` to change the introduction text and personal details.
- **Styling:** Modify the styles in `src/App.css` to match your personal brand.
- **Components:** Add or remove components from `src/App.js` to change the layout and content of your portfolio.
