import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Img1 from '../../assets/images/hhh.png';
/* import Img2 from '../../assets/images/Mask Group (1).png';
import Img3 from '../../assets/images/image 2.png'; */ // ajoute autant d'images que tu veux
import Layout from '../Layout';

// Ajout CSS personnalisé pour éliminer les espaces indésirables
const customSliderStyles = `
  .slick-slider, .slick-list, .slick-track {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .slick-slide {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  
  .slick-slide > div {
    height: 100% !important;
  }
  
  .slick-dots {
    bottom: 15px !important;
    z-index: 10;
  }
  
  .carousel-container {
    display: block !important;
    position: relative !important;
    overflow: hidden !important;
  }
`;

const Schema = () => {
    const [windowHeight, setWindowHeight] = useState(0);

    // Configuration plus avancée pour le carrousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true, // Transition par fondu au lieu de défilement
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', // Animation fluide
        lazyLoad: 'progressive',
        pauseOnHover: true,
        adaptiveHeight: false, // Important: désactive l'adaptation automatique de hauteur
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false, // Cacher les flèches sur mobile
                    dots: true // Garder les points de navigation sur mobile
                }
            }
        ]
    };

    // Ajuster la hauteur du carrousel selon la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            // Calculer la hauteur disponible (peut être ajustée selon votre maquette)
            const navbarHeight = 80; // Ajustez selon votre navigation
            const availableHeight = window.innerHeight - navbarHeight;
            setWindowHeight(availableHeight);

            // Force la mise à jour des slides slick si nécessaire
            const slider = document.querySelector('.slick-slider');
            if (slider) {
                // Trigger resize event sur le slider pour forcer sa mise à jour
                window.dispatchEvent(new Event('resize'));
            }
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
            <style dangerouslySetInnerHTML={{ __html: customSliderStyles }} />

            <div className="w-full bg-black">
                <div
                    id="carousel-container"
                    className="carousel-container w-full"
                    style={{ height: `${windowHeight}px` }}
                >
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <div className="w-full h-full">
                                    <img
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Layout>
    );
};

export default Schema;