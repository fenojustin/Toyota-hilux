import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/Navbar/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dashing from "./components/Dashing/Dashing";
import Caroussel from "./components/Caroussel.jsx/Caroussel";
import Voiture from "./components/voiture/Voiture";
import Explore from "./components/Explore/Explore";
import Schema from "./components/Schema/Schema";
import Live from "./components/Live/Live";


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



  return (
    <div>
      <HeroSection />
      <Contact />
      <Dashing />
      <Caroussel />

      {/* Bouton pour scroller vers le footer */}
      

      {/* Footer avec la ref pour scroll */}
      <div ref={footerRef}>
        <Explore/>
        <Schema />
        <Live/>
        <Voiture/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
