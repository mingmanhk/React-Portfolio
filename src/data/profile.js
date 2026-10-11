import pixelColorPickImg from "../assets/pixel-color-pick.webp";
import taskinImg from "../assets/taskin.webp";

export const person = {
  name: "Victor Lam",
  role: "Acting Chief Information Officer",
  org: "City of Lakewood, Washington",
  lede:
    "I lead technology for a city government: the networks, identity, and service desk that police, parks, and City Hall depend on every day. Before Lakewood, I spent 18 years running IT for global companies in the Seattle area.",
  email: "mingmanhk@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1fLUh_lNjaOft6ANH4B1FDgAt1DZQAQsS/view?usp=sharing",
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
    nodes: ["cloud", "hall", "police", "parks", "chambers", "remote"],
    links: ["cloud"],
  },
  {
    id: "network",
    name: "One Network",
    summary:
      "Every site and remote worker on one managed, monitored network.",
    nodes: ["hall", "police", "parks", "chambers", "remote"],
    links: ["hall", "police", "parks", "chambers", "remote"],
  },
  {
    id: "standard",
    name: "One Standard",
    summary:
      "Shared standards for hardware, support, and licensing so every investment is measurable.",
    nodes: ["hall", "police", "parks", "chambers"],
    links: [],
  },
];

export const sites = [
  { id: "hall", label: "City Hall", x: 96, y: 86 },
  { id: "police", label: "Police", x: 424, y: 86 },
  { id: "parks", label: "Parks", x: 74, y: 300 },
  { id: "chambers", label: "Council Chambers", x: 432, y: 300 },
  { id: "remote", label: "Remote staff", x: 260, y: 392 },
  { id: "cloud", label: "Cloud identity", x: 260, y: 30 },
];

export const highlights = [
  { value: "99%", text: "SLA compliance across a 1,000-user Americas service desk", org: "Alibaba" },
  { value: "70%", text: "fewer help desk tickets after building global self-service knowledge", org: "Alibaba" },
  { value: "5+", text: "mergers and acquisitions integrated with no loss of service", org: "Beyondsoft" },
  { value: "100%", text: "uptime through a full colocation data center build and migration", org: "HTC America" },
];

