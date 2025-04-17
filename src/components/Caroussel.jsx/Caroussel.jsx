import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Img1 from '../../assets/images/Mask Group.png';
import Img2 from '../../assets/images/Mask Group (1).png';
import Img3 from '../../assets/images/2601.png'; // ajoute autant d'images que tu veux
import Layout from '../Layout';

const Caroussel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <Layout>
            <div id='carousel' className="bg-black py-10">
            <div className="max-w-6xl mx-auto px-4">
                <Slider {...settings}>
                    {[Img1, Img2, Img3].map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={img}
                                alt={`Slide ${idx + 1}`}
                                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
        </Layout>
    );
};

export default Caroussel;
