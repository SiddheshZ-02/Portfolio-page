import React from "react";
import prof2 from '/prof2.png'


const about = () => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="man-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center  gap-4  relative"
        >
          <div className="h-[200px] sm:h-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]  bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>

          <img
            src={prof2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg "
          />
        </figure>

        <article
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {" "}
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
           I have knowledge about HTML, CSS, JavaScript, and React.js to build websites that look great and work smoothly on all devices, transforming complex UI/UX designs into clean, maintainable, and scalable front-end code.Continuously learning and staying up-to-date with modern web technologies, I aim to deliver impactful solutions that drive user engagement and business value.


          </p>

         
        </article>
      </div>
    </section>
  );
};

export default about;
