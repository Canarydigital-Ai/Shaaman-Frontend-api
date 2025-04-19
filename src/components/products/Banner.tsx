import React from "react";
import banner from "../../assets/Product-Banner-Image.png";

const Banner: React.FC = () => {
  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full bg-gray-200 flex items-center">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute left-4 md:left-10 lg:left-36 top-1/2 w-[90%] sm:w-[80%] md:w-[600px] transform -translate-y-1/2">
          <h1 className="text-[24px] sm:text-[32px] md:text-[48px] text-[#373A24] leading-none">
            <span className="block anton-regular ml-1 sm:ml-2">
              Beauty in Every
            </span>
            <span
              className="block text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] anton-regular"
              style={{ letterSpacing: "4px" }}
            >
              Sparkle
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
