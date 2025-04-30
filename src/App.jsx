import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/Navbar/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dashing from "./components/Dashing/Dashing";
import Caroussel from "./components/Caroussel.jsx/Caroussel";
import Voiture from "./components/voiture/Voiture";

const App = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection />
      <Contact />
      <Dashing />
      <Caroussel />

      {/* Bouton pour scroller vers le footer */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToFooter}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↓ 
        </button>
      </div>

      {/* Footer avec la ref pour scroll */}
      <div ref={footerRef}>
        <Voiture/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
