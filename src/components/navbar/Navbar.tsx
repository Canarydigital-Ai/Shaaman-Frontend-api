import React, { useState } from "react";
import ShaamanLogo from "../../assets/Shaaman Logo.png";
import { FiMenu, FiX } from 'react-icons/fi';
import { IoSearch } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
    className="flex justify-between items-center py-4 md:py-7 px-4 md:px-8 lg:px-20 backdrop-blur-[22.8px] w-full z-50 relative top-0"
    style={{
      backgroundColor: "rgba(248, 246, 243, 0.23)",
    }}
  >
    {/* Mobile Menu Button - Only shows on small screens */}
    <button 
      className="md:hidden text-gray-800 z-50"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>

    {/* Desktop Navigation - Hidden on mobile */}
    <div className="hidden md:flex items-center space-x-8 lg:space-x-16 list-none">
      <li
        className="font-semibold uppercase text-base lg:text-lg"
        style={{
          background: "linear-gradient(144.67deg, #EBAD1B -4.27%, #E9CE65 48.7%, #AA6D05 104.93%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
        }}
      >
        SALE
      </li>
      <li className="text-base lg:text-lg font-normal hover:text-gray-600 transition-colors">Sarees</li>
      <li className="text-base lg:text-lg font-normal hover:text-gray-600 transition-colors">Jewelery</li>
    </div>

    {/* Logo - Centered on mobile */}
    <div className="text-xl md:text-2xl font-light tracking-wider text-gray-800 mx-auto md:mx-0">
      <img src={ShaamanLogo} alt="Shaaman" className="h-8 md:h-10" />
    </div>

    {/* Icons - Search hidden on mobile */}
    <div className=" flex items-center space-x-4 md:space-x-6 lg:space-x-10">
      <button className="hidden md:block">
        <IoSearch size={24} />
      </button>
      <button className="">
        <LuHeart size={24} />
      </button>
      <button className="">
        <CgProfile size={24} />
      </button>
      <button className="relative">
        <BsHandbag size={24} />
        <span className="absolute -top-2 -right-2 bg-[#EBAD1B] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          0
        </span>
      </button>
    </div>

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="md:hidden fixed inset-0 bg-[#F6F2EB] h-[160px] z-40 mt-16 p-6 ">
        <ul className="flex flex-col items-center space-y-4">
          <li
            className="font-semibold uppercase text-lg"
            style={{
              background: "linear-gradient(144.67deg, #EBAD1B -4.27%, #E9CE65 48.7%, #AA6D05 104.93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            SALE
          </li>
          <li className="text-lg font-normal">Sarees</li>
          <li className="text-lg font-normal">Jewelery</li> 
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Navbar;
