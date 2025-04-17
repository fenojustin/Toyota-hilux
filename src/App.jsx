import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/Navbar/HeroSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
    </div>
  )
}

export default App
