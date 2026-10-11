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

// Closed <details> hide their content on paper, so open every role while printing
// and restore the visitor's choices afterwards.
let closedForPrint = [];
window.addEventListener("beforeprint", () => {
  closedForPrint = [...document.querySelectorAll("details:not([open])")];
  closedForPrint.forEach((d) => (d.open = true));
});
window.addEventListener("afterprint", () => {
  closedForPrint.forEach((d) => (d.open = false));
  closedForPrint = [];
});
