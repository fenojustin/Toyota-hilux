import React, { useEffect, useState } from 'react';
import { Fade, Zoom, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Img1 from '../../assets/images/hhh.png';
// import Img2 from '../../assets/images/Mask Group (1).png';
// import Img3 from '../../assets/images/image 2.png'; // ajoutez autant d'images que vous voulez
import Layout from '../Layout';

// Styles personnalisés pour le slideshow
const customSlideStyles = `
  .react-slideshow-container {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .react-slideshow-wrapper, .react-slideshow-fade-wrapper, .react-slideshow-fade-images-wrap {
    height: 100% !important;
  }
  
  .react-slideshow-container .nav {
    z-index: 10;
  }
  
  .react-slideshow-container .default-nav {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 0 10px;
  }
  
  .indicators {
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
    z-index: 10;
  }
  
  .indicator {
    cursor: pointer;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  
  .indicator.active {
    background: white;
  }
  
  .slide-container {
    display: block !important;
    position: relative !important;
    overflow: hidden !important;
    height: 100%;
  }
  
  .each-slide {
    height: 100% !important;
  }
  
  .each-slide > div {
    height: 100% !important;
  }
`;

const Schema = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Configuration pour le slideshow
  const fadeProperties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    indicators: (i) => {
      return (
        <div
          className={`indicator ${currentIndex === i ? 'active' : ''}`}
        />
      );
    },
    onChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
    arrows: true,
    pauseOnHover: true
  };

  // Ajuster la hauteur du slideshow selon la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      // Calculer la hauteur disponible
      const navbarHeight = 80; // Ajustez selon votre navigation
      const availableHeight = window.innerHeight - navbarHeight;
      setWindowHeight(availableHeight);
    };

    // Initialiser et mettre en place les écouteurs
    handleResize();
    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [Img1]; // Ajoutez d'autres images à ce tableau quand nécessaire

  return (
    <Layout>
      {/* Injecter les styles CSS personnalisés */}
      <style dangerouslySetInnerHTML={{ __html: customSlideStyles }} />

      <div className="w-full bg-black">
        <div
          className="slide-container w-full"
          style={{ height: `${windowHeight}px` }}
        >
          <Fade {...fadeProperties}>
            {images.map((img, index) => (
              <div key={index} className="each-slide">
                <div className="w-full h-full">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Fade>

          {/* Indicateurs personnalisés */}
          <div className="indicators">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`indicator ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schema;