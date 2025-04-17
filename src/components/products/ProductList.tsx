import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import image1 from "../../assets/ProductImg-1.png";
import image2 from "../../assets/ProductImg-2.png";
import image3 from "../../assets/ProductImg-3.png";

const ProductList: React.FC = () => {
    const [cartCount,setCartCount] = useState(0)
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
      <div className="px-20 py-28">
        <h2 className="text-[48px] font-normal text-black mb-1 nanum-myeongjo-regular">
          New arrivals
        </h2>
        <p className="text-black mb-6 text-[24px] font-light">
          Discover the Sparkle with New Arrivals
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 space-y-12">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden">
              <div className="relative pb-3/4">
                <div className="bg-gray-200 mb-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[588px] w-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-[22px] text-black font-normal">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-2 mr-8">
                  <span className="flex text-base text-black space-x-3">
                    <span className="line-through">{product.price}</span>
                    <span>{product.price}</span>
                  </span>

                  <button className="bg-white flex items-center justify-between gap-6 border-[0.5px] border-black rounded-[90px] px-4 py-2 text-xs text-black hover:bg-gray-100">
                    <FaMinus size={9} onClick={() => cartCount > 0 ? setCartCount(cartCount - 1) : null}/>
                    {cartCount}
                    <FaPlus size={9} onClick={()=>setCartCount(cartCount+1)}/>
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
