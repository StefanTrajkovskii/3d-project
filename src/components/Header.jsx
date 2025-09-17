import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-4  lg:px-20'> 
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
            SGOAT
        </h1>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-12'>
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">
                COMPANY
            </a>
            
            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">
                FEATURES
            </a>

            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">
                RESOURCES
            </a>

            <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href="#">
                DOCS
            </a>
        </nav>

        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
            SIGN IN
        </button>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button>
            
        </button>

    </header>
  )
}

export default Header