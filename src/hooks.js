import { useEffect, useState, useSyncExternalStore } from "react";

const darkQuery = "(prefers-color-scheme: dark)";

function readSavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

const themeListeners = new Set();

function currentTheme() {
  return (
    document.documentElement.dataset.theme ??
    readSavedTheme() ??
    (window.matchMedia(darkQuery).matches ? "dark" : "light")
  );
}

function subscribeTheme(onChange) {
  const mql = window.matchMedia(darkQuery);
  themeListeners.add(onChange);
  mql.addEventListener("change", onChange);
  return () => {
    themeListeners.delete(onChange);
    mql.removeEventListener("change", onChange);
  };
}

/**
 * Light/dark theme that follows the OS until the visitor picks one explicitly.
 * An external store keeps prerendered HTML ("light") and the browser's real
 * theme from causing a hydration mismatch.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, currentTheme, () => "light");

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable: the choice lasts for this page view only.
    }
    themeListeners.forEach((fn) => fn());
  };

  return [theme, toggle];
}

const motionQuery = "(prefers-reduced-motion: reduce)";

export function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(motionQuery);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(motionQuery).matches,
    () => false
  );
}

/** Tracks which page section is under the header so the nav can mark it current. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // A band across the upper middle of the viewport decides the current section.
      { rootMargin: "-30% 0px -60% 0px" }
    );
    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}
