import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useActiveSection, useTheme } from "../hooks";
import { locales, useContent, useLocale } from "../i18n";

const sectionIds = ["experience", "capabilities", "projects", "contact"];

export default function SiteHeader() {
  const { ui } = useContent();
  const locale = useLocale();
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // "top" is observed too, so no nav item is marked current while the hero is in view.
  const active = useActiveSection(["top", ...sectionIds]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">{ui.skip}</a>
      <div className="site-header__inner">
        <a className="site-header__name" href="#top">Victor Lam</a>

        <nav id="site-nav" className={menuOpen ? "site-nav site-nav--open" : "site-nav"} aria-label={ui.navLabel}>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {ui.nav[id]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ul className="lang-switch" aria-label={ui.languages}>
            {locales.map((l) => (
              <li key={l.id}>
                <a
                  href={`${import.meta.env.BASE_URL}${l.path}`}
                  hrefLang={l.hreflang}
                  lang={l.hreflang}
                  aria-current={l.id === locale ? "page" : undefined}
                  title={l.label}
                >
                  <span aria-hidden="true">{l.short}</span>
                  <span className="visually-hidden">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? ui.toLight : ui.toDark}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            type="button"
            className="icon-button site-header__menu"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
