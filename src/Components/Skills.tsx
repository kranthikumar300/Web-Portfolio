import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-y-12 min-h-screen py-4 px-4 md:py-16 bg-[#1B1C1D]">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          Skills
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 xl:grid-cols-5">
          <div className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3">
            <SiJavascript className="h-20 w-20 p-4 text-yellow-400" />
            <h2 className="text-3xl text-white font-bold">JavaScript</h2>
            <p className="text-[12px] max-w-52 text-center text-white">
              Strong foundation in JavaScript for building dynamic, interactive,
              and logic-driven web applications.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2  sm:gap-y-3">
            <SiReact className="h-20 w-20 p-4 text-sky-500" />
            <h2 className="text-3xl text-white font-bold">React & Native</h2>
            <p className="text-[12px] max-w-52 text-center text-white">
              Experienced in building scalable React apps and familiar with
              React Native for cross-platform mobile development.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2  sm:gap-y-3">
            <SiExpress className="h-20 w-20 p-4 text-white" />
            <h2 className="text-3xl text-white font-bold">Express</h2>
            <p className="text-[12px] max-w-52 text-center text-white">
              Skilled in creating RESTful APIs using Express.js with structured
              routing and middleware handling.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2  sm:gap-y-3">
            <SiMongodb className="h-20 w-20 p-4 text-green-400" />
            <h2 className="text-3xl text-white font-bold">MongoDB</h2>
            <p className="text-[12px] max-w-52 text-center text-white">
              Hands-on experience designing and managing NoSQL databases with
              efficient data modeling.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3">
            <SiTailwindcss className="h-20 w-20 p-4 text-sky-400" />
            <h2 className="text-3xl text-white font-bold">TailwindCSS</h2>
            <p className="text-[12px] max-w-52 text-center text-white">
              Proficient in crafting responsive, modern UIs using utility-first
              Tailwind CSS styling.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-center max-w-200 p-4">
            Includes intermediate-level experience in the MERN stack, with
            hands-on practice in building full-stack applications and managing
            state using Redux. I’ve worked with GSAP to create smooth, engaging
            animations and used shadcn/ui to design clean, reusable, and
            accessible components. This combination allows me to build
            applications that are not only functional and scalable but also
            visually polished and user-focused, while continuously improving
            through real-world development practice.
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;
