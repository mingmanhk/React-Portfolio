import * as en from "../data/profile";
import enUi from "./en";
import zhHant from "./zh-Hant";
import zhHans from "./zh-Hans";

export const locales = [
  { id: "en", path: "", short: "EN", label: "English", hreflang: "en" },
  { id: "zh-Hant", path: "zh-hant/", short: "繁", label: "繁體中文", hreflang: "zh-Hant" },
  { id: "zh-Hans", path: "zh-hans/", short: "简", label: "简体中文", hreflang: "zh-Hans" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Mar 2026" → "2026年3月" for Chinese pages; "Present" → the locale's word. */
function localizeDate(value, t) {
  if (value === "Present") return t.ui.present;
  const [mon, year] = value.split(" ");
  return `${year}年${t.months[MONTHS.indexOf(mon)]}`;
}

/**
 * Merges translated text onto the English data by position, keeping links,
 * images, and ids from the English source so they are maintained in one place.
 */
function build(t) {
  if (!t) return { ...en, ui: enUi };
  return {
    ...en,
    ui: t.ui,
    person: { ...en.person, ...t.person },
    pillars: en.pillars.map((p, i) => ({ ...p, ...t.pillars[i] })),
    sites: en.sites.map((s, i) => ({ ...s, label: t.sites[i] })),
    highlights: en.highlights.map((h, i) => ({ ...h, ...t.highlights[i] })),
    experience: en.experience.map((job, i) => ({
      ...job,
      ...t.experience[i],
      start: localizeDate(job.start, t),
      end: localizeDate(job.end, t),
    })),
    capabilities: t.capabilities,
    projectTypes: en.projectTypes.map((p, i) => ({ ...p, label: t.projectTypes[i] })),
    projects: en.projects.map((p, i) => ({
      ...p,
      summary: t.projects[i],
      live: p.live && { ...p.live, label: t.projectLive[p.live.label] ?? p.live.label },
    })),
    education: en.education.map((e, i) => ({ ...e, ...t.education[i] })),
    ventures: en.ventures.map((v, i) => ({ ...v, note: t.ventures[i] })),
  };
}

const contents = { en: build(null), "zh-Hant": build(zhHant), "zh-Hans": build(zhHans) };

/** Locale from the URL path, e.g. /React-Portfolio/zh-hant/ → zh-Hant. */
export function localeFromPath(pathname) {
  if (/\/zh-hant\//i.test(pathname)) return "zh-Hant";
  if (/\/zh-hans\//i.test(pathname)) return "zh-Hans";
  return "en";
}

export function getContent(locale) {
  return contents[locale];
}
