import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import image1 from "../../assets/ProductImg-1.png";
import image2 from "../../assets/ProductImg-2.png";
import image3 from "../../assets/ProductImg-3.png";
import { useNavigate } from "react-router-dom";

const ProductList: React.FC = () => {
  const navigate = useNavigate()
  const [cartCount, setCartCount] = useState(0);
  const products = [
    {
      id: 1,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 201.00",
      image: image1,
    },
    {
      id: 2,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 201.00",
      image: image2,
    },
    {
      id: 3,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 201.00",
      image: image3,
    },
    {
      id: 4,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 202.00",
      image: image1,
    },
    {
      id: 5,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 201.00",
      image: image2,
    },
    {
      id: 6,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 202.00",
      image: image3,
    },
    {
      id: 7,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 202.00",
      image: image1,
    },
    {
      id: 8,
      title: "Manga Necklace / Manga Maala with Studs",
      price: "AED 202.00",
      image: image2,
    },
  ];
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-20 py-8 sm:py-16 lg:py-28">
        <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-normal text-black mb-1 nanum-myeongjo-regular tracking-tight lg:tracking-[-4px]">
          New arrivals
        </h2>
        <p className="text-black mb-4 sm:mb-6 text-base sm:text-xl lg:text-[24px] font-light">
          Discover the Sparkle with New Arrivals
        </p>

        {/* Product Grid - Unchanged on large devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-14 lg:space-y-12">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden transition-transform duration-500 ease-in-out group">
              <div className="relative aspect-square overflow-hidden ">
                <div className="bg-gray-200 mb-2 cursor-pointer "   onClick={()=>navigate('/product-details')}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-auto sm:h-auto lg:h-auto w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="pt-1 pb-6 lg:pt-6">
                <h3 className="text-base sm:text-lg lg:text-[22px] text-black font-normal cursor-pointer" onClick={()=>navigate('/product-details')}>
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-2 sm:mr-4 lg:mr-8">
                  <span className="flex text-sm sm:text-base lg:text-lg text-black space-x-2 sm:space-x-3">
                    <span className="line-through">{product.price}</span>
                    <span>{product.price}</span>
                  </span>

                  {/* Cart button - unchanged on large screens */}
                  <button className="bg-white flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 border-[0.5px] border-black rounded-[90px] px-3 sm:px-4 lg:px-4 py-1 sm:py-2 text-xs hover:bg-gray-100">
                    <FaMinus
                      className="text-[9px] lg:text-[9px]"
                      onClick={() =>
                        cartCount > 0 ? setCartCount(cartCount - 1) : null
                      }
                    />
                    {cartCount}
                    <FaPlus
                      className="text-[9px] lg:text-[9px]"
                      onClick={() => setCartCount(cartCount + 1)}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
