// data.js
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/Kali.png";
import Tools3 from "/assets/tools/CSS3_.png";
import Tools4 from "/assets/tools/HTML5.png";
import Tools5 from "/assets/tools/Sql.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/Virtualbox.png";
import Tools8 from "/assets/tools/Android_Studio.png";
import Tools9 from "/assets/tools/autopsy.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/osint.png";

import Proyek1 from "/assets/proyek/fire.png";
import Proyek2 from "/assets/proyek/dashboard.jpg";
import Proyek3 from "/assets/proyek/cyber.jpg";
import Proyek4 from "/assets/proyek/pramusaku.png";

export const listSkills = [
  {
    id: 1,
    nama: "Web Development",
    deskripsi:
      "Building fullstack applications using the MERN stack and modern frameworks like Flask and Vite.",
  },
  {
    id: 2,
    nama: "Cybersecurity",
    deskripsi:
      "Protecting digital assets through penetration testing, forensics, and risk assessment following NIST standards.",
  },
  {
    id: 3,
    nama: "Enterprise Systems",
    deskripsi:
      "Customizing and implementing ERPNext systems to optimize business processes and automation.",
  },
  {
    id: 4,
    nama: "UI/UX Design",
    deskripsi:
      "Crafting user-centric designs and interactive prototypes that bridge the gap between aesthetics and functionality.",
  },
];

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    skills: ["Web Development", "Enterprise Systems"],
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Kali Linux",
    ket: "Penetration Testing OS",
    skills: ["Cybersecurity"],
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "CSS",
    ket: "Style Sheet Language",
    skills: ["Web Development", "UI/UX Design"],
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "HTML",
    ket: "Markup Language",
    skills: ["Web Development"],
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "SQL",
    ket: "Database Language",
    skills: ["Web Development", "Cybersecurity", "Enterprise Systems"],
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    skills: ["Web Development"],
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Oracle VirtualBox",
    ket: "Virtualization Software",
    skills: ["Cybersecurity"],
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Android Studio",
    ket: "Mobile App IDE",
    skills: ["Web Development"],
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Autopsy",
    ket: "Digital Forensics Tool",
    skills: ["Cybersecurity"],
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design Tool",
    skills: ["UI/UX Design"],
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    skills: ["UI/UX Design"],
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "OSINT",
    ket: "Open Source Intelligence",
    skills: ["Cybersecurity"],
  },
  {
    id: 13,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    nama: "Python",
    ket: "Programming Language",
    skills: ["Web Development", "Cybersecurity", "Enterprise Systems"],
  },
  {
    id: 14,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nama: "React.js",
    ket: "Frontend Library",
    skills: ["Web Development"],
  },
  {
    id: 15,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    nama: "Node.js",
    ket: "Runtime Environment",
    skills: ["Web Development", "Enterprise Systems"],
  },
  {
    id: 16,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    nama: "MongoDB",
    ket: "NoSQL Database",
    skills: ["Web Development", "Enterprise Systems"],
  },
  {
    id: 17,
    gambar: "/assets/tools/erpnext.svg",
    nama: "ERPNext",
    ket: "ERP System",
    skills: ["Enterprise Systems"],
  },
  {
    id: 18,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    nama: "Flask",
    ket: "Python Web Framework",
    skills: ["Web Development"],
  },
  {
    id: 19,
    gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    nama: "GitHub",
    ket: "Version Control",
    skills: ["Web Development", "Cybersecurity", "Enterprise Systems"],
  },
  {
    id: 20,
    gambar: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    nama: "Firebase",
    ket: "Cloud Platform",
    skills: ["Web Development"],
  },
  {
    id: 21,
    gambar: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    skills: ["Web Development", "UI/UX Design"],
  },
  {
    id: 22,
    gambar: "/assets/tools/antigravity.png",
    nama: "Antigravity",
    ket: "AI Code Editor",
    skills: ["Web Development", "Enterprise Systems"],
  },
];




export const listProyek = [
  {
    id: 1,
    gambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    nama: "ERPNext Implementation",
    desk: "Successfully implemented and maintained a large-scale ERP system using ERPNext. Managed system setup, database backups, restoration processes, and critical troubleshooting for enterprise stability.",
    tools: ["ERPNext", "Python", "Linux", "MariaDB"],
    link: "https://github.com/AqbilBarakaa/ERPNextTaharica/tree/ihsan",
  },
  {
    id: 2,
    gambar: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop",
    nama: "Disnaker Platform",
    desk: "Developed a digital government platform for Bekasi Regency using the MERN stack. Digitized manpower services with a focus on structured data management and smooth UI navigation.",
    tools: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    link: "https://github.com/Rhckjf/Disnaker",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Cybersecurity Risk Assessment",
    desk: "Built a web-based risk assessment tool following NIST SP 800-30 Rev.1 guidelines. Features dynamic risk logic calculation based on assets, threats, and vulnerabilities.",
    tools: ["Python", "Flask", "MySQL", "Cybersecurity"],
    link: "https://github.com/Rhckjf/-Cybersecurity-Risk-Assessment",
  },
  {
    id: 4,
    gambar: Proyek2,
    nama: "Water Management System",
    desk: "Developed a real-time water usage tracking system featuring input forms, automatic calculations, and Firebase cloud persistence for data integrity.",
    tools: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://github.com/Rhckjf/Water-Management-System",
  },
  {
    id: 5,
    gambar: Proyek4,
    nama: "Digital Scout Handbook",
    desk: "An educational Android application (Pramusaku) designed to digitize Scouting materials, featuring structured content management and Firebase integration.",
    tools: ["React.js", "Firebase", "Mobile-First", "Vite"],
    link: "https://github.com/MannLTC19/PramusakuProject",
  },
  {
    id: 6,
    gambar: Proyek1,
    nama: "HR & GA Agreement System",
    desk: "A comprehensive management system for HR and General Affair agreements, streamlining documentation and approval workflows.",
    tools: ["JavaScript", "HTML", "CSS", "Database"],
    link: "https://github.com/Rhckjf/HR-GA-Agreement-System-Website",
  }
];

export const listExperience = [
  {
    id: 1,
    role: "ERP Developer Intern",
    company: "Taharica Group",
    period: "Jan 2026 — April 2026",
    desc: "Spearheaded ERPNext implementation and maintenance. Managed system configuration, automated backup routines, and server stability to support mission-critical company operations.",
  },
  {
    id: 2,
    role: "Developer Intern",
    company: "Diskominfosantik Kabupaten Bekasi",
    period: "Sep 2025 — Dec 2025",
    desc: "Contributed to the development of government internal applications. Focused on full-stack feature implementation using modern web technologies and optimizing API performance.",
  },
];

