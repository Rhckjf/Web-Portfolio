import { useState, useEffect, useRef } from "react";
import { listSkills, listTools, listProyek, listExperience } from "./data";
import FlowArt, { FlowSection } from "./components/ui/story-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, ExternalLink, Send, Mail, User, Code2, Briefcase, GraduationCap, History } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import LayoutPreloader from "./components/ui/layout-preloader";
import { BackgroundPaths } from "./components/ui/background-paths";
import { MovingGrid } from "./components/ui/moving-grid";

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState("Web Development");


  const [skillDescription, setSkillDescription] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    if (targetId === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      const sections = Array.from(document.querySelectorAll('[data-flow-section]'));
      const index = sections.indexOf(elem);
      
      if (index === sections.length - 1) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      } else if (index !== -1) {
        window.scrollTo({
          top: index * window.innerHeight,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    const skill = listSkills.find((skill) => skill.nama === selectedSkill);
    setSkillDescription(skill?.deskripsi || "");
  }, [selectedSkill]);

  const filteredTools = listTools.filter((tool) =>
    tool.skills.includes(selectedSkill)
  );

  return (
    <>
      <LayoutPreloader />
      <FlowArt aria-label="Ihsan Ramadhan Portfolio">
      {/* 01 - Hero Section */}
      <FlowSection id="Home" aria-label="Hero" style={{ backgroundColor: '#0A0A0A', color: '#fff' }}>
        <div className="hero-bg absolute inset-0 opacity-100">
          <BackgroundPaths />
        </div>
        <div className="relative z-10 flex flex-col h-full pt-20">
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              whileHover={{ scale: 4, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hero-avatar w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500/50 cursor-pointer shadow-xl shadow-violet-500/20"
            >
              <img src="/ihsan.jpg" alt="Ihsan" className="w-full h-full object-cover" />
            </motion.div>
            <span className="hero-badge text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Available for projects</span>
          </div>
          
          <div className="mt-auto mb-8 md:mb-12 overflow-hidden">
            <h1 className="hero-title text-[clamp(2.5rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tighter uppercase">
              Muhamad Ihsan <br />
              Ramadhan
            </h1>
            <p className="hero-desc mt-6 md:mt-8 text-sm md:text-[clamp(1.1rem,2vw,1.5rem)] text-zinc-400 max-w-[60ch] leading-relaxed">
              ERP Developer & IT Student. Specializing in 
              <span className="text-white"> Web Developer</span>, <span className="text-white">Enterprise Systems</span> and <span className="text-white">Cyber Security</span>.
            </p>

          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-auto">
            <a
              href="Muhamad Ihsan Ramadhan_resume.pdf"
              download
              className="hero-btn group flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 font-bold text-sm md:text-base"
            >
              Download CV <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#Projects"
              onClick={(e) => handleScroll(e, "#Projects")}
              className="hero-btn group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 font-bold backdrop-blur-sm border border-white/10 text-sm md:text-base"
            >
              View My Work <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </FlowSection>

      {/* 02 - About Section */}
      <FlowSection id="AboutMe" aria-label="About Me" style={{ backgroundColor: '#111', color: '#fff' }}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop" 
            alt="About background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">02 — The Background</p>
          <hr className="mb-12 border-white/10" />
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-[clamp(2.2rem,6vw,5rem)] font-bold tracking-tight leading-none mb-6 md:mb-8">
                IT Student at <br />
                <span className="text-violet-400">President University</span>
              </h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[45ch]">
                Exploring the vast world of Information Technology. Currently focused on building 
                robust web applications and strengthening my fundamentals in programming 
                and creative UI design.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-violet-400 w-8 h-8" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-500">2023 — Present</p>
                    <p className="font-bold text-white">President University</p>
                    <p className="text-zinc-400">B.S. in Computing (GPA: 3.64/4.00)</p>
                    <p className="text-xs text-violet-400/80 mt-1 italic">Honors: 75% Reduction Scholarship</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">2020 — 2023</p>
                    <p className="font-bold text-white">MA Nahdhotul Ulama</p>
                    <p className="text-zinc-400">Vocational High School in IPA</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-violet-400">Focus</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">Web Development</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet-400">Interest</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">Cyber Security</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet-400">Passion</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">UI/UX Design</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-violet-400">Goal</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">Clean Systems</p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* 03 - Experience Section */}
      <FlowSection id="Experience" aria-label="Experience" style={{ backgroundColor: '#050505', color: '#fff' }}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Experience background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">03 — Professional Journey</p>
          <hr className="mb-12 border-white/10" />

          <div className="space-y-12 max-w-[800px] overflow-y-auto pr-4 scrollbar-hide">
            {listExperience.map((exp) => (
              <div key={exp.id} className="relative pl-12 group">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/10 group-last:hidden" />
                
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-black bg-violet-600 transition-transform group-hover:scale-125" />
                
                <div className="space-y-2">
                  <p className="text-xs md:text-sm font-bold text-violet-400 tracking-widest uppercase">{exp.period}</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{exp.role}</h3>
                  <p className="text-lg md:text-xl font-bold text-white/80">{exp.company}</p>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[50ch] pt-2">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-12 flex items-center gap-4 border-t border-white/10">
            <Briefcase className="text-violet-500 w-6 h-6" />
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Continuously Learning & Growing</p>
          </div>
        </div>
      </FlowSection>

      {/* 04 - Skills Section */}
      <FlowSection id="Skills" aria-label="Skills" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <div className="relative z-10 flex flex-col h-full py-4 md:py-10">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4">04 — Technical Arsenal</p>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-black tracking-tighter uppercase leading-[0.9] mb-6">
              I'm always <br />
              <span className="text-violet-600">developing</span> in
            </h2>
          </div>

          {/* Floating Tag Cloud */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-16 max-w-[900px]">
            {listSkills.map((skill, index) => (
              <motion.button
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onClick={() => setSelectedSkill(skill.nama)}
                className={`px-5 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-lg font-bold uppercase tracking-[0.1em] border-2 transition-all duration-500 ${
                  selectedSkill === skill.nama
                    ? "bg-black text-white border-black scale-105 shadow-xl z-10"
                    : "bg-white/30 backdrop-blur-sm text-black/60 border-black/5 hover:border-black/40 hover:text-black hover:bg-white"
                }`}
              >
                {skill.nama}
              </motion.button>
            ))}
          </div>

          {/* Content Reveal Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mt-auto pb-6">
            {/* Left: Description */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-[9px] font-black text-violet-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-violet-600"></span> Current Focus
                  </div>
                  <p className="text-lg md:text-2xl font-medium text-zinc-600 leading-tight">
                    {skillDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right: Tools Badges */}
            <div className="flex flex-wrap gap-2 content-start">
              <AnimatePresence mode="popLayout">
                {filteredTools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-white border border-black/[0.03] rounded-xl shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-300 cursor-default group"
                  >
                    <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                      <img src={tool.gambar} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-black transition-colors">
                      {tool.nama}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </FlowSection>

      {/* 05 - Projects Section */}
      <FlowSection id="Projects" aria-label="Projects" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>

        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Projects background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-4">05 — The Portfolio</p>
          <hr className="mb-12 border-white/10" />

          <div className="flex-grow overflow-y-auto pr-4 scrollbar-hide space-y-2 pb-20">
            {listProyek.map((proyek, index) => (
              <motion.div 
                key={proyek.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative py-8 md:py-10 border-b border-white/10 hover:border-violet-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
                  <div className="flex-grow lg:max-w-[700px]">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <span className="text-violet-500 font-mono text-xs md:sm">0{index + 1}</span>
                      <h4 className="text-2xl md:text-5xl font-black tracking-tighter uppercase group-hover:text-violet-400 transition-colors">
                        {proyek.nama}
                      </h4>
                    </div>
                    <p className="text-sm md:text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {proyek.desk}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-4 md:gap-6">
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {proyek.tools.map((t, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-zinc-500 group-hover:text-white group-hover:border-violet-500/30 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={proyek.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                    >
                      Source Code <i className="ri-arrow-right-line group-hover/link:translate-x-2 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FlowSection>

      {/* 06 - Contact Section */}
      <FlowSection id="Contact" aria-label="Contact" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="absolute inset-0">
          <MovingGrid />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">06 — Get In Touch</p>
          <hr className="mb-12 border-white/10" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tighter uppercase">
                Let's <br className="hidden md:block" />
                Work <br className="hidden md:block" />
                Together
              </h2>
              <div className="flex flex-col gap-3 md:gap-4">
                <a 
                  href="mailto:ihsanramadhan011104@gmail.com"
                  className="flex items-center gap-3 md:gap-4 text-zinc-400 group cursor-pointer hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-colors flex-shrink-0">
                    <i className="ri-mail-line text-lg md:text-xl"></i>
                  </div>
                  <p className="text-sm md:text-lg font-medium break-all">ihsanramadhan011104@gmail.com</p>
                </a>
                <a 
                  href="https://github.com/Rhckjf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 text-zinc-400 group cursor-pointer hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-colors flex-shrink-0">
                    <i className="ri-github-fill text-lg md:text-xl"></i>
                  </div>
                  <p className="text-sm md:text-lg font-medium">github.com/Rhckjf</p>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ihsan-ramadhan-415b7a307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 text-zinc-400 group cursor-pointer hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-violet-600 transition-colors flex-shrink-0">
                    <i className="ri-linkedin-box-fill text-lg md:text-xl"></i>
                  </div>
                  <p className="text-sm md:text-lg font-medium">Ihsan Ramadhan</p>
                </a>
              </div>
            </div>

            <form 
              action="https://formsubmit.co/ihsanramadhan011104@gmail.com" 
              method="POST"
              className="bg-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 backdrop-blur-xl space-y-4 md:space-y-6"
            >
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  required
                  className="w-full bg-white/5 border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-full focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="hello@example.com" 
                  required
                  className="w-full bg-white/5 border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-full focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-4">Your Message</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  placeholder="How can I help you?" 
                  required
                  className="w-full bg-white/5 border border-white/10 px-6 md:px-8 py-4 md:py-6 rounded-[1.5rem] md:rounded-[2rem] focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none text-sm md:text-base"
                />
              </div>
              <button 
                type="submit" 
                className="group flex items-center justify-center gap-3 w-full py-4 md:py-6 bg-violet-600 text-white rounded-full font-extrabold text-base md:text-lg hover:bg-violet-500 transition-all shadow-xl shadow-violet-600/20"
              >
                Send Message <i className="ri-send-plane-fill group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </div>

          <div className="mt-auto py-12 flex justify-between items-center text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">
            <p>© 2026 Ihsan Ramadhan</p>
            <p>Built with React & GSAP</p>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  </>
  );
}
