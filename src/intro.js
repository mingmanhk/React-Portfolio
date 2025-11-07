import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Intro = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "IT Manager",
        "Full-Stack Developer",
        "Cloud Solutions Architect",
        "Cybersecurity Professional",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="intro" className="d-flex flex-column justify-content-center align-items-center">
      <div className="intro-container" data-aos="fade-in">
        <h1>Victor Lam</h1>
        <p>I'm a <span className="typed-text" ref={typedElement}></span></p>
      </div>
    </section>
  );
};

export default Intro;