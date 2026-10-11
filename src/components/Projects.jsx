import { useState } from "react";
import Icon from "./Icon";
import { projects, projectTypes } from "../data/profile";

function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <li className="project">
      <div className="project__media">
        {imgFailed ? (
          <span className="project__placeholder" aria-hidden="true">
            <Icon name="code" size={32} />
          </span>
        ) : (
          <img src={project.img} alt={`${project.name} screenshot`} loading="lazy" decoding="async" onError={() => setImgFailed(true)} />
        )}
      </div>
      <div className="project__body">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project__links">
          {project.live && (
            <a href={project.live.href} target="_blank" rel="noopener noreferrer">
              <Icon name="external" size={16} /> {project.live.label}
              <span className="visually-hidden"> for {project.name}</span>
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={16} /> Source
            <span className="visually-hidden"> code for {project.name}</span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [type, setType] = useState("all");
  const shown = type === "all" ? projects : projects.filter((p) => p.type === type);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section__head">
        <h2 id="projects-title">Projects</h2>
        <p>Products I&apos;ve shipped and apps I&apos;ve built to keep my engineering skills current.</p>
      </div>

      <div className="filters" role="group" aria-label="Filter projects">
        {projectTypes.map((t) => (
          <button key={t.id} type="button" className="chip" aria-pressed={type === t.id} onClick={() => setType(t.id)}>
            {t.label}
            <span className="chip__count">
              {t.id === "all" ? projects.length : projects.filter((p) => p.type === t.id).length}
            </span>
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">{shown.length} projects shown</p>
      <ul className="projects">
        {shown.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>
    </section>
  );
}
