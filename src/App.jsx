import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Make lenis globally accessible
    window.lenis = lenis;

    // Scroll animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to section if URL contains a hash on initial load
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // match Navbar offset
          if (lenis) {
            lenis.scrollTo(element, { offset: -offset, immediate: false, lock: true, force: true });
          } else {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }
      }
    };

    // handle hashchange events (back/forward navigation)
    window.addEventListener('hashchange', scrollToHash);

    // call once on mount
    scrollToHash();

    // Cleanup function
    return () => {
      window.lenis = null;
      lenis.destroy();
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <>
      <main className="bg-gray-950">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;