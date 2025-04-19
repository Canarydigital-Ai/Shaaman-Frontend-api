import React, { useState } from 'react';
import image1 from "../../assets/ProductImg-1.png";
import image2 from "../../assets/ProductImg-2.png";
import image3 from "../../assets/ProductImg-3.png";
import { FaMinus, FaPlus } from 'react-icons/fa';

const NewArrivals: React.FC = () => {
  // Sample product data - you would typically fetch this from an API
  const products = [
    {
      id: 1,
      name: "Mango Necklace / Maanga Maala with Studs",
      price: 201.00,
      originalPrice: 251.00,
      image: image1
    },
    {
      id: 2,
      name: "Mango Necklace / Maanga Maala with Studs",
      price: 201.00,
      originalPrice: 251.00,
      image: image2
    },
    {
      id: 3,
      name: "Mango Necklace / Maanga Maala with Studs",
      price: 201.00,
      originalPrice: 251.00,
      image: image3
    },
  ];

  // State to manage quantity for each product
  const [quantities, setQuantities] = useState(products.map(() => 1));

  // Handlers for quantity changes
  const decreaseQuantity = (index: number) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantities[index] - 1;
      setQuantities(newQuantities);
    }
  };

  const increaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] + 1;
    setQuantities(newQuantities);
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-3xl md:text-[48px] nanum-myeongjo-regular tracking-[-4px]">
          New arrivals
        </h2>
        <button className="relative overflow-hidden border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 group transition">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            View Collection
          </span>
          <span className="absolute inset-0 bg-gray-800 w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
        </button>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
        {products.map((product, index) => (
          <div key={product.id} className="flex flex-col group cursor-pointer transition-transform duration-300 ease-in-out">
            {/* Product Image */}
            <div className="relative mb-4 aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg sm:text-xl font-medium">{product.name}</h3>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <span className="text-gray-500 line-through text-sm sm:text-base">AED {product.originalPrice.toFixed(2)}</span>
                  <span className="font-medium text-sm sm:text-base">AED {product.price.toFixed(2)}</span>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between gap-3 sm:gap-6 border-[0.5px] border-[#000000]/50 rounded-[90px] px-3 sm:px-5 py-1 sm:py-2 text-xs text-black bg-white hover:bg-gray-100">
                  <button 
                    onClick={() => decreaseQuantity(index)}
                    className="text-black"
                  >
                    <FaMinus size={8}  />
                  </button>
                  
                  <span>{quantities[index]}</span>
                  
                  <button 
                    onClick={() => increaseQuantity(index)}
                    className="text-black"
                  >
                    <FaPlus size={8}  />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;