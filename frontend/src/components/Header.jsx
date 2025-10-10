import React, { useState } from 'react';
import Nav from "./Nav";
import { IoMenu } from "react-icons/io5";
import logo from "/navLogo.png";
// import navBg from "../assets/images/nav-bg.jpg";
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <header className='fixed top-0 left-0 w-full bg-[#f2f2f2] z-50'>
            <div className='mx-auto xl:mx-10 items-center p-3 md:p-3 flex iflex-wrap justify-between'>
                <div className="absolute top-18 md:top-20 left-0 w-full h-8 md:h-15 pointer-events-none z-10 bg-gradient-to-b  from-[#f2f2f2] via-[#f2f2f2]/80 to-transparent"></div>

                <a href="/" className="navbar-title">
                    <img src={logo} alt="Logo" className='h-[50px] md:h-[60px] w-auto' />
                </a>
                <nav className='hidden sm:flex'>
                    <Nav />
                </nav>
                <div className='sm:hidden relative'>
                    <button
                        onClick={toggleNav}
                        className={`p-2 rounded-md hover:bg-gray-200 transition-all duration-200
                        ${isNavOpen ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}`}
                    >
                        <IoMenu size={24} />
                    </button>

                    {/* Mobile Nav dropdown */}
                    <div
                        className={`absolute right-0 mt-2 w-40 z-30 bg-[#f2f2f2] shadow-lg rounded-md overflow-hidden transition-all duration-300 origin-top transform ${isNavOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                            }`}
                    >
                        <Nav />
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
