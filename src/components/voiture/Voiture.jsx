import React from 'react';

const Voiture =()=> {
    return (
        <div className="flex flex-col w-full min-h-screen bg-black text-white">
            {/* Main content */}
            <div className="flex flex-col flex-1 px-4 py-6 md:px-16 md:py-12">
                {/* Decorative lines at top */}
                <div className="flex mb-8 space-x-4">
                    <div className="w-16 h-16 border-l-2 border-t-2 border-gray-700"></div>
                    <div className="w-16 h-16 border-l-2 border-t-2 border-orange-500"></div>
                    <div className="w-16 h-16 border-l-2 border-t-2 border-orange-500"></div>
                </div>

                {/* Image grid */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    {/* Left image with car */}
                    <div className="relative border-2 border-orange-500 flex-1">
                        <img
                            src="/api/placeholder/800/500"
                            alt="Off-road vehicle in mountain forest"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right image with lake */}
                    <div className="relative flex-1">
                        <img
                            src="/api/placeholder/800/500"
                            alt="Mountain lake with snow-capped peaks"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left decorative element */}
                    <div className="w-32 h-16 border-l-2 border-b-2 border-orange-500"></div>

                    {/* Explore button */}
                    <div className="mt-8 md:mt-0">
                        <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 font-medium tracking-wider uppercase hover:bg-orange-500 hover:text-black transition-colors duration-300">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Voiture;