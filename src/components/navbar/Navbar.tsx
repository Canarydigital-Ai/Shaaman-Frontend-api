import React from "react";
import ShaamanLogo from "../../assets/Shaaman Logo.png";

import { IoSearch } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center py-7 px-4 md:px-8 lg:px-20 bg-[#e4a03b3b] backdrop-blur-[22.8px] w-full z-50"
      style={{
        backgroundColor: "rgba(248, 246, 243, 0.23)", 
      }}
    > 
      <div className="flex items-center space-x-16 list-none">
        <li
          className="font-semibold uppercase text-lg"
          style={{
            background:
              "linear-gradient(144.67deg, #EBAD1B -4.27%, #E9CE65 48.7%, #AA6D05 104.93%)",
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
      </div>

      <div className="text-2xl font-light tracking-wider text-gray-800">
        <img src={ShaamanLogo} alt="" />
      </div>

      <div className="flex items-center space-x-10">
        <button className="">
          <IoSearch size={24} />
        </button>
        <button className="">
          <LuHeart size={24} />
        </button>
        <button className="">
          <CgProfile size={24} />
        </button>
        <button className="">
          <BsHandbag size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
