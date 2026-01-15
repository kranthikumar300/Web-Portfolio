import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaUpwork } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  // GSAP Animations for Footer Icons
  useGSAP(() => {
    // Footer Icons Animation
    gsap.fromTo(
      ".footerIcons",
      {
        scale: 0.85,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".footerIcons",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      {/* Footer Separator Line */}
      <div className="border-2 bg-[#1B1C1D]"></div>

      {/* Footer Section */}
      <footer className="flex justify-evenly items-center flex-col min-h-100 pt-5 px-4 bg-[#1B1C1D]">
        <p className="text-white max-w-96 text-center">
          Have an idea or project in mind? Let’s collaborate to build reliable,
          scalable digital solutions that bring your vision to life. Get in
          touch today.
        </p>

        {/* Social Media Icons */}
        <div className="p-2">
          <div className="flex gap-8 mt-5">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/bingi-kranthi/"
              target="_blank"
            >
              <CiLinkedin className="footerIcons size-20 text-white " />
            </a>

            {/* Gmail Icon */}
            <a href="mailto:kranthikumar9.official@gmail.com">
              <BiLogoGmail className="footerIcons size-20 text-white" />
            </a>

            {/* Upwork Icon */}
            <a
              href="https://www.upwork.com/freelancers/~0150099f2b2a22d228?mp_source=share"
              target="_blank"
            >
              <FaUpwork className="footerIcons size-20 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white py-5">
            &copy; 2026 All rights reserved by Kranthi kireet.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
