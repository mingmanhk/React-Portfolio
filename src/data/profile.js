import pixelColorPickImg from "../assets/pixel-color-pick.webp";
import taskinImg from "../assets/taskin.webp";
import screenGrabberIcon from "../assets/screengrabber-icon.webp";
import contactSyncMateIcon from "../assets/contact-syncmate-icon.webp";
import habitronIcon from "../assets/habitron-icon.webp";
import deepTickerImg from "../assets/deepticker.webp";
import w1itImg from "../assets/w1it.webp";

export const person = {
  name: "Victor Lam",
  role: "Acting Chief Information Officer",
  org: "City of Lakewood, Washington",
  lede:
    "Public-sector CIO and enterprise IT leader. I run citywide technology strategy, security, and infrastructure for the City of Lakewood, after 18 years leading IT for global companies in the Seattle area.",
  // Résumé executive summary (print and PDF).
  summary:
    "Chief Information Officer (CIO) and enterprise IT leader with 18+ years modernizing infrastructure, cybersecurity, and service operations across the public sector and global enterprises. Currently Acting CIO for the City of Lakewood, Washington, leading citywide IT strategy, enterprise architecture, Zero Trust identity, and resilient hybrid infrastructure. Known for turning operating data into defensible investment decisions: 99% SLA compliance, 70% fewer help desk tickets, and hardware and software spend cut in half.",
  email: "mingmanhk@gmail.com",
  // Generated from this same data by scripts/build-resume-pdf.mjs (npm run resume:pdf).
  resumeUrl: `${import.meta.env?.BASE_URL ?? "/"}victor-lam-resume.pdf`,
  website: "mingmanhk.github.io/React-Portfolio",
  linkedin: "https://www.linkedin.com/in/mingmanhk",
  github: "https://github.com/mingmanhk",
};

/**
 * The hero network map illustrates how Victor approaches city IT. It is framed as
 * a personal approach, not a City plan, and stays at goal level so the public page
 * never describes current infrastructure or security posture.
 */
export const pillars = [
  {
    id: "login",
    name: "One Login",
    summary:
      "One identity for every employee, secured with strong multi-factor sign-in.",
    nodes: ["cloud", "hall", "police", "works", "council", "parks", "remote"],
    links: ["cloud"],
  },
  {
    id: "network",
    name: "One Network",
    summary:
      "Every site and remote worker on one managed, monitored network.",
    nodes: ["hall", "police", "works", "council", "parks", "remote"],
    links: ["hall", "police", "works", "council", "parks", "remote"],
  },
  {
    id: "standard",
    name: "One Standard",
    summary:
      "Shared standards for hardware, support, and licensing so every investment is measurable.",
    nodes: ["hall", "police", "works", "council", "parks"],
    links: [],
  },
];

export const sites = [
  { id: "hall", label: "City Hall", x: 110, y: 80 },
  { id: "police", label: "Police", x: 410, y: 80 },
  { id: "works", label: "Public Works", x: 58, y: 206 },
  { id: "council", label: "City Council", x: 462, y: 206 },
  { id: "parks", label: "Parks", x: 120, y: 330 },
  { id: "remote", label: "Remote staff", x: 400, y: 330 },
  { id: "cloud", label: "Cloud identity", x: 260, y: 26 },
];

export const highlights = [
  { value: "99%", text: "SLA compliance across a 1,000-user Americas service desk", org: "Alibaba" },
  { value: "70%", text: "fewer help desk tickets after building global self-service knowledge", org: "Alibaba" },
  { value: "5+", text: "mergers and acquisitions integrated with no loss of service", org: "Beyondsoft" },
  { value: "100%", text: "uptime through a full colocation data center build and migration", org: "HTC America" },
];

/**
 * Every role uses the same structure: scope line, then up to four themed groups
 * from one fixed set, always in this order: Strategy and leadership, Security
 * and infrastructure, Operations and service delivery, Engineering and products.
 */
export const experience = [
  {
    org: "City of Lakewood, Washington",
    title: "Acting Chief Information Officer / IT Manager",
    start: "Mar 2026",
    end: "Present",
    location: "Lakewood, WA",
    current: true,
    scope: "Lead citywide IT strategy, infrastructure modernization, and cybersecurity across City Hall, Police, Public Works, Parks, and public-facing services.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Drive strategic planning, enterprise architecture, unified technology standards, and project portfolio delivery that align every investment to cost efficiency, operational fit, and regulatory compliance.",
          "Implement data-driven governance for assets, service desk operations, and licensing to support transparent, defensible budget decisions.",
          "Established program and portfolio management practices for citywide technology investments.",
          "Introduced data governance standards for assets, licensing, and service operations.",
          "Led org design and role leveling for IT functions supporting Police, Parks, and Public Works."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Oversee the City’s cybersecurity and compliance program, including access management, monitoring, and data protection.",
          "Lead the City’s identity and access modernization, guided by Zero Trust principles.",
          "Manage on-premises and cloud infrastructure for high performance, reliability, and secure connectivity across all departments.",
          "Reduce virtualization and licensing costs through platform consolidation while improving disaster-recovery resilience for critical systems."
        ]
      }
    ]
  },
  {
    org: "FRS Clipper",
    title: "IT Consultant",
    start: "Nov 2025",
    end: "Feb 2026",
    location: "Seattle, WA",
    scope: "Delivered strategic IT consulting for a Seattle-based passenger ferry and travel operator, advising leadership on operations, infrastructure modernization, and security.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Led the integration of U.S. operations with the parent company in Flensburg, Germany, ensuring seamless connectivity and alignment with global standards.",
          "Collaborated with international IT teams and a German developer to keep cross-border projects on schedule and meeting quality expectations.",
          "Evaluated software, vendor services, and support workflows, developing ITIL-based migration plans with prioritized recommendations for reliability, security, and efficiency."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Rebuilt core infrastructure: Active Directory and domain structure, VMware hosts, file and print services with redesigned shared storage and permissions, and the network (VLANs, routing, firewall policies, segmentation).",
          "Strengthened identity, access, and security controls aligned with Zero Trust principles."
        ]
      },
      {
        theme: "Operations and service delivery",
        duties: [
          "Provided hands-on technical support and training to Seattle IT staff, improving local capabilities and day-to-day service stability.",
          "Streamlined support workflows and processes to reduce friction and increase reliability across U.S. operations."
        ]
      }
    ]
  },
  {
    org: "PinkkaMii LLC",
    title: "Founder and IT Consultant",
    start: "May 2025",
    end: "Present",
    location: "Seattle, WA",
    scope: "Independent practice building AI-driven security tools and software products, and advising small businesses on IT.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Built and launched W1IT.com, an IT consulting and managed services brand for network architecture, design, and security assessments.",
          "Advise small businesses on cloud infrastructure, security, and IT operations."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Built an LLM-based threat-prediction model for a NOC dashboard that correlates Checkmk monitoring and SIEM events to surface emerging threats in real time.",
          "Applied AI and machine learning to scale security monitoring and to measure security posture and risk with repeatable, automated assessments."
        ]
      },
      {
        theme: "Engineering and products",
        duties: [
          "Launched Taskin.app and shipped native macOS apps in Swift and SwiftUI, including ScreenGrabber, Contact SyncMate, and Pixel Color Pick (Mac App Store), plus DeepTicker for iOS."
        ]
      }
    ]
  },
  {
    org: "Alibaba Group (U.S.) Inc.",
    title: "IT Manager",
    start: "May 2018",
    end: "Apr 2025",
    location: "Bellevue, WA",
    scope: "Led Americas IT service operations for 1,000+ users and global asset, procurement, and ITSM programs.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Halved procurement spend through predictive modeling built with Finance, reaching 95% forecast accuracy and shrinking the inventory footprint.",
          "Reduced vendor costs 30% through contract management, SLA enforcement, performance monitoring, and negotiation.",
          "Built predictive executive dashboards in SQL, Python, Tableau, and Power BI for KPIs, SLA adherence, and total cost of ownership.",
          "Directed portfolio prioritization and multi-year infrastructure planning.",
          "Built data governance models for CMDB accuracy and procurement forecasting.",
          "Mentored Tier 1–3 global teams using competency frameworks and structured progression, building escalation discipline and technical excellence."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Directed global asset lifecycle programs under IT and cybersecurity policy, with 100% audit accuracy and zero loss; RFID and BLE automation cut reconciliation time 95% and kept the CMDB accurate in real time.",
          "Ran infrastructure refresh cycles for AV, executive meeting rooms, and collaboration tools, and managed executive incident response and root-cause analysis."
        ]
      },
      {
        theme: "Operations and service delivery",
        duties: [
          "Achieved 99.9%+ user satisfaction and 99% SLA compliance across Windows, macOS, VDI, and mobile through structured escalation and proactive support.",
          "Rebuilt global ticketing on ITIL and standardized ITSM platforms (ServiceNow, Jira, Freshworks, HP Service Manager, SCSM), refining SLA and KPI frameworks to reduce incident recurrence.",
          "Cut help desk volume 70% with SOPs, governance libraries, and self-service portals, plus automation and AI chatbots for self-healing workflows."
        ]
      }
    ]
  },
  {
    org: "Beyondsoft Consulting Inc.",
    title: "Senior IT Manager",
    start: "Jun 2016",
    end: "May 2018",
    location: "Bellevue, WA",
    scope: "Led IT for a fast-growing consulting firm across multi-state offices and 5+ acquisitions.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Designed foundational enterprise architecture and data governance standards, with IT policies and support procedures taken from first draft to company-wide adoption.",
          "Built the IT organization from 30 to 500+ users using org design and role leveling.",
          "Developed infrastructure roadmaps aligned with business goals, improving performance and disaster resilience across data center and remote offices.",
          "Led IT due diligence and service readiness for 5+ M&A integrations, with compliant onboarding, asset continuity, and alignment to parent-company standards."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Championed a cloud-first strategy on VMware, Azure, and AWS, increasing scalability and reducing infrastructure overhead across hybrid environments.",
          "Implemented ISO, SOX, SOC, and HIPAA controls and disaster recovery and continuity frameworks, keeping the company audit-ready."
        ]
      },
      {
        theme: "Operations and service delivery",
        duties: [
          "Reengineered IT and asset workflows and established monitoring and performance metrics, improving transparency, budget control, and asset visibility.",
          "Directed cross-functional teams delivering infrastructure upgrades, asset lifecycle programs, and continuity projects on time and in scope."
        ]
      }
    ]
  },
  {
    org: "HTC America Inc.",
    title: "Senior IT Manager",
    start: "Apr 2007",
    end: "Jun 2016",
    location: "Seattle, WA",
    scope: "Rose from MIS Engineer to Senior IT Manager (2013–2016), directing North American IT operations across service desk, network, and systems administration.",
    groups: [
      {
        theme: "Strategy and leadership",
        duties: [
          "Aligned regional infrastructure with global SAP deployments and managed CRM integration with external business partners.",
          "Delivered software and infrastructure projects on time and in scope, including a Cisco Call Manager 4.0 to 9.0 migration and Expressway videoconferencing."
        ]
      },
      {
        theme: "Security and infrastructure",
        duties: [
          "Established and ran a U.S. colocation data center, delivering upgrade and migration projects with 100% uptime and zero business disruption.",
          "Led hybrid modernization from on-premises to VMware and Azure, improving scalability, performance, and resilience.",
          "Wrote enterprise IT policies and disaster recovery and continuity plans that supported ISO certification and audit readiness."
        ]
      },
      {
        theme: "Engineering and products",
        duties: [
          "Designed APIs and tuned SQL performance, reducing database latency and improving reporting accuracy.",
          "Built an enterprise SharePoint 2010 platform, EDI and encrypted data exchange (VB.NET, XML, SFTP, PGP), and SQL Server reporting automation."
        ]
      }
    ]
  },
  {
    org: "AxionTech.com and Directron.com",
    title: "Software Developer and Technical Support",
    start: "2006",
    end: "2007",
    location: "Houston, TX",
    scope: "Software Developer at AxionTech.com (APIs, SQL optimization, software delivery) and technical support at Directron.com (systems consulting and network installation).",
    duties: []
  }
];

