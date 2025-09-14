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
     <div className="relative p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl  mt-5">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-80 animate-bounce mt-5" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse  " />
              
              {/* Enhanced gradient background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-cyan-400/30 
                rounded-3xl transform rotate-3 scale-105 -z-10  "
              />
              
              <img
                src={prof2}
                alt="Siddhesh Zujam - About Profile"
                className="relative z-10 w-[180px] h-[250px] sm:w-[320px] sm:h-[400px] md:w-[260px] md:h-[350px] 
                object-cover rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500
                hover:shadow-purple-500/25"
              />
            </div>
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