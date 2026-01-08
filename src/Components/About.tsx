import { useNavigate } from "react-router-dom";
import img1 from "../../public/img1.webp";
import img2 from "../../public/img2.webp";
import img3 from "../../public/img3.webp";
import img4 from "../../public/img4.webp";
import img5 from "../../public/img5.webp";
import img6 from "../../public/img6.webp";
import img7 from "../../public/img7.webp";
import football1 from "../../public/football1.webp";
import football2 from "../../public/football2.webp";
import football3 from "../../public/football3.webp";
import { SiSkillshare } from "react-icons/si";
import { FaServicestack } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const About = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.fromTo(
      ".Timg",
      {
        scale: 0,
        rotation: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );
  });

  return (
    <>
      <section className="aboutSection flex justify-around items-center gap-x-30 min-h-screen bg-[#1B1C1D]">
        <figure className="relative w-80 h-80 flex gap-10 shrink-0 ml-24">
          <img
            src={img1}
            alt="img1"
            className="Timg absolute top-30 left-50 h-80 w-80 rounded-sm object-cover object-center"
          />
          <img
            src={img2}
            alt="img2"
            className="Timg absolute bottom-36 h-80 w-80 rounded-sm object-cover object-center"
          />
          <img
            src={img3}
            alt="img3"
            className="Timg absolute left-70 bottom-20 h-80 rounded-sm w-80 object-cover object-center"
          />
          <img
            src={img4}
            alt="img4"
            className="Timg absolute right-40 top-30 h-80 w-80 rounded-sm object-cover object-center"
          />
          <img
            src={img5}
            alt="img4"
            className="Timg absolute right-40  h-80 w-80 rounded-sm object-cover object-center"
          />
          <img
            src={img6}
            alt="img4"
            className="Timg absolute right-40  bottom-30 h-80 w-80 rounded-sm object-cover object-center"
          />
          <img
            src={img7}
            alt="img4"
            className="Timg absolute left-20  h-80 w-80 rounded-sm object-cover object-center"
          />
        </figure>

        <div className="flex flex-col items-center justify-center gap-y-10 py-3 px-3">
          <p className="text-center text-white max-w-140 p-2">
            <h1 className="text-6xl mb-4 font-bold">TRAVELLING</h1>
            Beyond technology, I’m an aspiring traveler who dreams of exploring
            new places, cultures, and perspectives. Travel fuels my creativity
            and curiosity, helping me approach problems with an open mindset.
            Experiencing different environments and ways of life inspires me to
            think beyond boundaries and design solutions with a global
            perspective. I aim to combine technical expertise, creativity, and
            life experiences to build meaningful digital products that are not
            only functional, but also intuitive, inclusive, and impactful for
            people from diverse backgrounds.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="flex items-center justify-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer"
          >
            <FaServicestack className="h-5 w-5" />
            Services
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-y-6 bg-[#1B1C1D] py-10">
        <h1 className="font-bold text-6xl text-white">FOOT BALL</h1>
        <div className="flex justify-evenly gap-30 p-4">
          <img
            src={football1}
            alt="football1"
            className="h-80 w-80 object-cover object-center"
          />
          <img
            src={football2}
            alt="football2"
            className="h-80 w-80 object-cover object-center"
          />
          <img
            src={football3}
            alt="football3"
            className="h-80 w-80 object-cover object-center"
          />
        </div>
        <p className="text-white text-center max-w-200">
          Outside of technology, football is a hobby I genuinely enjoy and
          actively follow. While I don’t have professional or competitive
          experience, I regularly watch matches and stay updated with teams,
          players, and tournaments. Football helps me relax, improves my focus,
          and teaches the importance of teamwork, strategy, and consistency.
          Following the game keeps me motivated and energized, and it influences
          how I approach challenges with patience and discipline, both in my
          personal interests and professional work.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="flex justify-center items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer"
        >
          <SiSkillshare className="w-5 h-5" />
          Technical Skills
        </button>
      </section>
    </>
  );
};
export default About;
