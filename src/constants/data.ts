import CV from "../assets/cv_tuainhu.pdf";

export const profile = {
  name: "Tu Ai Nhu",
  title: "Senior Frontend / Fullstack Developer",
  summary:
    "I'm a frontend-focused fullstack developer with 8+ years of experience building web applications with React, Angular and TypeScript, plus back-end services in Node.js. I currently lead the Vietnam team on TecAlliance's TecDoc Catalogue while building the MevX trading platform. Most of my best work has been performance on large datasets, code review and testing, and working directly with clients from the Netherlands, Singapore and the US.",
  lookingFor: "Senior frontend and fullstack roles",
  languages: "English (professional working), Vietnamese (native)",
  cv: CV,
  location: "Ho Chi Minh City, Vietnam",
  email: "tuainhu160296@gmail.com",
  phone: "0906 772 584",
  linkedin: "https://www.linkedin.com/in/nhutu/",
  github: "https://github.com/ainhu162",
  leetcode: "https://leetcode.com/nhutu/",
};

/** Page sections in order: anchor id → running number and title. */
export const sections = {
  about: { index: "01", title: "About" },
  experience: { index: "02", title: "Experience" },
  projects: { index: "03", title: "Projects" },
  skills: { index: "04", title: "Skills" },
  awards: { index: "05", title: "Education" },
  contact: { index: "06", title: "Contact" },
} as const;

export type SectionId = keyof typeof sections;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Node.js", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & libraries",
    items: ["React", "React Native", "Angular 2+", "Express.js", "RxJS", "NgRx"],
  },
  {
    title: "State & styling",
    items: [
      "Redux",
      "Redux Toolkit",
      "Styled Components",
      "Tailwind CSS",
      "Sass / SCSS",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    title: "Testing & tooling",
    items: [
      "Jest",
      "Jasmine",
      "Selenium",
      "React Testing Library",
      "Git",
      "Webpack",
      "Telegram Bot API",
      "Chrome Extension API",
    ],
  },
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
  /** Client and team size, shown next to the project name. */
  meta?: string;
  projectDesc: string;
  website?: string;
  tech: string[];
  /** Results first, then responsibilities. Kept in sync with the PDF CV. */
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "MevX",
    role: "Fullstack Developer (Node.js)",
    period: "May 2024 — Present",
    project: "MevX Platform",
    projectDesc:
      "Trading platform with a web app, Node.js services, a Telegram bot and a Chrome extension.",
    website: "https://mevx.io/",
    tech: ["React", "TypeScript", "Node.js", "Telegram Bot API", "Chrome Extension API"],
    highlights: [
      "Improved page-load speed of the trading interface by 50–60%.",
      "Made buy/sell transaction requests 50% faster by adding caching and asynchronous processing.",
      "Built the Node.js services behind the platform's Telegram bot (t.me/MevxTradingBot) and RESTful APIs.",
      "Developed the platform's Chrome extension.",
    ],
  },
  {
    company: "TecAlliance",
    role: "Team Lead — Vietnam (Angular)",
    period: "May 2024 — Present",
    project: "TecDoc Catalogue",
    meta: "Client: Germany",
    projectDesc:
      "Automotive spare-parts catalogue for workshops, distributors and manufacturers — 9.8M+ articles, 1,000+ brands, 190,000+ vehicle types, 40+ languages.",
    website:
      "https://shop.tecalliance.net/root/products/tecdoc/tecdoc-catalogue/5637170079.c",
    tech: ["Angular", "TypeScript", "RxJS"],
    highlights: [
      "Lead the Vietnam team (3 developers, 1 QA) that owns the system's entire front end, from the user-facing web application to the catalogue-management tools.",
      "Review the team's code against the project's conventions to keep quality consistent.",
      "Implement new features across the web application and management tools in Angular.",
    ],
  },
  {
    company: "Idea Logic",
    role: "Senior Frontend Developer",
    period: "Apr 2021 — May 2024",
    project: "PublishOne",
    meta: "Client: Netherlands · Team of 11",
    projectDesc:
      "Editorial platform for publishers and knowledge institutions to create, manage and distribute documents.",
    tech: ["Angular 17", "TypeScript", "RxJS", "NgRx", "Jasmine", "Selenium"],
    highlights: [
      "Made bulk actions (e.g. select all) in folders of ~10,000 files respond near-instantly instead of lagging, by handling heavy operations asynchronously.",
      "Wrote a custom drag-and-drop on top of the library's virtual scroll, which could not support both (lag, items dropped in the wrong position); list reordering became smooth and the client was very pleased.",
      "Worked directly with the client to gather requirements, and proposed UX/UI improvements to designers.",
      "Wrote unit tests (Jasmine) and automation tests (Selenium).",
    ],
  },
  {
    company: "S3 Corp",
    role: "Frontend Developer",
    period: "Jun 2020 — Apr 2021",
    project: "Cosmos",
    meta: "Client: Singapore · Team of 8",
    projectDesc: "Admin site to manage charge points for electric-vehicle charging.",
    tech: ["React", "Redux", "Formik", "Tailwind CSS", "React Testing Library"],
    highlights: [
      "Built the charge-point admin UI from Figma designs and ran daily stand-ups with the client.",
    ],
  },
  {
    company: "KMS Technology",
    role: "Software Engineer",
    period: "Jan 2019 — May 2020",
    project: "Resicap · ERT PM Tool",
    meta: "Resicap: US client, team of 30",
    projectDesc:
      "Resicap is an admin site for managing clients' rental properties; ERT PM Tool is an internal employee-management tool on a front-end micro-service architecture.",
    tech: ["React", "Redux", "Angular 6", "TypeScript", "Ant Design"],
    highlights: [
      "Resicap: maintained the property-management system and improved its web performance.",
      "ERT PM Tool: developed features in React and Angular 6 within the front-end micro-service architecture.",
    ],
  },
  {
    company: "VNG Corporation",
    role: "Frontend Developer",
    period: "Aug 2017 — May 2018",
    project: "Game portals",
    projectDesc: "Game portals and internal tools for VNG's games.",
    tech: ["HTML5", "CSS3", "jQuery", "PHP", "MySQL"],
    highlights: [
      "Converted PSD designs into news and campaign pages (voting, sharing, social login) for VNG's games.",
      "Maintained banner and article management tools (PHP / MySQL).",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  features: string[];
  platform: string;
  tech: string[];
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
