import { useId, useState } from "react";
import { pillars, sites } from "../data/profile";
import { useReducedMotion } from "../hooks";

const CORE = { x: 260, y: 196 };

// Gentle curve from the core to a site, so links read as a network rather than spokes.
function linkPath(site) {
  const mx = (CORE.x + site.x) / 2;
  const my = (CORE.y + site.y) / 2;
  const bend = site.x < CORE.x ? -24 : 24;
  return `M${CORE.x} ${CORE.y} Q${mx + bend} ${my - bend / 2} ${site.x} ${site.y}`;
}

/**
 * Interactive map of how Victor approaches city IT. Choosing a pillar highlights
 * the sites and links it covers; data packets animate along active links unless
 * the visitor prefers reduced motion.
 */
export default function NetworkMap() {
  const [activeId, setActiveId] = useState("network");
  const reducedMotion = useReducedMotion();
  const baseId = useId();
  const active = pillars.find((p) => p.id === activeId);

  const onKeyDown = (event) => {
    const index = pillars.findIndex((p) => p.id === activeId);
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = pillars[(index + step + pillars.length) % pillars.length];
    setActiveId(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  return (
    <figure className="netmap">
      <h2 id={`${baseId}-heading`} className="netmap__heading">How I approach city IT</h2>
      <div className="netmap__tabs" role="tablist" aria-labelledby={`${baseId}-heading`} onKeyDown={onKeyDown}>
        {pillars.map((p) => (
          <button
            key={p.id}
            id={`${baseId}-tab-${p.id}`}
            role="tab"
            type="button"
            aria-selected={p.id === activeId}
            aria-controls={`${baseId}-panel`}
            tabIndex={p.id === activeId ? 0 : -1}
            className="netmap__tab"
            onClick={() => setActiveId(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <svg
        className={`netmap__svg netmap__svg--${activeId}`}
        viewBox="0 0 520 430"
        role="img"
        aria-labelledby={`${baseId}-title`}
      >
        <title id={`${baseId}-title`}>{`Diagram of city sites on one connected network: ${active.name}`}</title>

        <g className="netmap__links">
          {sites.map((site) => {
            const on = active.links.includes(site.id);
            const d = linkPath(site);
            return (
              <g key={site.id}>
                <path id={`${baseId}-link-${site.id}`} d={d} className={on ? "link link--on" : "link"} />
                {on && !reducedMotion && (
                  <circle r="3.5" className="packet">
                    <animateMotion
                      dur={site.id === "cloud" ? "2.4s" : "3.2s"}
                      repeatCount="indefinite"
                      keyPoints={site.id === "cloud" ? "1;0" : "0;1"}
                      keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath href={`#${baseId}-link-${site.id}`} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            );
          })}
        </g>

        <g className="netmap__core">
          <rect x={CORE.x - 58} y={CORE.y - 26} width="116" height="52" rx="12" />
          <text x={CORE.x} y={CORE.y + 5} textAnchor="middle">City network</text>
        </g>

        {sites.map((site) => {
          const on = active.nodes.includes(site.id);
          const below = site.y > CORE.y;
          return (
            <g key={site.id} className={on ? "node node--on" : "node"}>
              <circle cx={site.x} cy={site.y} r="9" />
              {activeId === "standard" && on && (
                <path
                  className="node__check"
                  d={`M${site.x - 4} ${site.y} l3 3 l5 -6`}
                />
              )}
              <text x={site.x} y={below ? site.y + 28 : site.y - 18} textAnchor="middle">
                {site.label}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${activeId}`} className="netmap__caption" aria-live="polite">
        {active.summary}
      </figcaption>
    </figure>
  );
}
