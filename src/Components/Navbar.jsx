import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "My Projects", link: "projects" },
    { id: 4, name: "Skills", link: "skills" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Using Lenis scroll instead of native scroll
      const lenis = window.lenis;
      if (lenis) {
        const offset = 80; // Adjust this value based on your navbar height
        lenis.scrollTo(element, {
          offset: -offset,
          immediate: false,
          lock: true,
          force: true
        });
      } else {
        // Fallback to native smooth scrolling if Lenis is not available
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // Update the URL hash so navigation is visible in the address bar
    try {
      const newHash = `${sectionId}`;
      // Use pushState so navigation creates history entries
      window.history.pushState(null, "", newHash);
    } catch (e) {
      // Fallback to setting location.hash
      window.location.hash = sectionId;
    }

    setIsOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white bg-transparent bg/opacity-90 backdrop-blur-sm  "
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5 h-12">
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-4xl font-bold italic text-white hover:text-purple-400 transition-colors duration-300"
        >
          {/* Portfolio */}
        </button>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.link)}
              className="text-lg text-white hover:text-purple-400 transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection("contact")}
            className="inline-flex text-white border-1 py-1 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-950/95 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        <button
          className="absolute top-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {NavbarLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.link)}
            className="text-md text-white hover:text-purple-400 transition-colors duration-300"
          >
            {link.name}
          </button>
        ))}

        <button 
          onClick={() => scrollToSection("contact")}
          className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-md transition-colors duration-300"
        >
          Contact
        </button>
      </div>
    </header>
  );
}