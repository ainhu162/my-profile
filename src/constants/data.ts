import iconReact from "../assets/icon-react.svg";
import iconAngular from "../assets/icon-angular.svg";
import iconJs from "../assets/icon-js.svg";
import iconCss from "../assets/icon-css.svg";
import iconTs from "../assets/icon-ts.svg";
import iconSass from "../assets/icon-sass.svg";
import iconTw from "../assets/icon-tailwindcss.svg";
import iconMUI from "../assets/icon-mui.svg";
import iconSc from "../assets/icon-sc.svg";
import iconRedux from "../assets/icon-redux.svg";
import iconNode from "../assets/icon-nodejs.svg";
import iconRxjs from "../assets/icon-rxjs.svg";
import iconNgrx from "../assets/icon-ngrx.svg";
import CV from "../assets/cv_tuainhu.pdf";

export const profile = {
  greeting: "Hello, I'm",
  name: "Tu Ai Nhu",
  shortName: "Nhu",
  title: "Senior Frontend / Fullstack Developer",
  // Rotating phrases for the hero typewriter
  taglines: [
    "I craft delightful, fast web interfaces.",
    "I ship full-stack features with React & Node.js.",
    "I turn designs into pixel-perfect UI.",
    "I automate with Telegram bots & Chrome extensions.",
  ],
  summary:
    "Accomplished developer with 8+ years of experience and deep proficiency in HTML, CSS and modern JavaScript (ES6+) — plus back-end development with Node.js. I adapt quickly to new environments, support my teammates and absorb new tech eagerly, and I thrive on challenging projects where strong problem-solving leads to optimal, high-performance results.",
  goals: [
    "Pursue a career that fosters continuous learning and growth.",
    "Contribute my skills to a dynamic organization and drive its success.",
  ],
  cv: CV,
  location: "Ho Chi Minh, Vietnam",
  email: "tuainhu160296@gmail.com",
  phone: "0906 772 584",
  linkedin: "https://www.linkedin.com/in/nhutu/",
  github: "https://github.com/ainhu162",
  leetcode: "https://leetcode.com/nhutu/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 6, suffix: "", label: "Companies worked" },
  { value: 7, suffix: "+", label: "Projects delivered" },
  { value: 680, suffix: "", label: "TOEIC score" },
];

