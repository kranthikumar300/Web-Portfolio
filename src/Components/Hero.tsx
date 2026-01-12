import heroImg from "/hero-profile.webp";
import { FiGithub } from "react-icons/fi";
import { SiSkillshare } from "react-icons/si";
import { GiSuitcase } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-y-2 min-h-screen py-10 px-4 bg-[#efede3]">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
          <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-title text-textColor">
            MERN
          </span>
          <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-title text-textColor">
            STACK
          </span>
          <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-title text-textColor">
            DEVELOPER
          </span>
        </div>

        <div className="flex flex-col sm:justify-center lg:flex-row lg:gap-20 xl:gap-40 items-center sm:gap-50 md:gap-1">
          <img
            src={heroImg}
            alt="Profile"
            style={{
              transform: "perspective(800px) rotateZ(20deg)",
              transformOrigin: "center center",
            }}
            id="imgScroll"
            className="heroimg w-60 h-80 lg:w-80 lg:h-96 rounded-xl border-black border-t-4 shadow-2xl object-cover object-center"
          />
          <div className="flex flex-col justify-center items-center min-h-100">
            <p className="text-center text-white p-3 rounded-2xl text-lg px-4 m-4 max-w-120 bg-textColor xl:bg-transparent xl:text-black">
              I’m Kranthi Kireet, a MERN developer crafting scalable, responsive
              web experiences using React, TypeScript, GSAP and modern animation
              tools.
            </p>
            <div className="flex gap-x-5 p-2">
              <a href="https://github.com/kranthikumar300" target="_blank">
                <button className="flex justify-center items-center gap-2 bg-textColor text-white border-black border-2 rounded-md px-5 py-2 cursor-pointer">
                  <FiGithub className="w-5 h-5" />
                  Github
                </button>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0150099f2b2a22d228?mp_source=share"
                target="_blank"
              >
                <button className="flex justify-center items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer">
                  <GiSuitcase className="w-5 h-5" />
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center px-4 py-10 min-h-screen bg-[#1B1C1D]">
        <div className="flex flex-col items-center justify-center min-h-100 p-3 gap-4">
          <h1 className="text-4xl text-white font-bold mb-4">ME</h1>
          <p className="text-white max-w-200 text-center">
            I’m a MERN Stack web developer with hands-on experience working at a
            freelance firm, where I build responsive, user-friendly web
            applications using React, Node.js, Express, JavaScript, and Tailwind
            CSS. I focus on creating clean UI, scalable code, and practical
            solutions that deliver real value. I hold a Bachelor of Technology
            in Computer Science and Engineering, along with a Diploma in Civil
            Engineering, which has shaped my structured problem-solving
            approach. I’m passionate about continuous learning and have earned
            certifications in React, Node.js, Express, and JavaScript from
            reputed organizations. My goal is to combine technical expertise
            with creativity to build innovative digital experiences for diverse
            clients.
          </p>
          <button
            onClick={() => navigate("/skills")}
            className="flex items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 mt-4 cursor-pointer gitbtn"
          >
            <SiSkillshare className="w-5 h-5" />
            Skills
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
