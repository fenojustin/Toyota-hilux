// HeroSection.jsx
import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <div
            className="bg-cover bg-center h-screen relative text-white"
            style={{
                backgroundImage: `url('/images/jumbotron.png')`,
            }}
        >
            {/* Overlay sombre si besoin */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Contenu + navbar au-dessus de l'image */}
            <div className="relative z-10 h-full flex flex-col">
                <Navbar />

               
                   
                
            </div>
        </div>
    )
}

export default HeroSection
