import React from 'react'

const Live = () => {
    return (
        <div className="bg-black w-full py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-8">
                <div className="flex flex-col justify-center mb-2 lg:mb-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-400 uppercase leading-tight">
                        live the way you dream,
                        <br /> explore as much as you
                        <br /> want
                    </h1>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                        With vehicle recommendations and also a choice of tourist destinations, you only have to prepare mentally and yourself because you have the convenience to live your dream now
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Live