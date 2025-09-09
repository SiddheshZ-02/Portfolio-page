import React from "react";
import Navbar from "./Navbar";
import prof2 from "/prof2.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import TextType from "./TextType";

const Hero = () => {
  return (
    <div className="relative  overflow-hidden  min-h-[550px]  sm:min-h-[600px]  flex  flex-col  items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute  from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="hero"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-24 md:pt-32 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left- mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute z-10 w-60 bg-[#cd3cf5] rounded-full  blur-3xl  opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {" "}
              Siddhesh Zujam
            </h1>
            <h1 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec]">
              <TextType
                text={["Front-End developer", "App Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#c744ec"]}
              />
            </h1>
          </header>
          <p className="text-xl sm:text-4xl md:text-lg text-gray-200  mb-6">
            I’m a dedicated Front-End Developer with a strong interest in
            creating clean, responsive, and interactive user interfaces.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <img
                src={linkedin}
                alt="Linkedin"
                className="w-11 h-11"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>

            <a href="https://github.com/SiddheshZ-02">
              <img
                src={github}
                alt="github"
                className="w-11 h-11"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>

          <a href="">
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7) rounded-full text-sm">
              Downlod CV{" "}
            </button>
          </a>
        </section>

        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={prof2}
            alt="Hero Image"
            className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
};

export default Hero;
