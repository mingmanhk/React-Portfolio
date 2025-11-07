import React from "react";

const education = [
  {
    degree: "Master of Science in Computer Information Technology Systems",
    years: "2011 - 2013",
    school: "University of Houston",
  },
  {
    degree: "Bachelor of Science in Computer Science with minor in Management",
    years: "2002 - 2005",
    school: "Dallas Baptist University",
  },
];

const certification = [
  {
    name: "Coding Boot Camp",
    years: "Completed 2023",
    school: "University of Washington",
  },
];

const experience = [
  {
    title: "Alibaba Group (U.S.) Inc. | IT Manager",
    years: "May 2018 - Apr 2025",
    location: "Bellevue, WA",
    duties: [
      "Revamped global ticketing systems in alignment with ITIL processes, refining SLA/KPI frameworks to enhance service desk performance, reporting accuracy, and overall user experience.",
      "Directed Americas service desk operations supporting 1,000+ users across diverse platforms (Windows, macOS, virtual desktops, mobile), achieving 99.9%+ user satisfaction and 99% SLA compliance through structured escalation workflows and proactive support delivery.",
      "Administered ITSM platforms (ServiceNow, Jira, Freshworks, HP Service Manager, SCSM) to standardize ticketing processes, reduce incident recurrence, and improve support transparency, leveraging ITIL frameworks.",
      "Managed global asset lifecycle programs by developing and enforcing IT policies aligned with cybersecurity and IT governance standards, ensuring 100% audit accuracy and a zero-loss record across offices and data centers.",
      "Implemented RFID and BLE technologies to automate inventory tracking, reducing reconciliation time by 95% and enhancing real-time CMDB accuracy.",
      "Established enterprise knowledge systems, including global SOPs and governance libraries, which reduced Helpdesk volume by 70% and improved support consistency.",
      "Integrated automation and AI chatbot tools to enable self-healing workflows, proactive diagnostics, and faster responsiveness to technical inquiries.",
      "Developed predictive performance dashboards using SQL, Python, Tableau, and Power BI, visualizing KPIs, SLA adherence, and TCO metrics for executive reviews and operational rhythm.",
      "Collaborated with Finance teams on predictive modeling to improve IT procurement forecast accuracy to 95%, reduce hardware/software spend by 50%, and minimize inventory footprint.",
      "Led enterprise infrastructure upgrades and refresh cycles to ensure uninterrupted availability for AV systems, executive meeting rooms, and collaboration tools in hybrid environments.",
      "Enhanced executive efficiency by managing incident response, ensuring accurate RCA documentation, and coordinating VIP engagement logistics with precision.",
      "Mentored Tier 1–3 service desk teams globally, cultivating technical excellence and collaborative best practices to strengthen delivery outcomes.",
      "Oversaw vendor relationships and service contracts, reducing operational costs by 30% through diligent performance monitoring, SLA enforcement, and strategic negotiation.",
    ],
  },
  {
    title: "Beyondsoft Consulting Inc. | Senior IT Manager",
    years: "Jun 2016 - May 2018",
    location: "Bellevue, WA",
    duties: [
      "Developed foundational IT frameworks, including policies and support procedures, from conception to enterprise-wide adoption, supporting company growth from 30+ to 500+ users across multi-state offices.",
      "Orchestrated service delivery and infrastructure readiness during 5+ M&A integrations by defining IT due diligence playbooks and ensuring compliant onboarding and asset continuity.",
      "Championed virtualization and cloud-first strategies with VMware, Azure, and AWS to increase scalability, reduce infrastructure overhead, and streamline support operations.",
      "Formulated IT infrastructure roadmaps aligned with business goals to enhance system performance, disaster resilience, and strategic planning across datacenter and remote deployments.",
      "Directed cross-functional IT teams in the successful execution of projects involving infrastructure upgrades, asset lifecycle programs, and business continuity measures.",
      "Implemented disaster recovery and business continuity frameworks to minimize operational disruptions and protect mission-critical services.",
      "Established robust compliance controls across ISO, SOX, SOC, and HIPAA domains, ensuring regulatory alignment and audit readiness.",
      "Reengineered internal IT and asset workflows to remove inefficiencies, enhance transparency, and optimize budget control and resource utilization.",
      "Instituted scalable monitoring and performance systems, strengthening asset visibility and operational metrics across regional support teams.",
    ],
  },
  {
    title: "HTC America Inc. | IT Manager",
    years: "Apr 2007 - Jun 2016",
    location: "Bellevue, WA",
    duties: [
      "Led regional IT operations teams (Service Desk, Network, Systems Administration) to maintain infrastructure stability and deliver responsive end-user support across North America.",
      "Directed hybrid infrastructure modernization initiatives, migrating from on-premises to virtualized environments (VMware, Azure) to enhance scalability, performance, and resilience.",
      "Established and managed a U.S.-based colocation data center, executing high-impact upgrade and migration projects with 100% uptime and zero business disruption.",
      "Developed and enforced enterprise-wide IT policies and procedures, including disaster recovery and business continuity plans, supporting ISO certification and audit readiness.",
      "Optimized SQL performance tuning and diagnostics to reduce database latency and boost support system responsiveness and reporting accuracy.",
      "Engineered and refined APIs that enabled seamless cross-platform data integration and real-time accessibility across enterprise environments.",
      "Directed software and infrastructure project lifecycles, delivering initiatives on time and within scope while meeting quality benchmarks and business priorities.",
      "Collaborated with global SAP teams to align regional IT infrastructure requirements with enterprise strategies, ensuring compliance and operational integration.",
    ],
  },
  {
    title: "HTC America Inc. | Software Developer",
    years: "Apr 2007 - Jun 2016",
    location: "Bellevue, WA",
    duties: [
      "Contributed to regional IT operations by supporting service desk, network, and systems administration, ensuring stable infrastructure and timely end-user support across North America.",
      "Supported hybrid infrastructure modernization efforts by assisting in the transition from on-premises to virtualized environments (VMware, Azure), improving scalability and resilience.",
      "Assisted in managing a U.S.-based colocation data center, contributing to high-impact upgrade and migration projects with 100% uptime.",
      "Aided in the development and enforcement of enterprise-wide IT policies, including disaster recovery and business continuity plans to support ISO certification.",
      "Participated in SQL performance tuning and diagnostics to reduce database latency and enhance reporting accuracy.",
      "Developed and optimized APIs for seamless cross-platform data integration, improving interoperability and real-time data accessibility.",
      "Supported software and infrastructure project lifecycles by contributing to on-time, in-scope project delivery aligned with business priorities.",
      "Collaborated with global SAP teams to ensure regional IT infrastructure alignment with enterprise deployment strategies.",
    ],
  },
  {
    title: "Directron.com | Full-Stack Developer",
    years: "Mar 2005 - Apr 2007",
    location: "Houston, TX",
    duties: [
      "Designed and developed internal web applications to streamline warehouse operations and enhance e-commerce functionality, resulting in improved inventory workflows and user productivity.",
      "Engineered and maintained PHP-based backend services and MySQL",
    ],
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={`edu-${index}`}>
                <h4>{edu.degree}</h4>
                <p>{edu.years}</p>
                <p>
                  <em>{edu.school}</em>
                </p>
              </div>
            ))}

            <h3 className="resume-title">Certification</h3>
            {certification.map((cert, index) => (
              <div className="resume-item" key={`cert-${index}`}>
                <h4>{cert.name}</h4>
                <p>{cert.years}</p>
                <p>
                  <em>{cert.school}</em>
                </p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((job, index) => (
              <div className="resume-item" key={`exp-${index}`}>
                <h4 style={{ fontWeight: 700 }}>{job.title}</h4>
                <h5>{job.years}</h5>
                <p>
                  <em>{job.location}</em>
                </p>
                <ul>
                  {job.duties.map((duty, i) => (
                    <li key={`duty-${index}-${i}`}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
