import { useEffect, useState } from "react";
import Icon from "./Icon";
import { useContent } from "../i18n";

export default function Contact() {
  const { person, ventures, ui } = useContent();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <h2 id="contact-title">{ui.contact}</h2>
      <p className="contact__lede">{ui.contactLede}</p>

      <div className="contact__email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
        <button type="button" className="button" onClick={copyEmail}>
          <Icon name={copied ? "check" : "copy"} size={18} />
          {copied ? ui.copied : ui.copy}
        </button>
        <span className="visually-hidden" role="status">{copied ? ui.copiedStatus : ""}</span>
      </div>

      <ul className="contact__links">
        <li>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={18} /> LinkedIn
          </a>
        </li>
        <li>
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={18} /> GitHub
          </a>
        </li>
        <li>
          <a href={person.resumeUrl} target="_blank" rel="noopener">
            <Icon name="file" size={18} /> {ui.resumeShort}
          </a>
        </li>
      </ul>

      <h3 className="ventures__title">{ui.alsoBuilding}</h3>
      <ul className="ventures">
        {ventures.map((v) => (
          <li key={v.name}>
            <a href={v.href} target="_blank" rel="noopener noreferrer">{v.name}</a>
            <span>{v.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