export type SkillItem = { name: string; icon?: string };
export type SkillGroup = { title: string; accent: string; items: SkillItem[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    accent: "from-amber-400 to-yellow-500",
    items: [
      { name: "JavaScript / ES6+", icon: iconJs },
      { name: "TypeScript", icon: iconTs },
      { name: "Node.js", icon: iconNode },
      { name: "HTML5" },
      { name: "CSS3", icon: iconCss },
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-cyan-400 to-sky-500",
    items: [
      { name: "React / React Native", icon: iconReact },
      { name: "Angular 2+", icon: iconAngular },
      { name: "Express.js" },
      { name: "RxJS", icon: iconRxjs },
      { name: "NgRx", icon: iconNgrx },
    ],
  },
  {
    title: "State & Styling",
    accent: "from-fuchsia-400 to-violet-500",
    items: [
      { name: "Redux", icon: iconRedux },
      { name: "Redux Toolkit", icon: iconRedux },
      { name: "Styled Components", icon: iconSc },
      { name: "Tailwind CSS", icon: iconTw },
      { name: "Sass / SCSS", icon: iconSass },
      { name: "Material UI", icon: iconMUI },
      { name: "Ant Design" },
    ],
  },
  {
    title: "Testing & Tooling",
    accent: "from-violet-400 to-purple-500",
    items: [
      { name: "Jest" },
      { name: "Jasmine" },
      { name: "Selenium" },
      { name: "React Testing Library" },
      { name: "Git" },
      { name: "Webpack" },
      { name: "Telegram Bot API" },
      { name: "Chrome Extension API" },
    ],
  },
];

// Flat list used for the marquee tech strip (icon-bearing tech only)
export const techStrip: SkillItem[] = [
  { name: "JavaScript", icon: iconJs },
  { name: "TypeScript", icon: iconTs },
  { name: "Node.js", icon: iconNode },
  { name: "React", icon: iconReact },
  { name: "Angular", icon: iconAngular },
  { name: "Redux", icon: iconRedux },
  { name: "RxJS", icon: iconRxjs },
  { name: "NgRx", icon: iconNgrx },
  { name: "Tailwind CSS", icon: iconTw },
  { name: "Sass", icon: iconSass },
  { name: "Styled Components", icon: iconSc },
  { name: "Material UI", icon: iconMUI },
  { name: "CSS3", icon: iconCss },
];

export const otherSkills = [
  "Cross-browser compatibility",
  "Performance optimization",
  "Problem-solving",
  "Teamwork",
  "Code review & mentoring",
  "Agile / Scrum (Jira, Azure)",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  project: string;
  projectDesc: string;
  meta?: string;
  website?: string;
  tech: string[];
  highlights: string[];
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "MevX",
    role: "Fullstack Developer (Node.js)",
    period: "May 2024 — Present",
    project: "MevX Platform",
    projectDesc:
      "I build and optimize the product UI together with Node.js services, a Telegram bot and a Chrome extension for the platform.",
    website: "https://mevx.io/",
    tech: [
      "ReactJS",
      "TypeScript",
      "Node.js",
      "REST",
      "Telegram Bot API",
      "Chrome Extension API",
    ],
    highlights: [
      "Build and optimize the application UI with a focus on performance.",
      "Build the Node.js services behind the platform's Telegram bot (t.me/MevxTradingBot) and RESTful APIs.",
      "Develop a Chrome extension for the project.",
    ],
    achievements: [
      "Improved page-load speed of the trading interface by 50–60%.",
      "Made buy/sell transaction requests 50% faster by adding caching and asynchronous processing.",
    ],
  },
  {
    company: "TecAlliance",
    role: "Team Lead — Vietnam (Angular)",
    period: "May 2024 — Present",
    project: "TecDoc Catalogue",
    projectDesc:
      "TecAlliance's automotive spare-parts catalogue, used by workshops, distributors and manufacturers to find the right part — 9.8M+ articles from 1,000+ brands across 190,000+ vehicle types in 40+ languages.",
    meta: "Client: Germany · Vietnam team of 3 devs + 1 QA",
    website:
      "https://shop.tecalliance.net/root/products/tecdoc/tecdoc-catalogue/5637170079.c",
    tech: ["Angular", "TypeScript", "RxJS"],
    highlights: [
      "Lead the Vietnam team (3 developers, 1 QA) that owns the system's entire front end, from the user-facing web application to the catalogue-management tools.",
      "Review the team's code against the project's conventions to keep quality consistent.",
      "Implement new features across the web application and management tools in Angular.",
    ],
    achievements: [],
  },
  {
    company: "Idea Logic",
    role: "Senior Frontend Developer",
    period: "Apr 2021 — May 2024",
    project: "PublishOne",
    projectDesc:
      "An editorial solution that lets publishers and knowledge institutions create, manage and distribute documents.",
    meta: "Client: Dutch · Team of 11",
    tech: [
      "TypeScript",
      "Angular 17",
      "RxJS",
      "NgRx",
      "SCSS",
      "Material UI",
      "Jasmine",
      "Selenium",
      "OIDC",
      "REST",
    ],
    highlights: [
      "Maintain & enhance the source code and add CSS animations for a lively UI.",
      "Work directly with clients to gather requirements and propose UX/UI.",
      "Review team code and build the UI from Zeplin designs.",
      "Proactively improve performance on very large datasets.",
      "Write unit & automation tests.",
    ],
    achievements: [
      "Made bulk actions (e.g. select all) in folders of ~10,000 files respond near-instantly instead of lagging, by handling heavy operations asynchronously.",
      "Wrote a custom drag-and-drop on top of the library's virtual scroll, which could not support both (lag, items dropped in the wrong position); list reordering became smooth and the client was very pleased.",
      "Deepened expertise in unit & automation testing.",
    ],
  },
  {
    company: "S3 Corp",
    role: "Frontend Developer",
    period: "Jun 2020 — Apr 2021",
    project: "Cosmos",
    projectDesc:
      "An admin site to manage charge points that service electric-vehicle charging.",
    meta: "Client: Singapore · Team of 8",
    tech: [
      "JavaScript",
      "React Hooks",
      "Context",
      "Redux",
      "Formik",
      "SCSS",
      "CSS Modules",
      "Tailwind CSS",
      "Auth0",
      "React Testing Library",
      "REST",
    ],
    highlights: [
      "Implemented the website UI with unit testing.",
      "Reviewed code, supported members and ran daily standups with clients.",
      "Gathered requirements with the SP team and built UI from Figma designs.",
      "Proposed UX/UI improvements for the designer.",
    ],
    achievements: [],
  },
  {
    company: "KMS Technology",
    role: "Software Engineer",
    period: "Jan 2019 — May 2020",
    project: "Resicap · ERT PM Tool",
    projectDesc:
      "Resicap — an admin site for managing clients' rental properties; and ERT PM Tool — an internal employee-management tool built on a front-end micro-service architecture.",
    meta: "Client: US · Team of 30",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular 6",
      "Redux",
      "Redux Thunk",
      "HOC",
      "FE Micro-service",
      "Ant Design",
      "REST",
    ],
    highlights: [
      "Gathered requirements, maintained the property-management system and improved web performance.",
      "Built UI from mockups and reviewed team code.",
      "Developed with ReactJS and Angular 6 over a front-end micro-service architecture.",
    ],
    achievements: [],
  },
  {
    company: "VNG Corp",
    role: "Frontend Developer",
    period: "Aug 2017 — May 2018",
    project: "Game Portals & Tools",
    projectDesc:
      "News pages, interactive campaigns and internal tools for VNG's games.",
    tech: ["HTML5", "CSS3", "jQuery", "Bootstrap", "PHP", "MySQL"],
    highlights: [
      "Converted PSD designs to HTML5, CSS3 and jQuery and built news pages for VNG's games.",
      "Maintained and developed banner & article management tools.",
      "Created interactive pages for voting, sharing and social login.",
    ],
    achievements: ["Gained SEO knowledge and basic PHP / MySQL backend skills."],
  },
];