export const capabilities = [
  {
    name: "Leadership and strategy",
    items: ["IT strategy and multi-year roadmaps", "Program and portfolio management", "Capital planning and prioritization", "Project governance and PMO alignment", "People leadership and org design", "Procurement strategy and vendor management"],
  },
  {
    name: "Enterprise architecture and governance",
    items: ["Enterprise and solution architecture", "Technology standards and IT governance", "Data governance", "IT financial management"],
  },
  {
    name: "Security and risk",
    items: ["Cybersecurity architecture", "Identity and access management and Zero Trust", "SIEM, monitoring, and threat detection", "ISO, SOX, SOC, HIPAA controls", "Risk assessment and audit readiness"],
  },
  {
    name: "Infrastructure and resilience",
    items: ["Hybrid cloud: AWS, Azure, VMware", "Microsoft 365 and Entra ID", "Network architecture", "Business continuity and disaster recovery"],
  },
  {
    name: "Service delivery and operations",
    items: ["ITIL service design", "ServiceNow, Jira, Freshworks", "Asset lifecycle and CMDB", "KPI and SLA dashboards"],
  },
  {
    name: "Engineering and development",
    items: ["AI, ML, and LLM integration", "React and Node.js", "Swift and SwiftUI", "SQL and Python"],
  },
];
export const projectTypes = [
  { id: "all", label: "All" },
  { id: "product", label: "Products" },
  { id: "web", label: "Web apps" },
  { id: "backend", label: "Back end" },
];

const raw = (repo, path) => `https://github.com/${repo}/raw/${path}`;

