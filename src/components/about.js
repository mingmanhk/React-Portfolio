import React from "react";
import Photo from "../assets/Victor_Lam.jpg";

function about() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            I’m am an IT professional and relentless tech team leader with
            uncanny ability to bring people from all walks of organization
            together to solve issues at the heart of operational success and
            contribute to the business value stream. Agile and lean in my
            orientation, customer focused and team-motivated, I thrive on
            challenges and collaboration, bringing the best out of people while
            having fun addressing mundane as well as exhilarating tasks.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={Photo} className="img-fluid rounded-circle" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Senior IT Manager</h3>
            <p className="fst-italic">
              Alibaba Group (U.S.) Inc. (http://www.alibaba.com) – Bellevue, WA
            </p>
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>Responsible for
                    entire North America IT team operations and managing help
                    desk team
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>Redefined Overseas IT
                    service team from policy procedure, guideline, SLA, Service
                    mode and the result of highest overall user end-user
                    satisfaction in operation team
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>Standardized office
                    infrastructure matrix to optimize budgeting, ROI and user
                    experience across the board
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>Defined the M&A IT
                    integration procedure and checklist reduce integration
                    complexity{" "}
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>Data-driven on the
                    measuring IT performance and strategy on IT plan
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>Generated saving in
                    excess of 30% of IT budget by restructuring operations and
                    consolidating IT contracts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
