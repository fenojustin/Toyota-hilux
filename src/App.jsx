import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/Navbar/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dashing from "./components/Dashing/Dashing";
import Caroussel from "./components/Caroussel.jsx/Caroussel";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div >
      <HeroSection />
      <Contact />
      <Footer />
      <Dashing />
      <Caroussel  />
    </div>
  )
}

export default App
