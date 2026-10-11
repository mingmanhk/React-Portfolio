import { useState } from "react";
import Icon from "./Icon";
import { experience, highlights } from "../data/profile";

const PREVIEW = 6;

function Role({ job, defaultOpen }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = job.duties.length - PREVIEW;
  const duties = expanded || hidden <= 1 ? job.duties : job.duties.slice(0, PREVIEW);

  return (
    <li className="role">
      <details open={defaultOpen}>
        <summary>
          <span className="role__when">
            <time>{job.start}</time> to <time>{job.end}</time>
          </span>
          <span className="role__head">
            <span className="role__org">{job.org}</span>
            <span className="role__title">{job.title}</span>
          </span>
          <Icon name="chevron" className="role__chevron" size={18} />
        </summary>
        <div className="role__body">
          <p className="role__location">{job.location}</p>
          <ul>
            {duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
          {hidden > 1 && (
            <button type="button" className="text-button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? "Show fewer" : `Show ${hidden} more`}
            </button>
          )}
        </div>
      </details>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>

      <dl className="highlights" aria-label="Career highlights">
        {highlights.map((h) => (
          <div key={h.text} className="highlight">
            <dt>{h.value}</dt>
            <dd>
              {h.text}
              <span className="highlight__org">{h.org}</span>
            </dd>
          </div>
        ))}
      </dl>

      <ol className="timeline">
        {experience.map((job, i) => (
          <Role key={job.org + job.start} job={job} defaultOpen={i === 0} />
        ))}
      </ol>
    </section>
  );
}
