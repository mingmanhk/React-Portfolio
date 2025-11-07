import React from "react";

const skills = [
  {
    category: "Leadership & Interpersonal",
    summary:
      "Guides distributed teams with calm communication, clear rituals, and a playbook mindset.",
    items: [
      "Leadership",
      "Adaptability",
      "Strategic Thinking",
      "Executive Storytelling",
      "Time Management",
      "Distributed Team Management"
    ]
  },
  {
    category: "Technical Expertise",
    summary:
      "Full-stack view across cybersecurity, infrastructure, automation, and product delivery.",
    items: [
      "Cybersecurity",
      "Cloud Computing (AWS, Azure)",
      "IT Infrastructure",
      "ERP & SaaS platforms",
      "Network Engineering",
      "Compliance & Governance",
      "ITIL Service Design",
      "ServiceNow · Jira · Freshworks"
    ]
  },
  {
    category: "Operations & Delivery",
    summary:
      "Turns complex programs into steady operating rhythms with measurable, people-first outcomes.",
    items: [
      "Agile & PMP Programs",
      "Vendor Partnerships",
      "IT Support Leadership",
      "Asset Lifecycle",
      "Budget Management",
      "Policy Development",
      "Continuous Improvement"
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section-shell experience">
      <div className="section-heading">
        <p className="eyebrow">Core Capabilities</p>
        <h2>A balanced toolkit spanning strategy, technology, and delivery.</h2>
        <p>
          Every initiative blends resilient architecture with thoughtful stakeholder experiences.
          Here&apos;s how I approach the work.
        </p>
      </div>
      <div className="experience-grid">
        {skills.map((skillCategory) => (
          <article className="skill-card" key={skillCategory.category}>
            <div className="skill-card__header">
              <h3>{skillCategory.category}</h3>
              <p>{skillCategory.summary}</p>
            </div>
            <div className="skill-tags" aria-label={skillCategory.category}>
              {skillCategory.items.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
