import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import About from "./components/about.js";
import Intro from "./intro.js";
import Projects from "./components/ProjectList.js";
import projectsData from "./components/projects.js";
import Experience from "./components/experience.js";
import Resume from "./components/resume.js";
import Contact from "./components/contact.js";
import Footer from "./components/Footer.js";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <main id="main">
        <About />
        <Experience />
        <Resume />
      <Projects projects={projectsData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
