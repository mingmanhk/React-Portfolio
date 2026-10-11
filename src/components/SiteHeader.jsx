import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useActiveSection, useTheme } from "../hooks";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SiteHeader() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // "top" is observed too, so no nav item is marked current while the hero is in view.
  const active = useActiveSection(["top", ...sections.map((s) => s.id)]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-header__inner">
        <a className="site-header__name" href="#top">Victor Lam</a>

        <nav id="site-nav" className={menuOpen ? "site-nav site-nav--open" : "site-nav"} aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            type="button"
            className="icon-button site-header__menu"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
