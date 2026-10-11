import { createContext, useContext } from "react";
import { getContent } from "./content";

export { getContent, locales, localeFromPath } from "./content";

const LocaleContext = createContext("en");

export function LocaleProvider({ locale, children }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useContent() {
  return getContent(useContext(LocaleContext));
}
