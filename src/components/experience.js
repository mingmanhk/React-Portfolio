import React from "react";

const skills = [
  {
    category: "Leadership & Interpersonal",
    items: [
      "Leadership",
      "Adaptability",
      "Communication",
      "Strategic Thinking",
      "Time Management",
      "Distributed Team Management",
    ],
  },
  {
    category: "Technical Expertise",
    items: [
      "Cybersecurity",
      "Cloud Computing (AWS, Azure)",
      "IT Infrastructure Management",
      "ERP Systems Knowledge",
      "Network Management",
      "Cybersecurity Compliance",
      "ITIL Frameworks",
      "Service Management Tools",
    ],
  },
  {
    category: "Operations & Project Management",
    items: [
      "Project Management (Agile, PMP)",
      "IT Operations Management",
      "Vendor Management",
      "IT Support Management",
      "Asset Lifecycle Management",
      "Budget Management",
      "Policy Development",
      "Continuous Improvement",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          {skills.map((skillCategory, index) => (
            <div className="col-lg-6" data-aos="fade-up" key={index}>
              <div className="skill-category">
                <h3 className="skill-category-title">{skillCategory.category}</h3>
                {skillCategory.items.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
