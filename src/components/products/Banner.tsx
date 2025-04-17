import React from 'react';
import banner from "../../assets/Product-Banner-Image.png"

const Banner:React.FC = () => {
  return (
    <>
      <div className="relative h-full bg-gray-200 flex items-center">
        <img 
          src={banner}
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute left-36 top-1/2 w-[600px] transform -translate-y-1/2">
  <h1 className="text-[48px] font-normal text-gray-800 leading-none">
    <span className="block">Beauty in Every</span>
    <span className="block text-[96px]">Sparkle</span>
  </h1>
</div>

      </div>
    </>
  )
}

export default Banner

