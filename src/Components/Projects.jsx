import Tesla_clone from "/Tesla_clone.png";
import notepadimg from "/notepadimg.png";
import EMSimg from "/EMSimg.png";
import weatherimg from "/weatherimg.png";
import Zengym from "/Zengym.jpg";
import Zengymqr from "/Zengymqr.png";
import HRMS from "/HRMS.jpg";
import HRMSqr from "/HRMSqr.png";
import { useState } from "react";
import QRCode from "react-qr-code";

const ProjectCard = ({ image, title, description, link, id, onShowQR, qrValue }) => {
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
              {id === 5 || id === 6 ? (
                <span onClick={e => {e.preventDefault(); onShowQR(link);}}>Show QR Code</span>
              ) : "Live Preview"}
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

// {
//   showQR && (
//     <div style={{ textAlign: "center" }}>
//       <QRCode value={buildLink} size={200} />/
//     </div>
//   );
// }

const buildLink =
  "https://docs.google.com/uc?export=download&id=1IrkUw8LpP5AEJMEVJT4TSR7PLgPXoPzp";

const Projects = () => {
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQRValue] = useState("");

  const listProjects = [
    {
      id: 1,
      image: EMSimg,
      title: "Employee-Management-System",
      description:
        " The Admin Information App is a simple yet functional web application designed to retrieve and display admin details using a unique user ID.the app allows users to enter an ID (01 to 30) and instantly fetch corresponding admin information such as name, age, gender, and email it can be already store in jsonData. ",

      link: "https://siddheshz-02.github.io/Employee-Management-System-EMS/",
    },
    {
      id: 2,
      image: notepadimg,
      title: "Task & Notepad",
      description:
        " The Registration Form is a user input interface designed to collect essential user details for account creation. It is built with a focus on simplicity, usability, and validation to ensure accurate and secure data collection.",
      link: " https://siddheshz-02.github.io/Task-Notepad/",
    },
    {
      id: 3,
      image: Tesla_clone,
      title: "Cars WebPage",
      description:
        " The Tesla Car Page Clone with Custom Design is a static web project that replicates and reimagines the Tesla landing page using pure HTML and CSS with own design ideas.",
      link: " https://siddheshz-02.github.io/Tesla-Car-Page----Clone/",
    },
    {
      id: 4,
      image: weatherimg,
      title: "Weather App",
      description:
        " The Weather App is a dynamic web application that allows users to check real-time weather conditions for their current location or any selected country. It can build Reactjs (or a weather API), the app provides a clean, responsive interface with live weather data fetched from external sources.",
      link: "https://siddheshz-02.github.io/Weather-App/",
    },
    {
      id: 5,
      image: Zengym,
      title: "ZENGYM Mobile-App",
      description:
        " The Weather App is a dynamic web application that allows users to check real-time weather conditions for their current location or any selected country. It can build Reactjs (or a weather API), the app provides a clean, responsive interface with live weather data fetched from external sources.",
      link: "https://docs.google.com/uc?export=download&id=1DBjRAy17s04ll0rDODUh-g9fO9O5nAsR",
    },
    {
      id: 6,
      image: HRMS,
      title: " Human Resource Management System Mobile-App",

      description:
        " The Weather App is a dynamic web application that allows users to check real-time weather conditions for their current location or any selected country. It can build Reactjs (or a weather API), the app provides a clean, responsive interface with live weather data fetched from external sources.",
      link: "https://docs.google.com/uc?export=download&id=1IrkUw8LpP5AEJMEVJT4TSR7PLgPXoPzp",
    },
  ];
  return (
    <main id="projects" className="p-4">
      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/10 backdrop-blur-sm bg-opacity-60">
          <div className="bg-white rounded-lg p-6 shadow-lg relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setShowQR(false)}
            >
              &times;
            </button>
            <QRCode value={qrValue} size={200} />
            <p className="mt-4 text-black">Scan to open</p>
          </div>
        </div>
      )}
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
            key={Projects.id}
            image={Projects.image}
            title={Projects.title}
            // description={Projects.description}
            link={Projects.link}
            id={Projects.id}
        onShowQR={(value) => { setQRValue(value); setShowQR(true); }}
        qrValue={Projects.id === 5 ? Zengymqr : Projects.id === 6 ? HRMSqr : Projects.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
