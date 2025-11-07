import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const heroStats = [
  { label: "Years leading IT programs", value: "18+" },
  { label: "Global users supported", value: "1K+" },
  { label: "Automation savings", value: "50%" }
];

const Intro = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "IT Manager",
        "Full-Stack Developer",
        "Cloud Solutions Architect",
        "Cybersecurity Professional"
      ],
      typeSpeed: 48,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="intro" className="hero">
      <div className="intro-container">
        <p className="eyebrow">IT Strategy · Cloud Platforms · Cyber Defense</p>
        <h1>Victor Lam</h1>
        <p className="hero-lede">
          I&apos;m a <span className="typed-text" ref={typedElement}></span> crafting resilient,
          people-first technology experiences across global enterprises.
        </p>
        <div className="intro-actions">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-outline">Let&apos;s Connect</a>
        </div>
        <div className="hero-stats" aria-label="career highlights">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