export type Project = {
  name: string;
  blurb: string;
  features: string[];
  platform: string;
  tech: string[];
  accent: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: "PDF Document Scanner",
    blurb:
      "A native document scanner that creates searchable PDFs with on-device OCR — no account, no server, files stay on the phone. Source code sold on Codester.",
    features: [
      "Multi-page scanning with automatic edge detection",
      "Searchable PDFs with an invisible OCR text layer",
      "ID-card mode, ZIP backup and six languages",
    ],
    platform: "Android / iOS",
    tech: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "SwiftUI",
      "ML Kit",
      "VisionKit",
      "AdMob",
      "Codemagic",
    ],
    accent: "from-emerald-500 to-teal-500",
    link: {
      label: "View on Codester",
      href: "https://www.codester.com/items/73249/pdf-document-scanner-for-android-and-ios",
    },
  },
  {
    name: "Safe QR & Barcode Scanner",
    blurb:
      "A QR and barcode scanner that warns about scam links and checks payment QR codes. Source code sold on Codester.",
    features: [
      "Scam-link analysis and EMVCo / VietQR payment-code validation",
      "Product lookup via Open Food Facts and one-tap Wi-Fi connect",
      "QR generator, history with CSV export, six languages",
    ],
    platform: "Android / iOS",
    tech: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "SwiftUI",
      "CameraX",
      "ML Kit",
      "Room",
      "SwiftData",
      "ZXing",
    ],
    accent: "from-amber-500 to-orange-500",
    link: {
      label: "View on Codester",
      href: "https://www.codester.com/items/72813/safe-qr-and-barcode-scanner-android-and-ios",
    },
  },
  {
    name: "Plan Saving Money",
    blurb:
      "A budgeting app that helps users save toward goals and understand where their money goes.",
    features: [
      "Save money against user-created plans",
      "Track progress toward financial goals",
      "Visualize spending statistics over time",
    ],
    platform: "Web / Mobile",
    tech: [
      "React",
      "React Native",
      "Redux Saga",
      "Styled Components",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Learn English With AI",
    blurb:
      "An AI-powered companion to learn English — chat, save vocabulary and revise with flashcards.",
    features: [
      "Chat with an AI tutor",
      "Save vocabulary & translate new words",
      "Revise with flashcards",
    ],
    platform: "Web",
    tech: [
      "React",
      "Redux Toolkit",
      "Vite",
      "CSS Modules",
      "OpenAI API",
      "Translate API",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
    accent: "from-cyan-500 to-sky-500",
  },
];

export const education = [
  {
    school: "Sai Gon University",
    major: "B.S. Information Technology",
    detail: "GPA 3.34 / 4.0",
    period: "Oct 2014 — May 2019",
  },
];

export const awards = [
  { year: "2019", title: "Bachelor's degree in Engineering — Good" },
  { year: "2019", title: "TOEIC certificate — 680" },
  { year: "2018", title: "Talent Scholarship — KMS Technology" },
  { year: "2015–2017", title: "Academic Incentive Scholarship — SGU" },
];
