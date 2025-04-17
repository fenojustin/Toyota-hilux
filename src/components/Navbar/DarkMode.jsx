import React from 'react'
import darking from '../../assets/images/260.png'
import light from '../../assets/images/2601.png'
const DarkMode = () => {
    return (
        <>
            <div className='relative'>
                <img src={darking} alt='' className='w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_px_rgba(0,0,0,0,.1)] transition-all duration-300' />
                <img src={light} alt='' className='w-12 absolute right-0 z-10 ' />

            </div>
        </>
    )
}

export default DarkMode