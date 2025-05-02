import React from 'react';
import carImage1 from '../../assets/images/Mask Group.png';
import carImage2 from '../../assets/images/image3.png';
import carImage3 from '../../assets/images/gallery.png';
import Layout from '../Layout';

const Section = () => {
    return (
        <Layout>
            <div className="relative overflow-hidden bg-black py-10">
                <div className="flex flex-row max-w-7xl mx-auto h-[500px]">
                    {/* Image 1 */}
                    <div className="w-1/3 flex-shrink-0">
                        <img
                            src={carImage1}
                            alt="Image 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="w-1/3 flex-shrink-0">
                        <img
                            src={carImage2}
                            alt="Image 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 3 (débordante) */}
                    <div className="w-1/3 flex-shrink-0 translate-x-1/4">
                        <img
                            src={carImage3}
                            alt="Image 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Section;
