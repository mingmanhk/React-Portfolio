import React from "react";

const principles = [
  {
    title: "Operational Excellence",
    detail:
      "Transforms ITIL practices into intuitive playbooks that elevate SLA attainment and service empathy."
  },
  {
    title: "Automation & Insight",
    detail:
      "Pairs AI, telemetry, and analytics to surface decisive insights and reclaim time for strategic work."
  },
  {
    title: "People-First Leadership",
    detail:
      "Builds inclusive global teams with clear rituals, coaching, and trust-centered communication."
  }
];

const metrics = [
  { label: "SLA adherence", value: "99%" },
  { label: "Audit accuracy", value: "100%" },
  { label: "Helpdesk volume reduction", value: "70%" },
  { label: "Cost savings", value: "30%" }
];

const About = () => {
  return (
    <section id="about" className="section-shell about">
      <div className="section-heading">
        <p className="eyebrow">Professional Summary</p>
        <h2>Modern IT leadership anchored in clarity, care, and measurable impact.</h2>
        <p>
          Seasoned IT executive blending enterprise support, infrastructure, cybersecurity, and
          cloud innovation. I translate complex operations into warm human experiences, design
          resilient systems, and partner with business leaders to anticipate what&apos;s next.
        </p>
      </div>

      <div className="about-grid">
        {principles.map((principle) => (
          <article className="about-card" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.detail}</p>
          </article>
        ))}
      </div>

      <div className="metric-grid" aria-label="impact metrics">
        {metrics.map((metric) => (
          <div className="metric-pill" key={metric.label}>
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