export const experience = [
  {
    org: "City of Lakewood, Washington",
    title: "Acting Chief Information Officer / IT Manager",
    start: "Mar 2026",
    end: "Present",
    location: "Lakewood, WA",
    duties: [
      "Lead citywide IT strategy, infrastructure modernization, and cybersecurity across City Hall, Police, Parks, and public-facing services.",
      "Manage on-premises and cloud infrastructure for high performance, reliability, and secure connectivity across all departments.",
      "Drive strategic planning, unified technology standards, and project delivery that align every investment to cost efficiency, operational fit, and regulatory compliance.",
      "Oversee the City’s cybersecurity and compliance program, including access management, monitoring, and data protection.",
      "Lead the City’s identity and access modernization, guided by Zero Trust principles.",
      "Reduce virtualization and licensing costs through platform consolidation while improving disaster-recovery resilience for critical systems.",
      "Implement data-driven governance for assets, service desk operations, and licensing to support transparent, defensible budget decisions.",
    ],
  },
  {
    org: "FRS Clipper",
    title: "IT Consultant",
    start: "Nov 2025",
    end: "Feb 2026",
    location: "Seattle, WA",
    duties: [
      "Provided strategic IT consulting for a Seattle-based passenger ferry and travel operator, advising leadership on operations, infrastructure, and security.",
      "Led the integration of U.S. operations with the parent company in Flensburg, Germany, ensuring seamless connectivity and alignment with global standards.",
      "Collaborated closely with international IT teams and a German developer to keep cross-border projects on schedule and meeting quality expectations.",
      "Evaluated existing software, vendor services, and support workflows, developing migration and systems-planning strategies grounded in ITIL principles.",
      "Delivered prioritized, actionable recommendations to strengthen reliability, security, and operational efficiency.",
      "Provided hands-on technical support and training to Seattle-based IT staff, improving local capabilities and day-to-day service stability.",
    ],
  },
  {
    org: "PinkkaMii LLC",
    title: "Founder and IT Consultant",
    start: "May 2025",
    end: "Present",
    location: "Seattle, WA",
    duties: [
      "Founded an independent practice delivering IT consulting and building software products.",
      "Built and launched W1IT.com, an IT consulting and managed services brand focused on network architecture, design, and security assessments.",
      "Launched Taskin.app, a free browser-based toolkit of everyday utilities, from QR codes and image tools to file conversion and AI-assisted stock analysis.",
      "Shipped native Apple apps in Swift and SwiftUI, including Pixel Color Pick on the Mac App Store and the DeepTicker AI portfolio tracker for iOS.",
      "Advise small businesses on cloud infrastructure, security, and IT operations.",
    ],
  },
  {
    org: "Alibaba Group (U.S.) Inc.",
    title: "IT Manager",
    start: "May 2018",
    end: "Apr 2025",
    location: "Bellevue, WA",
    duties: [
      "Directed Americas service desk operations for 1,000+ users across Windows, macOS, virtual desktops, and mobile, reaching 99% SLA compliance.",
      "Revamped global ticketing in line with ITIL, refining SLA and KPI frameworks for better reporting and user experience.",
      "Built global SOPs and a knowledge library that cut help desk volume by 70%.",
      "Automated inventory tracking with RFID and BLE, reducing reconciliation time by 95% and improving CMDB accuracy.",
      "Partnered with Finance on predictive procurement models, reaching 95% forecast accuracy and halving hardware and software spend.",
      "Ran global asset lifecycle programs to cybersecurity and governance standards with 100% audit accuracy and zero asset loss.",
      "Built executive dashboards in SQL, Python, Tableau, and Power BI for KPIs, SLA adherence, and total cost of ownership.",
      "Reduced operating costs by 30% through vendor performance management, SLA enforcement, and negotiation.",
      "Introduced automation and AI chatbot tools for self-healing workflows and faster responses.",
      "Mentored Tier 1–3 service desk teams across regions.",
    ],
  },
  {
    org: "Beyondsoft Consulting Inc.",
    title: "Senior IT Manager",
    start: "Jun 2016",
    end: "May 2018",
    location: "Bellevue, WA",
    duties: [
      "Built IT policy and support frameworks from scratch as the company grew from 30 to 500+ users across multiple states.",
      "Led IT due diligence and onboarding for 5+ mergers and acquisitions with full asset continuity.",
      "Drove a cloud-first strategy on VMware, Azure, and AWS to improve scalability and reduce infrastructure overhead.",
      "Established ISO, SOX, SOC, and HIPAA compliance controls and disaster recovery frameworks.",
    ],
  },
  {
    org: "HTC America Inc.",
    title: "IT Manager, promoted from Software Developer",
    start: "Apr 2007",
    end: "Jun 2016",
    location: "Bellevue, WA",
    duties: [
      "Led North American service desk, network, and systems administration teams.",
      "Built and migrated a U.S. colocation data center with 100% uptime and no business disruption.",
      "Moved on-premises systems to virtualized VMware and Azure environments.",
      "Wrote disaster recovery and business continuity plans that supported ISO certification.",
      "Developed APIs and tuned SQL performance for cross-platform data integration, working with global SAP teams.",
    ],
  },
  {
    org: "Directron.com",
    title: "Full-Stack Developer",
    start: "Mar 2005",
    end: "Apr 2007",
    location: "Houston, TX",
    duties: [
      "Built internal web applications that streamlined warehouse operations and e-commerce workflows.",
      "Engineered and maintained PHP back-end services and MySQL databases for order and inventory systems.",
    ],
  },
];

export const capabilities = [
  {
    name: "Leadership",
    items: ["IT strategy and roadmaps", "Budget and procurement", "Vendor management", "Policy and governance", "Distributed teams"],
  },
  {
    name: "Security and infrastructure",
    items: ["Zero Trust identity", "Network and remote-access security", "Microsoft 365 and Entra ID", "Virtualization and disaster recovery", "AWS and Azure"],
  },
  {
    name: "Service and delivery",
    items: ["ITIL service design", "ServiceNow, Jira, Freshworks", "Asset lifecycle", "Dashboards and analytics", "React, Node.js, SQL"],
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
    name: "Pixel Color Pick",
    type: "product",
    summary: "An open-source macOS color picker with a screen-wide eyedropper, one-click HEX, RGB, and HSL copy, and color history. Built with Swift and SwiftUI.",
    img: pixelColorPickImg,
    repo: "https://github.com/mingmanhk/PixelColorPick",
    live: { href: "https://apps.apple.com/us/app/pixel-color-pick/id6754412788?mt=12", label: "App Store" },
  },
  {
    name: "Taskin",
    type: "product",
    summary: "A free online toolkit of no-signup utilities: QR codes, background removal, image compression, passport photos, file conversion, and AI stock analysis.",
    img: taskinImg,
    repo: "https://github.com/mingmanhk/taskin",
    live: { href: "https://taskin.app/", label: "taskin.app" },
  },
  {
    name: "DeepTicker",
    type: "product",
    summary: "A privacy-focused iOS portfolio tracker with AI market insights from your choice of model provider. Built with Swift and SwiftUI; data stays on the device.",
    img: raw("mingmanhk/DeepTicker", "master/Screenshots/Screenshot%20-%20My%20Investment.png"),
    repo: "https://github.com/mingmanhk/DeepTicker",
  },
  {
    name: "Habitron",
    type: "web",
    summary: "A habit tracker with charts and authentication, built with Express, Sequelize, and Handlebars.",
    img: raw("xaker00/habitron", "master/image/Home.jpg"),
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
