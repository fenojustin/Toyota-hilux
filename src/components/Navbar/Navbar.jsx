import React from 'react'
import DarkMode from './DarkMode'

const Navbar = () => {
    return (
        <div className='shadow  text-white py-5 flex flex-between dark:bg-gray-900 dark:text-white duration-100'>
            {/* upper navbar */}
            <div className='container '>
                <div className='flex justify-between items-center'>
                    <div className=' text-white'>
                        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'> VENEGUO</a>

                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <DarkMode />
                        </div>
                        <ul className='flex gap-4 '>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-yellow-700'>contact us </a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-yellow-700'> our service</a>
                            </li>
                            <li>
                                <a href="#" className='inline-block py-4 px-4 hover:text-yellow-700'>our product</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar