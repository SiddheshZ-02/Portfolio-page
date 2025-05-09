import React from "react";
import Admin_Info_App from "/Admin_Info_App.png";
import Registration_form from "/Registration_form.png";
import Tesla_clone from "/Tesla_clone.png";
import Weather_App from "/Weather_App.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded-xl overflow-hidden shadow-lg group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="absolute z-0 w-40 sm:w-60 sm:h-60 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-50 -top-5 left-10 animate-pulse"></div>

      <div className="relative z-10">
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-gradient-to-r from-purple-800/80 to-blue-800/80 opacity-0
           group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"
          >
            <button className="bg-white font-medium text-black py-2 px-6 rounded-full shadow-lg hover:text-white hover:bg-[#2879d5] transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4 transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <header>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors duration-300">
              {title}
            </h3>
          </header>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const listProjects = [
    {
      image: Admin_Info_App,
      title: "Admin Info App",
      description:
        " The Admin Information App is a simple yet functional web application designed to retrieve and display admin details using a unique user ID.the app allows users to enter an ID (01 to 30) and instantly fetch corresponding admin information such as name, age, gender, and email it can be already store in jsonData. ",

      link: " https://siddheshz-02.github.io/Admin-Info-Page/",
    },
    {
      image: Registration_form,
      title: "Registration form",
      description:
        " The Registration Form is a user input interface designed to collect essential user details for account creation. It is built with a focus on simplicity, usability, and validation to ensure accurate and secure data collection.",
      link: " https://siddheshz-02.github.io/Registration-Page/",
    },
    {
      image: Tesla_clone,
      title: "Tesla-Car-Page----Clone",
      description:
        " The Tesla Car Page Clone with Custom Design is a static web project that replicates and reimagines the Tesla landing page using pure HTML and CSS with own design ideas.",
      link: " https://siddheshz-02.github.io/Tesla-Car-Page----Clone/",
    },
    {
      image: Weather_App,
      title: "Weather App",
      description:
        " The Weather App is a dynamic web application that allows users to check real-time weather conditions for their current location or any selected country. It can build Reactjs (or a weather API), the app provides a clean, responsive interface with live weather data fetched from external sources.",
      link: "https://siddheshz-02.github.io/Weather-App/",
    },
  ];
  return (
    <main id="projects" className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            --- My <span className="text-purple-400">Projects</span> ---
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque iste
            maiores quidem! */}
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((Projects, index) => (
          <ProjectCard
            key={index}
            image={Projects.image}
            title={Projects.title}
            description={Projects.description}
            link={Projects.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
