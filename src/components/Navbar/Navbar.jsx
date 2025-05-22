import React, { useState } from 'react'

const Menu = [
    {
        id: 1,
        name: 'CONTACT US',
        link: '#',
    },
    {
        id: 2,
        name: 'OUR SERVICE',
        link: '#service',
    },
    {
        id: 3,
        name: 'OUR PRODUCT',
        link: '#carousel',
    },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='relative w-full shadow text-white py-5 flex flex-between dark:bg-gray-900 dark:text-white duration-100'>
            {/* upper navbar */}
            <div className='fixed top-0 w-full py-4  dark:bg-gray-900 z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl'>
                <div className='flex justify-between items-center'>
                    <div className='text-white'>
                        <div href="#" className='flex items-center  text-2xl sm:text-3xl font-semibold'>VENEGUO</div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='p-2 text-white focus:outline-none'
                        >
                            {isMenuOpen ? (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            ) : (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className='hidden md:flex items-center gap-4'>
                        <div>
                            {/*  <DarkMode /> */}
                        </div>
                        <ul className='flex gap-4'>
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block py-4 px-4 hover:text-yellow-600'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <div className='md:hidden mt-2 pb-2'>
                        <ul className='flex flex-col space-y-2'>
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a
                                        href={menu.link}
                                        className='block py-2 px-4 hover:text-yellow-600 hover:bg-gray-700 rounded'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar