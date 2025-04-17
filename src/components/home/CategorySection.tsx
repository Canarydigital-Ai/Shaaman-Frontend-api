import React from 'react';
import NecklaceImg from '../../assets/CategoryNecklace.png';
import BanglesImg from '../../assets/CategoryBangles.png';
import EarringsImg from '../../assets/CategoryEarrings.png';
import ChokersImg from '../../assets/CategoryChokers.png';
import HaaramsImg from '../../assets/CategoryHaarams.png';

const categories = [
  { 
    name: 'Necklace', 
    image: NecklaceImg 
  },
  { 
    name: 'Bangles', 
    image: BanglesImg 
  },
  { 
    name: 'Earrings', 
    image: EarringsImg 
  },
  { 
    name: 'Chokers', 
    image: ChokersImg 
  },
  { 
    name: 'Haarams', 
    image: HaaramsImg 
  }
];

const CategorySection: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24">
      <div className="mb-8 md:mb-9">
        <h2 className="text-3xl md:text-5xl nanum-myeongjo-regular  text-gray-800" style={{ letterSpacing: '-4px' }}>
          Find Your Jewelry
        </h2>
        <p className="text-base md:text-xl mt-2">
          Browse our collections and find your next statement piece
        </p>
      </div>

      <div className="grid grid-cols-3 max-w-4xl md:grid-cols-5 gap-4 md:gap-4 ">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="group cursor-pointer transition-transform duration-300 ease-in-out"
          >
            <div className="aspect-square overflow-hidden ">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-[194px] h-[203px] object-fill group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-center  text-sm md:text-base bg-transparent backdrop-blur-[22.8px] mt-[-20px] text-[#000000] group-hover:text-gray-900">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;