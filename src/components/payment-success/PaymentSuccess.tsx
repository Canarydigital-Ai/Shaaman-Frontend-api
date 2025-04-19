import React from "react";
import image from "../../assets/Order-Img1.png"
import { IoCheckmark } from "react-icons/io5";

const PaymentSuccess: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Mango Necklace",
      description: "Maanga Maala with Studs",
      price: "AED 201.00",
      image: image,
    },
    {
      id: 2,
      name: "Mango Necklace",
      description: "Maanga Maala with Studs",
      price: "AED 201.00",
      image: image,
    },
    {
      id: 3,
      name: "Mango Necklace",
      description: "Maanga Maala with Studs",
      price: "AED 201.00",
      image: image,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F2E9] p-28">
        <div className="w-full max-w-5xl flex flex-col items-center space-y-10">
          {/* Success Icon and Header */}
          <div className="flex flex-col items-center mb-2 leading-tight">
            <div className="w-[68px] h-[68px] rounded-[34px] border-[4px] border-[#009600] text-[#009600] flex justify-center items-center">
              <span>
                <IoCheckmark size={40} />
              </span>
            </div>

            <h1
              className="text-[32px] text-center mt-6 nanum-myeongjo-regular"
              style={{ letterSpacing: "-2px", lineHeight: "38px" }}
            >
              Thank you
            </h1>
            <p
              className="text-black text-[32px] nanum-myeongjo-regular"
              style={{ letterSpacing: "-2px", lineHeight: "38px" }}
            >
              Your order has been received
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-[21px] shadow-sm w-full mt-6 px-20 py-10 space-y-6">
            <div className="space-y-2">
              <h2 className="font-light text-[24px] mb-4">Order details</h2>

              <div className="flex justify-between">
                <span className="text-[20px] font-light">Date:</span>
                <span className="text-[20px] font-light">April 10, 2025</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[20px] font-light">Payment method:</span>
                <span className="text-[20px] font-light">Credit card</span>
              </div>

              <hr className="my-4 border-t-3 border-[#969393] mt-10 mb-10" />

              <div className="flex justify-between space-y-2">
                <span className="text-[20px] font-light"style={{lineHeight: "14px"}}>Sub Total</span>
                <span className="text-[20px] font-light"style={{lineHeight: "14px"}}>603 AED</span>
              </div>

              <div className="flex justify-between space-y-2">
                <span className="text-[#969393] text-[20px] font-light" style={{lineHeight: "14px"}}>Discount</span>
                <span className="text-[#969393] text-[20px] font-light"style={{lineHeight: "14px"}}>-100 AED</span>
              </div>

              <div className="flex justify-between space-y-2">
                <span className="text-[20px] font-light"style={{lineHeight: "14px"}}>Delivery fee</span>
                <span className="text-[20px] font-light"style={{lineHeight: "14px"}}>50 AED</span>
              </div>

              <div className="flex justify-between font-light text-[24px] mt-6"style={{lineHeight: "30px"}}>
                <span>Total</span>
                <span>553 AED</span>
              </div>
            </div>
          </div>

          {/* Products Card - Moved to top */}
          <div className="bg-white rounded-[21px] shadow-sm w-full px-20 py-10">
            <h2 className="font-light text-[24px] mb-4">Products</h2>

            {/* Map through products array */}
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex items-center justify-between py-4 ${
                  index > 0 ? "border-t border-gray-100" : ""
                }`}
              >
                <div className="flex space-x-3">
                  <div className="w-[98px] h-[90px] rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-base font-normal">{product.name} / </span>
                    <span className="text-base font-normal">
                      {product.description}
                    </span>
                  </div>
                </div>
                <span className="font-normal text-xl">{product.price}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="w-full grid grid-cols-2 gap-3 mt-6">
            <button className="bg-black text-white py-6 px-4 rounded-[20px] text-[24px] font-light">
              Continue shopping
            </button>
            <button className="bg-white border border-gray-300 text-gray-800 py-6 px-4 rounded-[20px] text-[24px] font-light">
              Back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
