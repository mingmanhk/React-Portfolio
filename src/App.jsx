import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/about.jsx";
import Intro from "./intro.jsx";
import Projects from "./components/ProjectList.jsx";
import projectsData from "./components/projects.js";
import Experience from "./components/experience.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
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
