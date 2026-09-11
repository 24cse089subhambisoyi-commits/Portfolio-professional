import { UserProfile, Project, SkillCategory, EducationItem, ExperienceItem, CertificationItem } from '../types';

export const userProfileData: UserProfile = {
  name: "Subham Bisoyi",
  title: "Software Engineering Intern Candidate",
  subtitle: "3rd Year B.Tech CSE @ GIET University | Python • Java • Web Dev • Data Analytics",
  university: "GIET University, Gunupur, Odisha",
  yearOfStudy: "3rd Year B.Tech CSE (2024–2028)",
  location: "Gunupur, Odisha, India",
  email: "24cse089.subhambisoyi@giet.edu",
  githubUrl: "https://github.com/24cse089subhambisoyi-commits",
  linkedinUrl: "https://www.linkedin.com/in/subham-bisoyi-292b44378",
  resumeUrl: "#resume-modal", // Triggers resume preview modal or PDF download
  bio: [
    "3rd Year Computer Science & Engineering undergraduate at GIET University focusing on core computer science foundations, data structures, object-oriented backend programming, and web development.",
    "Experienced in implementing algorithms in Python, building web applications, and analyzing data pipelines.",
    "Actively seeking Software Engineering / SWE Intern opportunities for 2027-2028 where I can apply my problem-solving skills to scalable backend systems and AI-integrated applications."
  ]
};