export const projects = [
  {
    name: "W1IT Solutions",
    type: "product",
    summary: "The IT consulting and managed services brand I founded: network architecture, cybersecurity assessments, and cloud solutions for small businesses.",
    img: w1itImg,
    live: { href: "https://w1it.com/", label: "w1it.com" },
  },
  {
    name: "Taskin",
    type: "product",
    summary: "Home for my Mac apps and a free, no-signup online toolkit: QR codes, background removal, image compression, passport photos, file conversion, and AI stock analysis.",
    img: taskinImg,
    live: { href: "https://taskin.app/", label: "taskin.app" },
  },
  {
    name: "Pixel Color Pick",
    type: "product",
    summary: "An open-source macOS color picker with a screen-wide eyedropper, one-click HEX, RGB, and HSL copy, and color history. Built with Swift and SwiftUI.",
    img: pixelColorPickImg,
    repo: "https://github.com/mingmanhk/PixelColorPick",
    live: { href: "https://apps.apple.com/us/app/pixel-color-pick/id6754412788?mt=12", label: "App Store" },
  },
  {
    name: "ScreenGrabber",
    type: "product",
    summary: "A native macOS screen capture app, built with Swift and SwiftUI and sold through Taskin.",
    img: screenGrabberIcon,
    icon: true,
    live: { href: "https://taskin.app/", label: "taskin.app" },
  },
  {
    name: "Contact SyncMate",
    type: "product",
    summary: "A native macOS app for keeping contacts in sync, built with Swift and SwiftUI and sold through Taskin.",
    img: contactSyncMateIcon,
    icon: true,
    live: { href: "https://taskin.app/", label: "taskin.app" },
  },
  {
    name: "DeepTicker",
    type: "product",
    summary: "A privacy-focused iOS portfolio tracker with AI market insights from your choice of model provider. Built with Swift and SwiftUI; data stays on the device.",
    img: deepTickerImg,
    repo: "https://github.com/mingmanhk/DeepTicker",
  },
  {
    name: "Habitron",
    type: "web",
    summary: "A habit tracker with charts and authentication, built with Express, Sequelize, and Handlebars.",
    img: habitronIcon,
    icon: true,
    repo: "https://github.com/xaker00/habitron",
  },
  {
    name: "Tech Blog",
    type: "web",
    summary: "An MVC blog platform with sessions and authentication on Express and MySQL.",
    img: raw("mingmanhk/tech-blog", "main/src/demo.gif"),
    repo: "https://github.com/mingmanhk/tech-blog",
  },
  {
    name: "Find My Plate",
    type: "web",
    summary: "Find dining nearby by location or ZIP code, and search by cuisine or menu.",
    img: raw("troyat88/Find-My-Plate", "main/assets/images/Screenshot.png"),
    repo: "https://github.com/troyat88/Find-My-Plate",
    live: { href: "https://troyat88.github.io/Find-My-Plate/", label: "Live site" },
  },
  {
    name: "Weather Dashboard",
    type: "web",
    summary: "City weather forecasts from the OpenWeather One Call API.",
    img: raw("mingmanhk/Weather-Dashboard", "main/Assets/06-server-side-apis-homework-demo.png"),
    repo: "https://github.com/mingmanhk/Weather-Dashboard",
    live: { href: "https://mingmanhk.github.io/Weather-Dashboard/", label: "Live site" },
  },
  {
    name: "Work Day Scheduler",
    type: "web",
    summary: "An hourly planner that saves events in the browser.",
    img: raw("mingmanhk/Work-Day-Scheduler", "main/assets/05-third-party-apis-homework-demo.gif"),
    repo: "https://github.com/mingmanhk/Work-Day-Scheduler",
    live: { href: "https://mingmanhk.github.io/Work-Day-Scheduler/", label: "Live site" },
  },
  {
    name: "Password Generator",
    type: "web",
    summary: "Generates random passwords from chosen length and character rules.",
    img: raw("mingmanhk/Password-Generator", "main/src/Password%20Generator.jpg"),
    repo: "https://github.com/mingmanhk/Password-Generator",
    live: { href: "https://mingmanhk.github.io/Password-Generator/", label: "Live site" },
  },
  {
    name: "Employee Tracker",
    type: "backend",
    summary: "A command-line app for managing an employee database in MySQL.",
    img: raw("mingmanhk/employee-tracker", "main/src/demo.jpg"),
    repo: "https://github.com/mingmanhk/employee-tracker",
  },
  {
    name: "E-commerce Back End",
    type: "backend",
    summary: "An Express API using Sequelize to manage products, categories, and tags in MySQL.",
    img: raw("mingmanhk/e-commerce-back-end", "main/src/Categories-Demo.gif"),
    repo: "https://github.com/mingmanhk/e-commerce-back-end",
  },
];

export const education = [
  { name: "M.S., Computer Information Technology Systems", school: "University of Houston", years: "2011–2013" },
  { name: "B.S., Computer Science, minor in Management", school: "Dallas Baptist University", years: "2002–2005" },
  { name: "Full-Stack Coding Boot Camp", school: "University of Washington", years: "2023" },
];

export const ventures = [
  { name: "W1IT Solutions", href: "https://w1it.com", note: "IT consulting and managed services" },
  { name: "Taskin", href: "https://taskin.app", note: "Free online toolkit for everyday tasks" },
];
