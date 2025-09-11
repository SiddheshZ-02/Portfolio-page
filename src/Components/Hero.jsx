import React from "react";
import Navbar from "./Navbar";
import prof2 from "/prof2.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import TextType from "./TextType";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex flex-col items-center">
      <Navbar />
      <main
        id="hero"
        className="flex flex-col sm:flex-col md:flex-row items-center justify-center 
          w-full px-4 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 
          pt-16 sm:pt-20 md:pt-24 lg:pt-32 mt-12 sm:mt-14 md:mt-0 z-10"
      >
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="order-1 md:order-2 flex justify-center md:justify-end 
            mb-8 sm:mb-10 md:mb-0 w-full md:w-1/2 lg:w-2/5"
        >
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] 
          rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
          shadow-[0_0_50px_rgba(182,0,182,0.7)] sm:shadow-[0_0_60px_rgba(182,0,182,0.7)] lg:shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>
          <img
            src={prof2}
            alt="Hero Image"
            className="h-[200px] sm:h-[250px] md:h-[350px] lg:h-[350px] w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover rounded-lg relative z-10 mx-auto md:top-10"
          />
        </figure>
        <section
          className="order-2 md:order-1 w-full md:w-1/2 lg:w-3/5 md:pr-8 lg:pr-12 
            text-center md:text-left relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div
            className="absolute z-10 w-40 sm:w-48 md:w-60 bg-[#cd3cf5] rounded-full 
            blur-3xl opacity-50 -top-5 -left-12 md:-left-8"
          ></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Siddhesh Zujam
            </h1>
            <h2
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold 
              text-[#3e0f4a] md:text-[#c744ec]"
            >
              <TextType
                text={["Front-End Developer", "App Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#c744ec"]}
              />
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6">
            I’m a dedicated Front-End Developer passionate about building clean,
            responsive interfaces and high-quality apps for web and mobile.
           
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/in/siddhesh-zujam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
              />
            </a>
            <a
              href="https://github.com/SiddheshZ-02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
              />
            </a>
          </div>
          <a href="Resume.pdf" download="Resume.pdf">
            <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 
              focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_30px_rgba(128,0,128,0.7)] 
              rounded-full text-sm sm:text-base"
            >
              Download CV
            </button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Hero;
