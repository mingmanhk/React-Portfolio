import Icon from "./Icon";
import { useContent } from "../i18n";

function DutyList({ duties }) {
  if (!duties?.length) return null;
  return (
    <ul>
      {duties.map((duty) => (
        <li key={duty}>{duty}</li>
      ))}
    </ul>
  );
}

/**
 * One role: scope line first, then bullets. Anchor roles group bullets under
 * themes so the shape of the job reads before the detail.
 */
function Role({ job, defaultOpen }) {
  const { ui } = useContent();
  return (
    <li className={job.current ? "role role--current" : "role"}>
      <details open={defaultOpen}>
        <summary>
          <span className="role__when">
            <time>{job.start}</time>
            {ui.dateSep}
            <time>{job.end}</time>
          </span>
          <span className="role__head">
            <span className="role__org">{job.org}</span>
            <span className="role__title">
              {job.title}
              <span className="role__loc"> · {job.location}</span>
            </span>
          </span>
          <Icon name="chevron" className="role__chevron" size={18} />
        </summary>
        <div className="role__body">
          <p className="role__scope">{job.scope}</p>
          {job.groups ? (
            job.groups.map((g) => (
              <div key={g.theme} className="role__group">
                <h4 className="role__theme">{g.theme}</h4>
                <DutyList duties={g.duties} />
              </div>
            ))
          ) : (
            <DutyList duties={job.duties} />
          )}
        </div>
      </details>
    </li>
  );
}

export default function Experience() {
  const { experience, highlights, ui } = useContent();
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title">{ui.experience}</h2>

      <dl className="highlights" aria-label={ui.highlights}>
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
          <Role key={job.org} job={job} defaultOpen={i === 0} />
        ))}
      </ol>
    </section>
  );
}
