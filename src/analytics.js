/**
 * Visitor analytics via GoatCounter: open source, no cookies, no personal data,
 * so no consent banner is needed. Set VITE_GOATCOUNTER_CODE (the site code from
 * https://www.goatcounter.com) at build time to turn it on; unset means no tracking.
 */
const code = import.meta.env.VITE_GOATCOUNTER_CODE?.trim();
const endpoint = code ? `https://${code}.goatcounter.com` : null;

export const analyticsEnabled = Boolean(endpoint);

export function initAnalytics() {
  if (!endpoint || import.meta.env.DEV) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = `${endpoint}/count`;
  document.head.appendChild(script);
}

/**
 * Total page views for the public footer counter. Requires "Allow adding visitor
 * counts on your website" in GoatCounter settings; returns null when unavailable.
 */
export async function fetchTotalViews() {
  if (!endpoint) return null;
  try {
    const res = await fetch(`${endpoint}/counter/TOTAL.json`);
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.count === "string" ? data.count : null;
  } catch {
    return null;
  }
}
