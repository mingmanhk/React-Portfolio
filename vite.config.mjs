import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages cannot send HTTP security headers, so the Content-Security-Policy
 * is injected as a <meta> tag at build time. Analytics origins are only allowed
 * when an analytics site code is configured, keeping the default policy strict.
 */
export function contentSecurityPolicy(env) {
  const code = env.VITE_GOATCOUNTER_CODE?.trim();
  const counter = code ? `https://${code}.goatcounter.com` : "";
  const directives = {
    "default-src": ["'self'"],
    "script-src": ["'self'", code && "https://gc.zgo.at"],
    "style-src": ["'self'"],
    "img-src": ["'self'", "data:", "https://github.com", "https://*.githubusercontent.com", counter],
    "font-src": ["'self'"],
    "connect-src": ["'self'", counter],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "form-action": ["'none'"],
    "upgrade-insecure-requests": [],
  };
  return Object.entries(directives)
    .map(([key, values]) => [key, ...values.filter(Boolean)].join(" "))
    .join("; ");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    // GitHub Pages serves the site under /React-Portfolio/; Vercel serves it at the
    // domain root. Vercel sets VERCEL=1 during its builds, so no manual config is needed.
    base: process.env.VERCEL ? "/" : "/React-Portfolio/",
    plugins: [
      react(),
      {
        name: "inject-csp",
        apply: "build",
        transformIndexHtml(html) {
          // Google Search Console ownership tag; set VITE_GOOGLE_SITE_VERIFICATION to enable.
          const gsc = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
          return html
            .replace(
              "<!--CSP-->",
              `<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy(env)}">`
            )
            .replace("<!--GSC-->", gsc ? `<meta name="google-site-verification" content="${gsc}">` : "");
        },
      },
    ],
    server: { port: 3000 },
    build: {
      outDir: "build",
      // Source maps would publish the full source tree; not needed in production.
      sourcemap: false,
    },
  };
});
