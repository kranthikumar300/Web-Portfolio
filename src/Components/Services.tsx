import services1 from "../../public/services1.webp";
import services2 from "../../public/services2.webp";
import services3 from "../../public/services3.webp";
import comingSoonImg from "../../public/comingTem.webp";
import { GiSuitcase } from "react-icons/gi";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <Skills />
      <section className="flex flex-col justify-center items-center min-h-screen bg-[#efede3]">
        <h1 className="text-center text-white  text-5xl font-bold bg-[#1B1C1D] p-2">
          Services I Offer
        </h1>
        <div className="flex justify-evenly gap-52 p-4 mt-10">
          <div className="flex flex-col justify-center items-center rounded-2xl pb-5 gap-y-8 w-80 min-h-80 bg-white shadow-2xl">
            <img
              src={services1}
              alt="Web Development"
              className="object-cover object-center p-2 rounded-2xl"
            />
            <h2 className="font-bold text-4xl text-center p-2">
              Web Development
            </h2>
            <p className="text-center text-sm px-4">
              Building fast, responsive, and scalable websites using modern
              frameworks, clean UI design, and performance-focused best
              practices.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-2xl pb-5 gap-y-8 w-80 min-h-80 bg-white shadow-2xl">
            <img
              src={services2}
              alt="App Development"
              className="object-cover object-center p-2 rounded-2xl"
            />
            <h2 className="font-bold text-4xl text-center p-2">
              App Development
            </h2>
            <p className="text-center text-sm px-4">
              Developing reliable and user-friendly applications with modern
              technologies, optimized performance, and seamless user
              experiences.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-2xl pb-5 gap-y-8 w-80 min-h-80 bg-white shadow-2xl">
            <img
              src={services3}
              alt="Cloud Services"
              className="object-cover object-center p-2 rounded-2xl"
            />
            <h2 className="font-bold text-4xl text-center p-2">
              Cloud And Database
            </h2>
            <p className="text-center text-sm px-4">
              Providing reliable cloud services including deployment,
              environment setup, and performance optimization to ensure
              scalable, secure, and efficient applications.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-y-15 py-10 min-h-screen bg-[#1B1C1D]">
        <h1 className=" font-bold text-center text-5xl text-white">
          PROJECTS AND TESTIMONIALS
        </h1>

        <div className="relative">
          <img
            src={comingSoonImg}
            alt="coming Soon"
            className="h-80 w-250 my-10 mx-10 object-center rounded-xl shadow-2xl"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white">
            On the Horizon
          </h1>
        </div>

        <button
          onClick={() => navigate("/about")}
          className="flex items-center gap-2 bg-[#efede3] text-black border-black border-2 rounded-md px-5 py-2 cursor-pointer gitbtn"
        >
          <GiSuitcase />
          Hire Me
        </button>
      </section>
    </>
  );
};

export default Services;
