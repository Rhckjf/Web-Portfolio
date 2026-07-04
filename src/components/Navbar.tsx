import { motion } from "framer-motion";

const Navbar = () => {
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

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#AboutMe" },
    { name: "Experience", href: "#Experience" },
    { name: "Skills", href: "#Skills" },
    { name: "Project", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-[100] px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center p-1 md:p-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl max-w-full overflow-hidden"
      >
        {/* Brand - Hidden on small mobile */}
        <div className="px-4 border-r border-white/10 hidden md:block">
          <span className="text-sm font-black tracking-tighter text-white uppercase">
            Ihsan<span className="text-violet-500">.</span>
          </span>
        </div>

        <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-2 md:px-4 max-w-[85vw] md:max-w-none">
          {navLinks.map((link, index) => (
            <li key={index} className="flex-shrink-0">
              <motion.a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block px-3 md:px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300"
              >
                {link.name}
              </motion.a>
            </li>
          ))}
          {/* Hire Me integrated for mobile */}
          <li className="flex-shrink-0 md:hidden">
            <a 
              href="#Contact" 
              onClick={(e) => handleScroll(e, "#Contact")}
              className="block px-4 py-2 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full"
            >
              Hire
            </a>
          </li>
        </ul>

        {/* Hire Me - Hidden on mobile, shown on desktop */}
        <div className="ml-2 pl-2 border-l border-white/10 hidden md:block">
          <a 
            href="#Contact" 
            onClick={(e) => handleScroll(e, "#Contact")}
            className="block px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-colors whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;