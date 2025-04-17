import React from 'react';
import Layout from '../Layout';
import Image1 from '../../assets/images/image 2.png'; // Remplace par le vrai nom
import Image2 from '../../assets/images/image3.png'; // Remplace par le vrai nom

const Dashing = () => {
    return (
        <Layout>
            <div id="service" className="bg-black text-white py-20 px-4 lg:px-24 space-y-32">

                {/* Première section : texte gauche / image droite */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Texte gauche */}
                    <div className="space-y-6">
                        <h2 className="text-2xl text-amber-500 font-bold uppercase">
                            Dashing, tough and reliable is their forte
                        </h2>
                        <p className="text-white text-lg leading-relaxed">
                            Driving a 4x4 car in the beautiful roads, offroad rental is an exciting experience and an opportunity to drive a 4x4 car in the beautiful roads of Turkey.
                        </p>
                        <a href="#contact" className="text-amber-500 underline">
                            Contact us
                        </a>
                    </div>
                    {/* Image droite */}
                    <div>
                        <img
                            src={Image1}
                            alt="4x4 véhicule"
                            className="w-full h-auto rounded-xl object-cover shadow-xl" data-aos="fade-left"
                        />
                    </div>
                </div>

                {/* Deuxième section : image gauche / texte droite */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Image gauche */}
                    <div>
                        <img
                            src={Image2}
                            alt="4x4 véhicule"
                            className="w-full h-auto rounded-xl object-cover shadow-xl" data-aos="fade-right"
                        />
                    </div>

                    {/* Texte droite */}
                    <div className="space-y-6">
                        <h2 className="text-2xl text-amber-500 font-bold uppercase">
                            Combine strength and courage on the terrain you will face
                        </h2>
                        <p className="text-white text-lg leading-relaxed">
                            We provide offroad car to rent for your trip. It can be useful in any circumstances you will have, from driving on the asphalt.
                        </p>
                        <button className="bg-amber-500 text-black font-semibold px-6 py-2 rounded hover:bg-amber-400 transition duration-300">
                            See Catalogue
                        </button>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Dashing;
