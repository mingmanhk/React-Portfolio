import { useState } from "react";
import Icon from "./Icon";
import { useContent } from "../i18n";

function ProjectCard({ project }) {
  const { ui } = useContent();
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <li className="project">
      <div className="project__media">
        {imgFailed ? (
          <span className="project__placeholder" aria-hidden="true">
            <Icon name="code" size={32} />
          </span>
        ) : (
          <img src={project.img} alt={ui.screenshot(project.name)} loading="lazy" decoding="async" onError={() => setImgFailed(true)} />
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
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={16} /> {ui.source}
            <span className="visually-hidden"> ({ui.forProject(ui.source, project.name)})</span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const { projects, projectTypes, ui } = useContent();
  const [type, setType] = useState("all");
  const shown = type === "all" ? projects : projects.filter((p) => p.type === type);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section__head">
        <h2 id="projects-title">{ui.projects}</h2>
        <p>{ui.projectsLede}</p>
      </div>

      <div className="filters" role="group" aria-label={ui.filterLabel}>
        {projectTypes.map((t) => (
          <button key={t.id} type="button" className="chip" aria-pressed={type === t.id} onClick={() => setType(t.id)}>
            {t.label}
            <span className="chip__count">
              {t.id === "all" ? projects.length : projects.filter((p) => p.type === t.id).length}
            </span>
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">{ui.shown(shown.length)}</p>
      <ul className="projects">
        {shown.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>
    </section>
  );
}
