import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/public-sans";
import "./styles.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { initAnalytics } from "./analytics";
import { LocaleProvider, localeFromPath } from "./i18n";

const container = document.getElementById("root");
// The language comes from the URL so it matches the prerendered page exactly.
const app = (
  <StrictMode>
    <ErrorBoundary>
      <LocaleProvider locale={localeFromPath(window.location.pathname)}>
        <App />
      </LocaleProvider>
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
