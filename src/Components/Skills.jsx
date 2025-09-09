import React, { useState } from "react";
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import bootstrap from "/bootstrap.png";
import react from "/react.png";
import tailwind from "/tailwind.png";
import native1 from "/native1.jpg";
import typescript from "/typescript.png";

const skillsData = [
  {
    id: 1,
    image: html,
    title: "HTML",
    progress: 80,
  },
  {
    id: 2,
    image: css,
    title: "CSS",
    progress: 55,
    //   " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo modi quasi?",
  },
  {
    id: 3,
    image: javascript,
    title: "JAVASCRIPT",
    progress: 70,
  },
  {
    id: 4,
    image: typescript,
    title: "Typescript",
    progress: 80,
  },
  {
    id: 5,
    image: react,
    title: "REACT JS / REACT NATIVE",
    progress: 75,
  },
  {
    id: 6,
    image: tailwind,
    title: "TAILWIND",
    progress: 60,
  },
];

const SkillBox = ({ image, title, progress }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>

      <div
        className={`mt-4 transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-green-400 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: isHovered ? `${progress}%` : "0%",
            }}
          ></div>
        </div>
        <span className="text-sm text-purple-400 mt-1 block">{progress}%</span>
      </div>
    </article>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-72 h-36 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-green-500">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I have a strong foundation in front-end development and a passion
            for building clean, responsive, and user-focused web interfaces
            using modern web technologies. <br />
            My current skills set includes:
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              progress={skill.progress}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Skills;
