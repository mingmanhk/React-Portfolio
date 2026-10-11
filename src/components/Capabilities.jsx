import { capabilities, education } from "../data/profile";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">Capabilities</h2>
      <div className="capabilities">
        {capabilities.map((group) => (
          <div key={group.name} className="capability">
            <h3>{group.name}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="education__title">Education</h3>
      <ul className="education">
        {education.map((e) => (
          <li key={e.name}>
            <span className="education__name">{e.name}</span>
            <span className="education__meta">
              {e.school}, {e.years}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
