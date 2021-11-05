import React from "react";

export default function List({ projects }) {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div class="row">
           {projects.map((project) => (
            <div class="col-12 col-md-5">
             <div class="portfolio-wrap">
                <h4 class="title"><a target="_blank" rel="noopener noreferrer" href={`${project.project}`}>{project.name}</a></h4> 
              <a target="_blank" rel="noopener noreferrer" href={`${project.deployment}`}><img src={`${project.img}`} class="img-fluid" alt={`${project.alt}`}></img></a>
            </div>
             </div>
              ))}
        </div>
      </div>
    </section>
  );
}
