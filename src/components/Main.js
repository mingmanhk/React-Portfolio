import React from "react";
import ProjectList from "./ProjectList";
//import project list
import projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";
import Experience from "./experience";
                  
function Main() {
  return (
    <main>
      <About />
      <Experience />
      <Resume />
      <ProjectList projects={projects} />
      <Contact />
    </main>
  );
}

export default Main;
