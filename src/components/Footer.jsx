const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
           <a href="#Home">Home</a>
           <a href="#AboutMe">AboutMe</a> 
           <a href="#Proyek">Project</a>
           <a href="#Skills">Skills</a> 
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Rhckjf">
                <i className="ri-github-fill ri-2x"></i>
            </a>
             <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
             <a href="https://www.linkedin.com/in/ihsan-ramadhan-415b7a307/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
             <a href="https://discord.com/channels/@me">
                <i className="ri-discord-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer