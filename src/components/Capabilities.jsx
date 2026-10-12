import { useContent } from "../i18n";

export default function Capabilities() {
  const { capabilities, education, ui } = useContent();
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <h2 id="capabilities-title">{ui.capabilities}</h2>
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

      <h3 className="education__title">{ui.education}</h3>
      <ul className="education">
        {education.map((e) => (
          <li key={e.name}>
            <span className="education__name">{e.name}</span>
            <span className="education__meta">
              {e.school}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
