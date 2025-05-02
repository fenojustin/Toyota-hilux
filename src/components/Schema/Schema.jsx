import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Img1 from '../../assets/images/hhh.png';
/* import Img2 from '../../assets/images/Mask Group (1).png';
import Img3 from '../../assets/images/image 2.png'; */ // ajoute autant d'images que tu veux
import Layout from '../Layout';

const Schema = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <Layout>
            <div id='carousel' className="bg-black py-10">
            <div className="max-w-6xl mx-auto px-4">
                <Slider {...settings}>
                    {[Img1].map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={img}
                                alt={`Slide `}
                                className="w-full h-full "
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
        </Layout>
    );
};

export default Schema;
