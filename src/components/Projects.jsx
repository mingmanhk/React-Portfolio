import { useState } from "react";
import Icon from "./Icon";
import { useContent } from "../i18n";

function ProjectCard({ project }) {
  const { ui } = useContent();
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <li className="project">
      <div className={`project__media${project.icon ? " project__media--icon" : ""}`}>
        {imgFailed || !project.img ? (
          <span className="project__placeholder" aria-hidden="true">
            <Icon name="code" size={32} />
          </span>
        ) : (
          <img src={project.img} alt={project.icon ? ui.appIcon(project.name) : ui.screenshot(project.name)} loading="lazy" decoding="async" onError={() => setImgFailed(true)} />
        )}
      </div>
      <div className="project__body">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project__links">
          {project.live && (
            <a href={project.live.href} target="_blank" rel="noopener noreferrer">
              <Icon name="external" size={16} /> {project.live.label}
              <span className="visually-hidden"> ({ui.forProject(project.live.label, project.name)})</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={16} /> {ui.source}
              <span className="visually-hidden"> ({ui.forProject(ui.source, project.name)})</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const { projects, ui } = useContent();
  // Shipped products lead; boot camp work stays available but collapsed so it
  // doesn't dilute an executive profile.
  const featured = projects.filter((p) => p.type === "product");
  const earlier = projects.filter((p) => p.type !== "product");

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section__head">
        <h2 id="projects-title">{ui.projects}</h2>
        <p>{ui.projectsLede}</p>
      </div>

      <ul className="projects">
        {featured.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>

      <details className="earlier">
        <summary>
          {ui.earlierWork} <span className="chip__count">{earlier.length}</span>
        </summary>
        <p className="earlier__note">{ui.earlierNote}</p>
        <ul className="projects">
          {earlier.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </ul>
      </details>
    </section>
  );
}