export const projectsData: Project[] = [
  {
    id: "task-management-tracker",
    title: "Task Management Tracker",
    subtitle: "Interactive Productivity & AI-Assisted Task Manager",
    category: "Full Stack",
    description: "Custom-built task tracking web app featuring automated task scheduling, AI bot assistant integration, and smooth interactive animations.",
    longDescription: "Developed to organize daily developer workflows. Incorporates interactive task categorization, priority filtering, state persistence, animated transitions, and AI bot guidance for task breakdowns.",
    tags: ["HTML5", "CSS3", "JavaScript", "AI Integration", "Animations", "Tailwind CSS"],
    metrics: [
      { label: "AI Feature", value: "Smart Bot & Prompt Breakdown" },
      { label: "UI Experience", value: "Interactive Motion Animations" },
      { label: "Architecture", value: "Modular Frontend State Flow" }
    ],
    architectureSummary: "Client-side interactive task dashboard featuring AI assistant integrations and responsive CSS keyframe animations.",
    isKnownProject: true,
    githubUrl: "https://github.com/24cse089subhambisoyi-commits/Task-Managemnt-Tracker",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "portfolio-professional",
    title: "Professional AI Developer Portfolio",
    subtitle: "Modern React & TypeScript Developer Showcase",
    category: "Full Stack",
    description: "State-of-the-art interactive developer portfolio web application with dynamic theme tokens, recruiter quick snapshot modals, and project filtering.",
    longDescription: "Architected using Vite, React 18, TypeScript, and modern CSS design systems. Features recruiter quick pitch, live terminal preview, interactive project catalog, and contact form handling.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
    metrics: [
      { label: "Performance", value: "Sub-second Vite Bundle Build" },
      { label: "UI System", value: "Custom Dark Mode Tokens" }
    ],
    architectureSummary: "Vite + React single-page application built with modular component hierarchy and strict TypeScript data contracts.",
    githubUrl: "https://github.com/24cse089subhambisoyi-commits/Portfolio-professional",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "weather-detector-website",
    title: "Weather Detector Website",
    subtitle: "Real-Time Weather Forecasting & Atmospheric Query Portal",
    category: "Backend / APIs",
    description: "Interactive weather detection portal providing live meteorological data, location search, and weather metric visualization.",
    longDescription: "Built using modular JavaScript and responsive CSS styling. Queries weather API endpoints to fetch live temperature, humidity, wind speeds, and dynamic weather condition themes.",
    tags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "OpenWeather"],
    metrics: [
      { label: "API Integration", value: "Real-Time Weather Data" },
      { label: "UI Response", value: "Dynamic Atmospheric Styling" }
    ],
    architectureSummary: "Asynchronous JavaScript client querying REST API endpoints with responsive UI rendering.",
    githubUrl: "https://github.com/24cse089subhambisoyi-commits/Weather-Detector-website",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dmdw-analytics-suite",
    title: "Data Mining & Data Warehousing Suite",
    subtitle: "Experimental Data Preprocessing & Pattern Mining in Python",
    category: "Data Analytics",
    description: "Collection of data mining models, data warehousing pipeline algorithms, and Jupyter notebook analytical experiments.",
    longDescription: "Includes implementations of data cleaning, normalization, Apriori association rule mining, decision tree classification, and cluster analysis using Python Pandas, NumPy, and Scikit-Learn.",
    tags: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Data Mining"],
    metrics: [
      { label: "Modules", value: "Mining Algorithms & Preprocessing" },
      { label: "Focus", value: "Pattern Mining & Classification" }
    ],
    architectureSummary: "Python Jupyter analytics workflows exploring data warehousing structures and predictive algorithms.",
    githubUrl: "https://github.com/24cse089subhambisoyi-commits/DMDW-assignment3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

export const skillsCategoriesData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", isPrimary: true, note: "Core focus & DSA" },
      { name: "Java", isPrimary: true, note: "OOP & Backend" },
      { name: "C / C++ Basics", isPrimary: false, note: "Academic foundation" },
      { name: "JavaScript / TypeScript", isPrimary: true, note: "Web applications" }
    ]
  },
  {
    name: "Web & Backend",
    icon: "Server",
    skills: [
      { name: "Spring Boot", isPrimary: true, note: "Java backend framework" },
      { name: "RESTful APIs", isPrimary: true, note: "Controller architecture" },
      { name: "React / Vite", isPrimary: true, note: "Frontend UI" },
      { name: "HTML5 & CSS3", isPrimary: false, note: "Responsive layout" },
      { name: "SQL", isPrimary: true, note: "Database querying" }
    ]
  },
  {
    name: "AI & CS Core",
    icon: "Brain",
    skills: [
      { name: "Data Structures & Algorithms", isPrimary: true, note: "Python implementations" },
      { name: "AI Tools & APIs", isPrimary: true, note: "Generative AI integration" },
      { name: "Data Mining & Analytics (DMDW)", isPrimary: true, note: "Python analytics" },
      { name: "Object-Oriented Programming", isPrimary: true, note: "Java OOP paradigms" }
    ]
  },
  {
    name: "Developer Tools & Spoken Languages",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", isPrimary: true, note: "Version control" },
      { name: "VS Code", isPrimary: false, note: "Primary IDE" },
      { name: "English", isPrimary: false, note: "Limited Working Proficiency" },
      { name: "Odia", isPrimary: false, note: "Native / Professional" },
      { name: "Hindi", isPrimary: false, note: "Professional Proficiency" }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology - B.Tech, Computer Science & Engineering",
    institution: "GIET University",
    location: "Gunupur, Odisha, India",
    period: "2024 – 2028 (Currently 3rd Year)",
    status: "In Progress (3rd Year Undergrad)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming with Java",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Data Mining & Data Warehousing (DMDW)"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Android Developer Virtual Intern",
    organization: "Virtual Internship Program",
    location: "Remote / Online",
    period: "Completed",
    type: "Virtual Internship",
    description: "Hands-on virtual internship program focusing on mobile application development fundamentals, XML layouts, and application lifecycle.",
    highlights: [
      "Implemented mobile application UI screens adhering to standard component hierarchy.",
      "Utilized Android development practices for activity handling and layout responsiveness.",
      "Gained practical exposure to software engineering project workflows."
    ]
  },
  {
    role: "Student Software Developer (Academic & Open Source Projects)",
    organization: "GIET University",
    location: "Gunupur, Odisha",
    period: "2024 – Present",
    type: "Academic Project",
    description: "Building analytical software tools, web applications, and AI-assisted task trackers as part of CSE curriculum and GitHub projects.",
    highlights: [
      "Architected the Task Management Tracker web app featuring AI bot integrations.",
      "Developed Data Mining & Warehousing analysis models and Jupyter analytical workflows.",
      "Built Weather Detector web app and professional developer portfolio application."
    ]
  },
  {
    role: "Software Engineering Intern [Target Role]",
    organization: "Available for Summer / Semester Internship",
    location: "Remote / On-site",
    period: "2027 - 2028",
    type: "Upcoming / Target Role",
    description: "Seeking a 2-6 month SWE / Backend Engineering Intern position to contribute to production codebase, microservices, and software delivery.",
    highlights: [
      "Open to immediate interview opportunities.",
      "Ready to deploy production features under senior engineering mentorship."
    ],
    isPlaceholder: true
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Android Developer Virtual Internship",
    issuer: "Virtual Internship Program / EdSkills",
    status: "Certified",
    description: "Verified completion of virtual internship modules covering Android application components and developer practices."
  },
  {
    title: "AI Tools Workshop",
    issuer: "SimpliLearn / Google AI Workshop",
    status: "Completed",
    description: "Practical workshop on utilizing generative AI tools, prompt structures, and AI-assisted software development workflows."
  },
  {
    title: "Attendance Hashgraph Developer Certification",
    issuer: "Hashgraph Developer Network",
    status: "Accredited",
    description: "Practical accreditation on distributed ledger concepts, decentralized consensus fundamentals, and event log tracking."
  }
];
