import React, { useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import ProductDetailImg2 from "../../assets/ProductDetailSub Img1.png";

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const ShoppingCartSection: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Mango Necklace / Manga Maala with Studs",
      image: ProductDetailImg2,
      quantity: 1,
      price: 201.0,
    },
    {
      id: 2,
      name: "Mango Necklace / Manga Maala with Studs",
      image: ProductDetailImg2,
      quantity: 1,
      price: 201.0,
    },
    {
      id: 3,
      name: "Mango Necklace / Manga Maala with Studs",
      image: ProductDetailImg2,
      quantity: 1,
      price: 201.0,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="border-2 border-[#969393] rounded-[30px] w-full px-2 sm:px-4"> 
      <div className="grid grid-cols-12 px-4 md:px-10 pt-8 pb-6 text-lg md:text-2xl font-light"> 
        <div className="col-span-5">Products</div> 
        <div className="col-span-3 hidden md:block">Quantity</div>
        <div className="col-span-3 hidden md:block">Total</div>
        <div className="col-span-1 hidden md:block">Action</div>
      </div>

      {/* Cart Items List */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-12 items-center px-2 sm:px-6 py-4 md:py-10 border-t-2 border-t-[#969393]"
        > 
          <div className="col-span-12 md:col-span-5 flex items-center space-x-4 mb-4 md:mb-0"> 
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 md:w-auto md:h-auto object-cover rounded-lg"
            />

            {/* Product Details Container */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
              {/* Product Name */}
              <span className="text-base font-normal w-full md:w-[145px]">
                {item.name}
              </span>

              {/* Mobile-only Price and Quantity Controls */}
              <div className="flex items-center justify-between gap-5 w-full md:w-auto">
                {/* Mobile Price - Hidden on desktop */}
                <div className="md:hidden text-xl font-normal">
                  AED {(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Hidden on desktop */}
                <div className="md:hidden flex justify-between items-center w-fit space-x-2 bg-white border rounded-full">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-gray-800 w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden on mobile */}
          <div className="hidden md:flex col-span-3 justify-center items-center w-fit space-x-2 bg-white border rounded-full">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center"
            >
              -
            </button>
            <span className="text-gray-800 w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center"
            >
              +
            </button>
          </div>

          {/* Desktop Price - Hidden on mobile */}
          <div className="hidden md:block col-span-3 text-xl font-normal">
            AED {(item.price * item.quantity).toFixed(2)}
          </div>
 
          <div className="col-span-12 md:col-span-1 text-center mt-4 md:mt-0">
            <button
              onClick={() => removeItem(item.id)}
              className="hover:text-red-600 transition-colors w-full md:w-auto"
            >
              <BiSolidTrashAlt size={20} className="mx-auto" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartSection;
