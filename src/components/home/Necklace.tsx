import React, { useState } from 'react';
import image1 from "../../assets/ProductImg-1.png";
import image2 from "../../assets/ProductImg-2.png";
import image3 from "../../assets/ProductImg-3.png";
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';

const Necklace: React.FC = () => {
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
        {
          id: 4,
          name: "Mango Necklace",
          price: 201.00,
          originalPrice: 251.00,
          image: image2
        },
        {
          id: 5,
          name: "Mango Necklace with Studs",
          price: 201.00,
          originalPrice: 251.00,
          image: image1
        },
    ];
    
    // State to manage current slide and quantities
    const [currentSlide, setCurrentSlide] = useState(0);
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

    // Navigation handlers
    const handlePrevClick = () => {
        setCurrentSlide((prev) => 
            prev === 0 ? products.length - 3 : prev - 1
        );
    };

    const handleNextClick = () => {
        setCurrentSlide((prev) => 
            prev === products.length - 3 ? 0 : prev + 1
        );
    };
    
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 pb-12">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
                <div>
                    <h2 className="text-3xl md:text-[48px] font-serif font-normal" style={{ letterSpacing: '-2px' }}>
                        Necklace
                    </h2>
                </div>
                <div className='space-x-4'>
                    <button 
                        onClick={handlePrevClick}
                        className="relative overflow-hidden border border-gray-800 rounded-full px-4 py-4 text-sm font-medium text-gray-800 group transition"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            <FaChevronLeft />
                        </span>
                        <span className="absolute inset-0 bg-gray-800 w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
                    </button>
                    <button 
                        onClick={handleNextClick}
                        className="relative overflow-hidden border border-gray-800 rounded-full px-4 py-4 text-sm font-medium text-gray-800 group transition"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            <FaChevronRight />
                        </span>
                        <span className="absolute inset-0 bg-gray-800 w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
                    </button>
                </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 relative overflow-hidden">
                {products.slice(currentSlide, currentSlide + 3).map((product, index) => (
                    <div 
                        key={product.id} 
                        className="flex flex-col transition-transform duration-500 ease-in-out group"
                    >
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
                                    <span className="text-gray-500 line-through text-sm sm:text-base">
                                        AED {product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="font-medium text-sm sm:text-base">
                                        AED {product.price.toFixed(2)}
                                    </span>
                                </div>
                                
                                {/* Quantity Selector */}
                                <div className="flex items-center justify-between gap-3 sm:gap-6 border-[0.5px] border-[#000000]/50 rounded-[90px] px-3 sm:px-5 py-1 sm:py-2 text-xs text-black bg-white hover:bg-gray-100">
                                    <button 
                                        onClick={() => decreaseQuantity(index)}
                                        className="text-black"
                                    >
                                        <FaMinus size={8} />
                                    </button>
                                    
                                    <span>{quantities[index]}</span>
                                    
                                    <button 
                                        onClick={() => increaseQuantity(index)}
                                        className="text-black"
                                    >
                                        <FaPlus size={8} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Necklace