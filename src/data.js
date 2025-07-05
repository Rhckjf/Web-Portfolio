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
      "Creating responsive and interactive websites using modern web technologies.",
  },
  {
    id: 2,
    nama: "Cybersecurity",
    deskripsi:
      "Securing systems and applications through testing and forensic analysis.",
  },
  {
    id: 3,
    nama: "UI/UX Design",
    deskripsi:
      "Designing intuitive and attractive user interfaces with a focus on user experience.",
  },
];

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    skills: ["Web Development", "UI/UX Design"],
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Kali Linux",
    ket: "Penetration Testing OS",
    skills: ["Cybersecurity"],
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "CSS",
    ket: "Style Sheet Language",
    skills: ["Web Development", "UI/UX Design"],
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "HTML",
    ket: "Markup Language",
    skills: ["Web Development"],
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "SQL",
    ket: "Database Language",
    skills: ["Web Development", "Cybersecurity"],
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    skills: ["Web Development"],
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Oracle VirtualBox",
    ket: "Virtualization Software",
    skills: ["Cybersecurity"],
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Android Studio",
    ket: "Mobile App IDE",
    skills: ["Web Development"],
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Autopsy",
    ket: "Digital Forensics Tool",
    skills: ["Cybersecurity"],
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design Tool",
    skills: ["UI/UX Design"],
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    skills: ["UI/UX Design"],
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "OSINT",
    ket: "Open Source Intelligence",
    skills: ["Cybersecurity"],
    dad: "1200",
  },
];

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Firebase App",
    desk: "A web app project using Firebase for backend and authentication.",
    tools: ["HTML", "CSS", "JavaScript", "Firebase"],
    dad: "200",
    link: "https://github.com/Rhckjf/firebaseapp",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Water Management System",
    desk: "A system for monitoring water quality and consumption.",
    tools: ["HTML", "CSS", "JS", "PHP"],
    dad: "300",
    link: "https://github.com/Rhckjf/Water-Management-System",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Cybersecurity Risk Assessment",
    desk: "A web-based system to assess cyber risks using NIST framework.",
    tools: ["Flask", "MySQL", "Python"],
    dad: "400",
    link: "https://github.com/Rhckjf/-Cybersecurity-Risk-Assessment",
  },
   {
    id: 4,
    gambar: Proyek4,
    nama: "PramusakuProject - Digital Scout Handbook",
    desk: "PramusakuProject is an Android application designed to help Scouts easily access various materials and information about Scouting in a digital format.",
    tools: ["Kotlin", "XMl", "Android Studio", "Firebase", "Android SDK"],
    dad: "500",
    link: "https://github.com/MannLTC19/PramusakuProject/tree/master",
  },
];
