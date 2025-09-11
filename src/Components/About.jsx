import React from "react";
import prof2 from "/prof2.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[600px] sm:min-h-[700px] md:min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
       <figure
      data-aos="fade-right"
      data-aos-delay="500"
      className="flex justify-center md:justify-end relative w-full"
    >
      <div
        className="h-[150px] w-[200px] sm:h-[200px] sm:w-[300px] md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px] 
          bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          md:top-1/2 md:left-auto md:right-0 md:-translate-x-0 md:-translate-y-1/2 
          lg:right-2 rounded-full"
      ></div>
      <img
        src={prof2}
        alt="about picture 2"
        className="relative z-10 
          w-[120px] h-[140px] sm:w-[160px] sm:h-[180px] md:w-[200px] md:h-[240px] lg:w-[240px] lg:h-[300px] 
          rounded-lg shadow-lg 
          left-0 md:left-auto md:right-25 lg:right-25 mt-10"
      />
    </figure>
        <article
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-4 sm:-top-5 left-8 sm:left-10"></div>
          <header>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Self-taught Frontend Developer skilled in building responsive and
            user-friendly web and mobile applications using React.js and React
            Native. Passionate about UI/UX, performance optimization, and
            writing clean code. Proven ability to learn independently and
            deliver impactful projects. Skilled in modern frameworks with a focus on performance,
            accessibility, and cross-platform compatibility.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;