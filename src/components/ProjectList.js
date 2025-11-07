import React from "react";

export default function List({ projects }) {
  return (
    <section id="projects" className="section-shell portfolio">
      <div className="section-heading">
        <p className="eyebrow">Selected Projects</p>
        <h2>Products and platforms that merge usability with measurable value.</h2>
        <p>
          Each build leans on modern stacks, thoughtful UX, and close collaboration across
          design, engineering, and operations.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__media">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.deployment || project.project}
              >
                <img src={project.img} alt={project.alt} loading="lazy" />
              </a>
            </div>
            <div className="project-card__body">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="project-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.project}
                  className="project-link"
                >
                  <i className="bi bi-github"></i>
                  Code
                </a>
                {project.deployment && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.deployment}
                    className="project-link"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    Launch
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
