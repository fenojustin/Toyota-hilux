// HeroSection.jsx
import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <div
            className="bg-cover bg-center h-screen relative text-white"
            style={{
                backgroundImage: `url('/images/222.png')`,
            }}
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Navbar au-dessus */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        GET READY FOR AWESOME<br />ADVENTURE
                    </h1>
                    <p className="text-sm md:text-base mb-8">
                        WE ARE A COMPANY THAT MAKES HIGH-QUALITY ALL-TERRAIN VEHICLES WITH<br />
                        AN EMPHASIS ON PERFORMANCE.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300">
                        SEE CATALOGUE
                    </button>
                </div>
            </div>

            {/* Nom de voiture (ex. Toyota Hilux) */}
            <div className="absolute bottom-5 right-10 text-sm text-gray-300 uppercase tracking-wide z-10">
                Toyota Hilux
            </div>
        </div>
    )
}

export default HeroSection
