import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import heroImg from "/hero-profile.webp";
import { FiGithub } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      ".heroText",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out",
        stagger: { amount: 1, from: "end" },
      }
    );

    gsap.fromTo(
      ".heroimg",
      { z: 90, opacity: 0 },
      {
        z: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "elastic.out",
      }
    );

    gsap.fromTo(
      ".bioText",
      { x: 90, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: "expo.out",
        stagger: { amount: 1, from: "end" },
      }
    );

    gsap.fromTo(
      ".gitbtn",
      { x: 90, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: "bounce",
        stagger: {
          amount: 0.5,
        },
      }
    );

    gsap.to("#imgScroll", {
      y: 700,
      x: 700,
      rotation: 0,
      scale: 1.2,
      scrollTrigger: {
        trigger: "#imgScroll",
        start: "top top",
        scrub: true,
      },
    });
  });

  return (
    <>
      <section className="heroSection flex flex-col justify-center items-center gap-y-2 min-h-screen bg-[#efede3]">
        <div className="flex items-start gap-x-10 tracking-wide">
          <span className="text-9xl font-bold font-title text-textColor heroText">
            MERN
          </span>
          <span className="text-9xl font-bold font-title text-textColor heroText">
            STACK
          </span>
          <span className="text-9xl font-bold font-title text-textColor heroText">
            DEVELOPER
          </span>
        </div>

        <div className="flex justify-center items-start gap-50">
          <img
            src={heroImg}
            alt="Profile"
            style={{
              transform: "perspective(800px) rotateZ(20deg)",
              transformOrigin: "center center",
            }}
            id="imgScroll"
            className="heroimg w-80 h-96 rounded-xl border-black border-t-4 shadow-2xl object-cover object-center"
          />
          <div className="flex flex-col justify-center items-center min-h-100">
            <p className="text-center text-lg px-4 m-4 max-w-120 bioText">
              I’m Kranthi Kireet, a MERN developer crafting scalable, responsive
              web experiences using React, TypeScript, GSAP and modern animation
              tools.
            </p>
            <div className="flex gap-x-5 p-2">
              <a href="https://github.com/kranthikumar300" target="_blank">
                <button className="flex justify-center items-center gap-2 bg-textColor text-white border-black border-2 rounded-md px-5 py-2 cursor-pointer gitbtn">
                  <FiGithub className="w-5 h-5" />
                  Github
                </button>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0150099f2b2a22d228?mp_source=share"
                target="_blank"
              >
                <button className="flex justify-center items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer gitbtn">
                  <GiSuitcase className="w-5 h-5" />
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-start items-center min-h-screen bg-[#1B1C1D]">
        <div className="flex flex-col items-center justify-around min-h-100 p-3 ml-10 mt-10">
          <h1 className="text-5xl text-white font-bold mb-4">ME</h1>
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
            onClick={() => navigate("/about")}
            className="flex items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer gitbtn"
          >
            <FaFire className="w-5 h-5" />
            Find Me More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
