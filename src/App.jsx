// App.jsx
import { useState, useEffect } from "react";
import { listSkills, listTools, listProyek } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [selectedSkill, setSelectedSkill] = useState("Web Development");
  const [skillDescription, setSkillDescription] = useState("");

  useEffect(() => {
    const skill = listSkills.find(skill => skill.nama === selectedSkill);
    setSkillDescription(skill?.deskripsi || "");
  }, [selectedSkill]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const filteredTools = listTools.filter(tool =>
    tool.skills.includes(selectedSkill)
  );

  return (
    <>
      {/* Hero */}
      <section className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" data-aos="fade-up">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="ihsan.jpg" alt="ihsan" className="w-10 rounded-md" loading="lazy" />
            <q>The best code I ever wrote is the code I write tomorrow.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Ihsan Ramadhan</h1>
          <p className="text-base/loose mb-6 text-zinc-300">
            I am currently at the beginning of my journey in the IT field, with a growing interest in programming and cyber security. While I may still be learning the fundamentals, I am fully committed to developing my skills in web development and creative design through consistent practice and hands-on experience.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="cv-ihsan.pdf" download className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#Proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              View Projects <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto animate__animated animate__fadeInUp animate__delay-4s">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]">
            <img
              src="/ihsan.jpg"
              alt="ihsan"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-1/4 rounded-t-3xl bg-gradient-to-b from-zinc-900/70 to-transparent" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="about mt-32 py-10" id="AboutMe" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Background Saya */}
          <div className=" p-6 rounded-2xl w-full max-w-sm flex items-start gap-4 card-hover-effect">
            <img src="/assets/background-logo.png" alt="Logo Background" className="w-14 h-14 rounded-md" />
            <div>
              <h2 className="text-xl font-semibold mb-2">My Background</h2>
              <p className="text-base text-zinc-200">
                My name is Muhamad Ihsan Ramadhan, an Information Technology student exploring the IT world. I'm currently building my skills in programming, web development, cybersecurity, and UI design through continuous learning and real-world practice.
              </p>
            </div>
          </div>

          {/* Gambar Bulat */}
          <div className="hidden md:block relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-700">
            <img src="/ihsan.jpg" alt="ihsan" className="w-full h-full object-cover" />
          </div>


          {/* Pendidikan */}
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <div className=" p-6 rounded-2xl w-full flex items-start gap-4 card-hover-effect">
              <img src="/assets/education-logopres.jpg" alt="Logo Kampus" className="w-14 h-14 rounded-md" />
              <div>
                <h2 className="text-xl font-semibold mb-2">President University</h2>
                <p className="text-base mb-1 text-zinc-200">Undergraduate Student</p>
                <p className="text-zinc-100">Major in Information Technology</p>
              </div>
            </div>

            <div className=" p-6 rounded-2xl w-full flex items-start gap-4 card-hover-effect">
              <img src="/assets/education-logo.png" alt="Logo SMA" className="w-14 h-14 rounded-md" />
              <div>
                <h2 className="text-xl font-semibold mb-2">MA Nahdhotul Ulama</h2>
                <p className="text-base mb-1 text-zinc-200">2020 – 2023 High School Graduate</p>
                <p className="text-zinc-100">Vocational High School in IPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills mt-32 py-10" id="Skills" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4 text-center">My Skills</h1>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto">
          Click on a skill to see the tools I use for that area.
        </p>

        {/* Skill Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {listSkills.map(skill => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill.nama)}
              className={`px-4 py-2 rounded-md border transition-all duration-300 ${
                selectedSkill === skill.nama
                  ? "bg-violet-700 text-white"
                  : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
              }`}
            >
              {skill.icon} {skill.nama}
            </button>
          ))}
        </div>

        {/* Skill Description */}
        {skillDescription && (
          <p className="mt-6 text-center text-zinc-300 italic max-w-xl mx-auto">
            {skillDescription}
          </p>
        )}

        {/* Filtered Tools */}
        <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredTools.length > 0 ? (
            filteredTools.map(tool => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md card-hover-effect"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-80 text-sm text-gray-100">{tool.ket}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-zinc-400">
              No tools available for this skill.
            </p>
          )}
        </div>
      </section>

      {/* Project */}
      <section className="project mt-32 py-10" id="Proyek" data-aos="fade-up">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center text-zinc-300 mb-10">
          Below are some of the projects I made
        </p>
        <div className="project-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md card-hover-effect">
              <img src={proyek.gambar} alt="Project" className="rounded-md" />
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={proyek.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center bg-violet-700 p-3 rounded-lg hover:bg-violet-600"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact mt-32 px-4 sm:px-10" id="Contact" data-aos="fade-up">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-base text-center mb-10 text-zinc-300">
          Chat me now if you need help
        </p>
        <form
          action="https://formsubmit.co/ihsanramadhan011104@gmail.com"
          method="POST"
          className="bg-zinc-800 p-6 sm:p-10 w-full max-w-screen-sm mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-semibold block mb-1">Real Name</label>
              <input
                type="text"
                name="name"
                placeholder="Input Name..."
                className="border border-zinc-500 p-2 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="font-semibold block mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input Email..."
                className="border border-zinc-500 p-2 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="font-semibold block mb-1">Message</label>
              <textarea
                name="Message"
                id="message"
                rows="6"
                placeholder="Type anything in here..."
                className="border border-zinc-500 p-2 rounded-md w-full"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-violet-700 p-3 rounded-lg w-full border border-zinc-600 hover:bg-violet-600 transition-all"
            >
              Send A Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
