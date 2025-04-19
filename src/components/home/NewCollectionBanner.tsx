import React from 'react';
import SareeImage from '../../assets/NewCollection1.png'
import { useNavigate } from 'react-router-dom';

const NewCollectionBanner: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg- md:bg-center z-0" 
        style={{ backgroundImage: `url('${SareeImage}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center md:justify-end h-full px-4 md:px-20">
        {/* Text Content */}
        <div className="text-center text-white max-w-full md:max-w-4xl space-y-[0px] md:space-y-[-5px]">
          <p className="anton-regular text-2xl md:text-[64px] font-semibold uppercase">
            New Collection
          </p>
          
          <p 
            className="anton-regular text-5xl md:text-[128px] font-extrabold tracking-[4px] md:tracking-[11px]"
            
          >
            SAREES
          </p>
          
          <p className="nanum-myeongjo-italic text-3xl md:text-[96px] mt-[-15px] md:mt-[-50px] italic font-serif text-yellow-500">
            Love What you wear
          </p>
          
          {/* Shop Now Button */}
          <div className="flex justify-center md:block">
            <button  onClick={()=>navigate('/products')} className="relative mt-4 md:mt-6 px-4 md:px-6 py-2 border border-white text-white 
              overflow-hidden group">
              <span className="relative z-10 nanum-myeongjo-bold text-sm md:text-xl transition-colors duration-300 
                group-hover:text-black">
                Shop now
              </span>
              <span className="absolute inset-0 bg-white w-0 
                group-hover:w-full transition-all duration-500 ease-in-out 
                origin-left"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionBanner;