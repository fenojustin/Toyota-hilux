import React from 'react'
import DarkMode from './DarkMode'

const Menu = [

    {
        id: 1,
        name: 'Contact us',
        link: '#',
    },
    {
        id: 2,
        name: 'Our Service',
        link: '#service',
    },
    {
        id: 3,
        name: 'Our carousel',
        link: '#carousel',
    },
    {
        id: 4,
        name: 'About us',
        link: '#footer',
    },
    {
        id: 5,
        name: 'Footer',
        link: '#footer',
    },
]
const Navbar = () => {
    return (
        <header className=' relative w-full shadow  text-white py-5 flex flex-between dark:bg-gray-900 dark:text-white duration-100'>
            {/* upper navbar */}
            <div className='fixed top-0 w-full py-4  container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl'>
                <div className='flex justify-between items-center'>
                    <div className=' text-white'>
                        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'> VENEGUO</a>

                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            {/*  <DarkMode /> */}
                        </div>
                        <ul className='flex gap-4 '>
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block  py-4 px-4 hover:text-yellow-600'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar