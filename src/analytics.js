/**
 * Visitor analytics. Two independent providers, each enabled by a build-time variable:
 * - GoatCounter (VITE_GOATCOUNTER_CODE): cookieless page counts and the footer total.
 * - Google Analytics 4 (VITE_GA_MEASUREMENT_ID): audience and acquisition reports.
 * Unset means the provider is never loaded and the CSP does not allow its origins.
 */
const code = import.meta.env.VITE_GOATCOUNTER_CODE?.trim();
const endpoint = code ? `https://${code}.goatcounter.com` : null;
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export const analyticsEnabled = Boolean(endpoint || gaId);

function loadScript(src, dataset = {}) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  Object.assign(script.dataset, dataset);
  document.head.appendChild(script);
}

/**
 * GA4 is bootstrapped from this module instead of Google's inline snippet, because
 * the CSP forbids inline scripts. Ad-related signals are off: the site has no ads and
 * this keeps GA from linking visits to Google accounts for advertising.
 */
function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array copy.
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
}

export function initAnalytics() {
  if (import.meta.env.DEV) return;
  if (endpoint) loadScript("https://gc.zgo.at/count.js", { goatcounter: `${endpoint}/count` });
  if (gaId) initGoogleAnalytics();
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
