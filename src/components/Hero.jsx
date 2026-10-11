import Icon from "./Icon";
import NetworkMap from "./NetworkMap";
import photo from "../assets/victor-lam-avatar.webp";
import { person } from "../data/profile";

export default function Hero() {
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
          {person.email} · linkedin.com/in/mingmanhk · github.com/mingmanhk · {person.website}
        </p>
        <p className="hero__lede">{person.lede}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={`mailto:${person.email}`}>
            <Icon name="mail" size={18} /> Email Victor
          </a>
          <a className="button" href={person.resumeUrl} target="_blank" rel="noopener">
            <Icon name="file" size={18} /> Résumé (PDF)
          </a>
          <a className="icon-button icon-button--outline" href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Icon name="linkedin" size={18} />
          </a>
          <a className="icon-button icon-button--outline" href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
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
