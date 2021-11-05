import React from "react";

export default function List() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>
                Master of Science in Computer Information Technology Systems
              </h4>
              <p>2011 - 2013</p>
              <p>
                <em>University of Houston</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>
                Bachelor of Science in Computer Science with minor in Management
              </h4>
              <p>2002 - 2005</p>
              <p>
                <em>Dallas Baptist University </em>
              </p>
            </div>
            <h3 className="resume-title">Certification</h3>
            <div className="resume-item">
              <h4>Coding Boot Camp</h4>
              <p>On-going</p>
              <p>
                <em>University of Washington</em>
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Beyondsoft Consulting Inc - Senior IT Manager</h4>
              <h5>2016- 2018</h5>
              <p>
                <em>Bellevue, WA</em>
              </p>
              <ul>
                <li>
                  Implemented an incident management and escalation system and
                  process
                </li>
                <li>
                  Define standard network architecture for all larger and
                  mid-size office and improve IT service reliability
                </li>
                <li>
                  Significantly restructured internal processes eliminating
                  duplication of efforts, better budget control, highest quality
                  resources selection, and more.
                </li>
                <li>
                  Reduced manual steps by automating functional testing and
                  deployment process.
                </li>
                <li>
                  Optimized delivery and enhanced visibility on all aspects of
                  the project.
                </li>
                <li>
                  Main point of contact for escalations, working closely with
                  multiple stakeholders to remove impediments.
                </li>
                <li>Responsible for resource management and team building.</li>
                <li>
                  Strengthened help desk relationship between the end user and
                  the external business partner.
                </li>
                <li>
                  Managing US data center using virtualization and SAN
                  technology (VMWare, NetApp)
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>HTC America - IT Manager</h4>
              <h5>2017 - 2010</h5>
              <p>
                <em>Bellevue, WA</em>
              </p>
              <ul>
                <li>
                  Manager a team of 4 regional IT help desk, Network, system and
                  Business Applications
                </li>
                <li>
                  2 remote office deployments during period of rapid growth and
                  managing 7 remote office and 1 data center
                </li>
                <li>
                  Deployed new systems including: SAN/NAS file storage,
                  disk-to-disk enterprise backup solution and complete disaster
                  recovery plan and procedures, PBX in all locations with VoIP
                  implementation and voicemail, help desk application, asset
                  tracking/inventory management, secure 802.11 wireless LAN
                  including Radius authentication server.
                </li>
                <li>
                  Administer 500+ Windows/ Mac/ Linux clients and 150+ servers
                  within 8 office locations and multiple home users.
                </li>
                <li>
                  Windows 2000/2003 Enterprise Active Directory and group policy
                  configuration, management, and security.
                </li>
                <li>
                  Maintain system stability and security utilizing tools, such
                  as Microsoft’s WSUS, Microsoft System Center, and WhatupGold.
                </li>
                <li>
                  Consolidated and streamlined network and telecom carriers
                  resulting in $90,000 annual savings
                </li>
                <li>Reduced operations budget by 37% in three years.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
