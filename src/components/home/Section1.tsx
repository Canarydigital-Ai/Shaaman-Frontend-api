import React from "react";
import SectionSlider1 from '../../assets/SectionSlider1.png'
import SectionSlider2 from '../../assets/ShaamanSlider1.png'
import SectionSlider3 from '../../assets/ShaamanSlider5.png'
import SectionSlider4 from '../../assets/SectionSlider4.png'
import SectionSlider5 from '../../assets/SectionSlider5.png'
import Navbar from "../navbar/Navbar";

const Section1: React.FC = () => {
  const sliderImages = [
    SectionSlider1,
    SectionSlider2,
    SectionSlider3,
    SectionSlider4,
    SectionSlider5,
  ];

  return (
    <div className="relative w-full min-h-screen bg-[linear-gradient(to_bottom,_#F6F1E8,_#FFF9EF)]">
      {/* Navbar - positioned at the top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
     
      {/* Main content container */}
      <div className="flex flex-col md:flex-row w-full min-h-screen pt-16 md:pt-0">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24">
          <h1 className="nanum-myeongjo-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-[80px] mb-6 sm:mb-8 md:mb-10">
            Where Every Jewel
            <br className="hidden sm:block" />
            Whispers Royalty
          </h1>

          <p className="text-[#000000] mb-8 sm:mb-10 md:mb-12 ml-0 sm:ml-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-[30px] w-full sm:w-5/6 md:w-3/4">
            This one leans into a mystical, high-end vibe,
            perfect for a premium jewelry experience.
            <br className="hidden sm:block" />
            Want me to try a version that's more modern-chic,
            bold-luxury, or classic-romantic next?
          </p>

          <div>
            <button className="relative overflow-hidden border border-black px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 group ml-0 sm:ml-2">
              <span className="relative z-10 nanum-myeongjo-bold transition-colors duration-300 group-hover:text-white text-base sm:text-lg md:text-xl">Shop now</span>
              <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
            </button>
          </div>
        </div>

        {/* Right side - Auto-scrolling Image Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
          {/* Key change: Consistent width classes per breakpoint */}
          <div className="flex auto-scroll-animation gap-2 sm:gap-3 md:gap-4">
            {[...sliderImages, ...sliderImages].map((image, index) => (
              <div key={index} className="w-screen sm:w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[790px] flex-shrink-0">
                <img
                  src={image}
                  alt={`Jewelry showcase ${index % sliderImages.length + 1}`}
                  className="w-full h-[50vh] md:h-screen object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;