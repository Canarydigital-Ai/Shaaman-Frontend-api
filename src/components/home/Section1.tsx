import React from "react";
import SectionSlider1 from '../../assets/SectionSlider1.png'
import SectionSlider2 from '../../assets/ShaamanSlider1.png'
import SectionSlider3 from '../../assets/ShaamanSlider5.png'
import SectionSlider4 from '../../assets/SectionSlider4.png'
import SectionSlider5 from '../../assets/SectionSlider5.png'

const Section1: React.FC = () => {
  const sliderImages = [
    SectionSlider1,
    SectionSlider2,
    SectionSlider3,
    SectionSlider4,
    SectionSlider5,
  ];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen  bg-[linear-gradient(to_bottom,_#F6F1E8,_#FFF9EF)]">
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <h1 className="nanum-myeongjo-regular text-4xl md:text-5xl lg:text-[80px] leading-[80px] mb-10">
          Where Every Jewel
          Whispers Royalty
        </h1>

        <p className="text-[#000000] mb-12 ml-2 text-base md:text-2xl leading-[30px] w-3/4">
          This one leans into a mystical, high-end vibe,
          perfect for a premium jewelry experience.
          <br />
          Want me to try a version that's more modern-chic,
          bold-luxury, or classic-romantic next?
        </p>

        <div>
          <button className="relative overflow-hidden border border-black px-6 py-2 group ml-2">
            <span className="relative z-10 nanum-myeongjo-bold  transition-colors duration-300 group-hover:text-white text-xl">Shop now</span>
            <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
          </button>
        </div>
      </div>

      {/* Right side - Auto-scrolling Image Container */}
      <div className="w-full md:w-1/2 overflow-hidden">
        <div className="flex auto-scroll-animation gap-4">
          {/* Original images followed by duplicates for seamless loop */}
          {[...sliderImages, ...sliderImages].map((image, index) => (
            <div key={index} className="w-[790px] flex-shrink-0">
              <img
                src={image}
                alt={`Jewelry showcase ${index % sliderImages.length + 1}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Section1;