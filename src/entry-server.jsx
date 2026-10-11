import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { LocaleProvider, getContent, locales } from "./i18n";

export { getContent, locales };

/** Renders one language's page to HTML at build time (see scripts/prerender.mjs). */
export function render(locale) {
  return renderToString(
    <StrictMode>
      <LocaleProvider locale={locale}>
        <App />
      </LocaleProvider>
    </StrictMode>
  );
}
