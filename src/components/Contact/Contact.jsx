import React from 'react';
import carImage from '../../assets/images/MaskGroup.png';
import Layout from '../Layout';

const Contact = () => {
    return (
       <Layout>
        
            <div
                data-aos="zoom-in"
                className="container py-16 max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10"
                id="#"
            >
                {/* Texte à gauche */}
                <div className="flex flex-col  justify-center space-y-6 ">
                    <div>
                        <h1 className="text-xl text-amber-500 uppercase font-bold">
                            High-quality all-terrain
                        </h1>
                        <h1 className="text-xl text-amber-500 uppercase font-bold">
                            vehicles with an emphasis
                        </h1>
                        <h1 className="text-xl text-amber-500 uppercase font-bold">
                            on performance
                        </h1>
                    </div>
                    <div className="w-full -ml-0 lg:-ml-28">
                        <img
                            src={carImage}
                            alt="Voiture"
                            className="w-full max-w-[600px] "
                        />
                    </div>
                </div>

                {/* Texte à droite */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <h3 className="text-white text-lg leading-relaxed">
                            We provide cars for any obstacle you want to face, from arid
                            deserts to icy mountains. We are ready to prepare the best for you.
                        </h3>
                    </div>
                    <div className='py-[125px]'>
                        <h1 className="text-2xl text-amber-600 uppercase font-bold">
                            With the right vehicle you
                        </h1>
                        <h1 className="text-2xl text-amber-600 uppercase font-bold">
                            can explore and achieve your
                        </h1>
                        <h1 className="text-2xl text-amber-600 uppercase font-bold">
                            freedom where you want
                        </h1>
                        <h3 className="text-white mt-2 ">
                            We provide offroad car to rent. If you want to explore the world,
                            get lost in nature, ride deep into the desert or just want to drive
                            like a maniac — then our offer is for you.
                        </h3>
                        <a href="#contact" className="text-amber-500 underline mt-2 inline-block">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;