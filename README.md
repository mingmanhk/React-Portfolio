# React Portfolio for Victor Lam

This is a personal portfolio website for Victor Lam, created with Create React App. It showcases professional experience, education, and personal projects.

## Live Site

You can view the deployed portfolio here: [https://mingmanhk.github.io/React-Portfolio/](https://mingmanhk.github.io/React-Portfolio/)

## Features

- **Single Page Application:** Smooth, fast navigation without page reloads.
- **Responsive Design:** Adapts to different screen sizes, from mobile devices to desktops.
- **Dynamic Sections:** Includes sections for About, Resume (Education & Experience), and Projects.
- **Analytics:** Integrated with Google Analytics to track user engagement.

## Tech Stack

- **React:** Core library for building the user interface.
- **React Scripts:** Standard scripts and configuration for Create React App.
- **Bootstrap & React-Bootstrap:** For layout and responsive design.
- **Bootstrap Icons:** For iconography.
- **gh-pages:** For easy deployment to GitHub Pages.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mingmanhk/React-Portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start -- --openssl-legacy-provider
   ```
   The application will be available at `http://localhost:3000`.

### Deployment

This project uses `gh-pages` to deploy to GitHub Pages. To deploy your version, run:

```sh
npm run deploy
```