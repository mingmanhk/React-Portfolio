import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/public-sans";
import "./styles.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { initAnalytics } from "./analytics";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs); hydrate it instead of re-rendering.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

initAnalytics();
