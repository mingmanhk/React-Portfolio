import Icon from "./Icon";
import NetworkMap from "./NetworkMap";
import photo from "../assets/victor-lam-avatar.webp";
import { useContent } from "../i18n";

export default function Hero() {
  const { person, ui } = useContent();
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <div className="hero__id">
          <img src={photo} alt="" width="72" height="72" className="hero__photo" />
          <p className="hero__role">
            {person.role}
            <span>{person.org}</span>
          </p>
        </div>
        <h1 id="hero-title">{person.name}</h1>
        {/* Contact line shown only on paper, where the action buttons are hidden. */}
        <p className="print-only print-contact">
          Seattle, WA | {person.email} | linkedin.com/in/mingmanhk | github.com/mingmanhk | {person.website}
        </p>
        <p className="hero__lede">{person.lede}</p>
        {/* Résumé executive summary: printed and in the PDF, where the hero lede is replaced. */}
        <div className="print-only print-summary">
          <h2>{ui.summary}</h2>
          <p>{person.summary}</p>
        </div>
        <div className="hero__actions">
          <a className="button button--primary" href={`mailto:${person.email}`}>
            <Icon name="mail" size={18} /> {ui.emailMe}
          </a>
          <a className="button" href={person.resumeUrl} target="_blank" rel="noopener">
            <Icon name="file" size={18} /> {ui.resume}
          </a>
          <a className="icon-button icon-button--outline" href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={ui.linkedin}>
            <Icon name="linkedin" size={18} />
          </a>
          <a className="icon-button icon-button--outline" href={person.github} target="_blank" rel="noopener noreferrer" aria-label={ui.github}>
            <Icon name="github" size={18} />
          </a>
        </div>
      </div>

      <div className="hero__plan">
        <NetworkMap />
      </div>
    </section>
  );
}
