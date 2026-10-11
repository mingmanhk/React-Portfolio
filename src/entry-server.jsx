import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Renders the page to HTML at build time so crawlers and link previews see full content. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
