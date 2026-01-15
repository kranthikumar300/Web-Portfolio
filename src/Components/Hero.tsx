import heroImg from "/hero-profile.webp";
import { FiGithub } from "react-icons/fi";
import { SiSkillshare } from "react-icons/si";
import { GiSuitcase } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();

  // GSAP Animation Hook
  useGSAP(() => {
    // Section 1 Animations
    // Animate Title Text
    gsap.fromTo(
      ".titleText",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: { amount: 0.5, from: "end" },
        ease: "elastic.out",
      }
    );

    // Animate Profile Image
    gsap.fromTo(
      "#heroImg",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "elastic.out", delay: 1 }
    );

    // Animate Description Text
    gsap.from(".heroDescription", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      delay: 1.5,
    });

    // Animate Buttons
    gsap.from(".linkBtns", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "bounce.out",
      delay: 2,
      stagger: 0.2,
    });

    // Section 2 Animations
    // Animate About Me Title
    gsap.from(".workTitle", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".workTitle",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate About Me paragraph
    gsap.from(".workParagraph", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".workParagraph",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate Skills Button
    gsap.from(".skillsBtn", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".skillsBtn",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      {/* First Section */}
      <section className="flex justify-center items-center flex-col gap-y-2 min-h-screen py-10 px-4 bg-[#efede3]">
        {/* Title For Hero Section */}
        <div className="flex items-center flex-col md:flex-row gap-2 md:gap-5 xl:gap-10">
          <span className="titleText text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-title font-bold text-textColor">
            MERN
          </span>
          <span className="titleText text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-title font-bold text-textColor">
            STACK
          </span>
          <span className="titleText text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-title font-bold text-textColor">
            DEVELOPER
          </span>
        </div>

        {/* Profile Image and Description */}
        <div className="flex items-center flex-col sm:justify-center lg:flex-row lg:gap-20 xl:gap-40 sm:gap-50 md:gap-1">
          <img
            src={heroImg}
            alt="Profile"
            style={{
              transform: "perspective(800px) rotateZ(20deg)",
              transformOrigin: "center center",
            }}
            id="heroImg"
            className="w-60 h-80 lg:w-80 lg:h-96 rounded-xl border-black border-t-4 shadow-2xl object-cover object-center"
          />
          <div className="flex justify-center items-center flex-col min-h-100">
            <p className="heroDescription text-center text-white p-3 rounded-2xl text-lg px-4 m-4 max-w-120 bg-textColor xl:bg-transparent xl:text-black">
              I’m Kranthi Kireet, a MERN developer crafting scalable, responsive
              web experiences using React, TypeScript, GSAP and modern animation
              tools.
            </p>

            {/* Hire Me and GitHub Button */}
            <div className="flex gap-x-5 p-2">
              {/* GitHub Button */}
              <a href="https://github.com/kranthikumar300" target="_blank">
                <button className="linkBtns flex justify-center items-center gap-2 bg-textColor text-white border-black border-2 rounded-md px-5 py-2 cursor-pointer">
                  <FiGithub className="w-5 h-5" />
                  Github
                </button>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0150099f2b2a22d228?mp_source=share"
                target="_blank"
              >
                {/* Hire Me Button */}
                <button className="linkBtns flex justify-center items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer">
                  <GiSuitcase className="w-5 h-5" />
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex justify-center items-center px-4 py-10 min-h-screen bg-[#1B1C1D]">
        {/* About Me Section */}
        <div className="flex justify-center items-center flex-col min-h-100 p-3 gap-4">
          {/* About Me Title */}
          <h1 className="workTitle text-4xl sm:text-5xl xl:text-6xl text-white font-bold mb-4">
            ME
          </h1>
          <p className="workParagraph text-white max-w-200 text-center">
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

          {/* Skills Button */}
          <button
            onClick={() => navigate("/skills")}
            className="skillsBtn flex justify-center items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 mt-4 cursor-pointer"
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
