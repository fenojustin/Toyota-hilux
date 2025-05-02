import React from 'react';


const Voiture =()=> {
    return (
        <div className="flex flex-col columns-2 w-full min-h-screen bg-black text-white">
            {/* Main content */}
            <div className="flex flex-col flex-1 px-4 py-6 md:px-16 md:py-12">
                {/* Decorative lines at top */}
              {/*   <div className="flex mb-8 space-x-4">
                    <div className="w-16 h-16 border-l-2 border-t-2 border-gray-700"></div>
                    <div className="w-16 h-16 border-l-2 border-t-2 border-orange-500"></div>
                    <div className="w-16 h-16 border-l-2 border-t-2 border-orange-500"></div>
                </div> */}

                {/* Image grid */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    {/* Left image with car */}
                    <div className="relative  flex-1">
                        <img
                            src="/images/2222.png"
                            
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right image with lake */}
                    <div className="relative flex-1">
                        <img
                            src="/images/111.png"
                         
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col justify-center md:flex-row items-center">
                    {/* Left decorative element */}
                 {/*    <div className="w-32 h-16 border-l-2 border-b-2 border-orange-500"></div> */}

                    {/* Explore button */}
                    <div className="mt-8 md:mt-2 ">
                        <button className="bg-transparent flex flex-col justify-center items-center border-2 border-orange-500 rounded-lg text-orange-500 px-8 py-3 font-medium tracking-wider uppercase hover:bg-orange-500 hover:text-black transition-colors duration-300">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Voiture;