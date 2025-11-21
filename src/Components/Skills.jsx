

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
const html = import.meta.env.BASE_URL + 'html.png';
const css = import.meta.env.BASE_URL + 'css.png';
const javascript = import.meta.env.BASE_URL + 'javascript.png';
const bootstrap = import.meta.env.BASE_URL + 'bootstrap.png';
const reactImg = import.meta.env.BASE_URL + 'react.png';
const tailwind = import.meta.env.BASE_URL + 'tailwind.png';
const native1 = import.meta.env.BASE_URL + 'native1.jpg';
const typescript = import.meta.env.BASE_URL + 'typescript.png';

const skillsData = [
  {
    id: 1,
    image: html,
    title: "HTML",
    progress: 80,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    image: css,
    title: "CSS",
    progress: 55,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 3,
    image: javascript,
    title: "JAVASCRIPT",
    progress: 70,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 4,
    image: typescript,
    title: "Typescript",
    progress: 60,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 5,
    image: reactImg,
    title: "REACT JS / REACT NATIVE",
    progress: 75,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 6,
    image: tailwind,
    title: "TAILWIND",
    progress: 60,
    color: "from-cyan-500 to-teal-500"
  },
];

// Horizontal Infinite Scroll Component
const HorizontalSkillsScroll = ({ skills, speed = 50, direction = 'left' }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    
    if (!container || !scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    
    const createAnimation = () => {
      const distance = direction === 'left' ? -scrollWidth / 2 : scrollWidth / 2;
      
      animationRef.current = gsap.to(scrollElement, {
        x: distance,
        duration: scrollWidth / speed,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth / 2))
        }
      });
    };

    createAnimation();

    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [skills, speed, direction]);

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden py-4"
    >
      <div 
        ref={scrollRef}
        className="flex items-center"
        style={{ width: 'fit-content' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.id}-${index}`}
            className="flex-shrink-0 mx-3 group cursor-pointer"
          >
            <div className={`
              relative px-6 py-4 bg-gradient-to-r ${skill.color} 
              rounded-2xl shadow-lg backdrop-blur-sm border border-white/10
              transform transition-all duration-300 group-hover:scale-110 
              group-hover:shadow-2xl group-hover:shadow-purple-500/25
              min-w-[140px] text-center
            `}>
              <div className="mb-2">
                <img 
                  src={skill.image} 
                  alt={skill.title} 
                  className="w-8 h-8 mx-auto filter brightness-0 invert"
                />
              </div>
              <div className="text-white font-semibold text-xs">{skill.title}</div>
              <div className="text-white/80 text-xs mt-1">{skill.progress}%</div>
              
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ image, title, progress, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:border-purple-500/50 transition-all duration-300 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-110 transition-transform duration-300" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
      </header>

      <div
        className={`mt-4 transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className={`bg-gradient-to-r ${color} h-2.5 rounded-full transition-all duration-500 ease-in-out`}
            style={{
              width: isHovered ? `${progress}%` : "0%",
            }}
          ></div>
        </div>
        <span className="text-sm text-purple-400 mt-1 block">{progress}%</span>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        className="w-full max-w-7xl text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-green-500">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I have a strong foundation in front-end development with a passion
            for creating clean, responsive, and user-focused web interfaces
            using modern web technologies. <br />
            My current skills set includes:
          </p>
        </header>

        {/* Horizontal Infinite Scroll - Forward Direction */}
        {/* <div className="mb-8">
          <HorizontalSkillsScroll 
            skills={skillsData} 
            speed={60} 
            direction="left" 
          />
        </div> */}

        {/* Horizontal Infinite Scroll - Reverse Direction */}
        {/* <div className="mb-12">
          <HorizontalSkillsScroll 
            skills={skillsData.slice().reverse()} 
            speed={45} 
            direction="right" 
          />
        </div> */}

        {/* Traditional Skills Grid */}
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
              color={skill.color}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Skills;