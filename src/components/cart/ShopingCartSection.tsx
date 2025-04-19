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
      <div className="border-2 border-[#969393] rounded-[30px] w-full px-4">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-10 pt-8 pb-6 text-2xl font-light">
          <div className="col-span-5">Product</div>
          <div className="col-span-3">Quantity</div>
          <div className="col-span-3">Total</div>
          <div className="col-span-1">Action</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 items-center px-6 py-10 border-t-2 border-t-[#969393]"
          >
            {/* Product Details */}
            <div className="col-span-5 flex items-center space-x-4 ">
              <img src={item.image} alt={item.name} className="" />
              <span className="text-base font-normal w-[145px]">
                {item.name}
              </span>
            </div>

            {/* Quantity Control */}
            <div className="col-span-3 w-fit flex items-center space-x-2 bg-white border rounded-full">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className=" w-8 h-8 flex items-center justify-center"
              >
                -
              </button>
              <span className="text-gray-800 w-8 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className=" w-8 h-8 flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="col-span-3 text-xl font-normal">
              AED {(item.price * item.quantity).toFixed(2)}
            </div>

            {/* Remove Item */}
            <div className="col-span-1 text-center">
              <button
                onClick={() => removeItem(item.id)}
                className="hover:text-red-600 transition-colors"
              >
                <BiSolidTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}
      </div> 
  );
};

export default ShoppingCartSection;
