import React from "react";
import image from "../../assets/Order-Img1.png"
import { IoCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
     const navigate = useNavigate()
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F2E9] p-6 sm:p-10 md:p-16 lg:p-28">
  <div className="w-full max-w-5xl flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-9">
    {/* Success Icon and Header */}
    <div className="flex flex-col items-center mb-2 leading-tight">
      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-full border-2 sm:border-3 lg:border-[4px] border-[#009600] text-[#009600] flex justify-center items-center">
        <IoCheckmark className="text-2xl sm:text-3xl lg:text-[40px]" />
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-center mt-4 sm:mt-5 lg:mt-6 nanum-myeongjo-regular" 
          style={{ letterSpacing: "-1px", lineHeight: "1.2" }}>
        Thank you
      </h1>
      <p className="text-black text-2xl sm:text-3xl lg:text-[32px] nanum-myeongjo-regular" 
         style={{ letterSpacing: "-1px", lineHeight: "1.2" }}>
        Your order has been received
      </p>
    </div>

    {/* Order Details Card */}
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-[21px] w-full mt-4 sm:mt-5 lg:mt-6 px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-8 lg:py-10 space-y-4 sm:space-y-5 lg:space-y-6">
      <div className="space-y-2">
        <h2 className="font-light text-lg sm:text-xl lg:text-[24px] mb-3 sm:mb-4">Order details</h2>

        <div className="flex justify-between">
          <span className="text-base sm:text-lg lg:text-[20px] font-light">Date:</span>
          <span className="text-base sm:text-lg lg:text-[20px] font-light">April 10, 2025</span>
        </div>

        <div className="flex justify-between">
          <span className="text-base sm:text-lg lg:text-[20px] font-light">Payment method:</span>
          <span className="text-base sm:text-lg lg:text-[20px] font-light">Credit card</span>
        </div>

        <hr className="my-3 sm:my-4 lg:my-10 border-t lg:border-t-3 border-[#969393]" />

        <div className="flex justify-between">
          <span className="text-base sm:text-lg lg:text-[20px] font-light">Sub Total</span>
          <span className="text-base sm:text-lg lg:text-[20px] font-light">603 AED</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#969393] text-base sm:text-lg lg:text-[20px] font-light">Discount</span>
          <span className="text-[#969393] text-base sm:text-lg lg:text-[20px] font-light">-100 AED</span>
        </div>

        <div className="flex justify-between">
          <span className="text-base sm:text-lg lg:text-[20px] font-light">Delivery fee</span>
          <span className="text-base sm:text-lg lg:text-[20px] font-light">50 AED</span>
        </div>

        <div className="flex justify-between font-light text-lg sm:text-xl lg:text-[24px] mt-4 sm:mt-5 lg:mt-6">
          <span>Total</span>
          <span>553 AED</span>
        </div>
      </div>
    </div>

    {/* Products Card */}
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-[21px] w-full px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-8 lg:py-10">
      <h2 className="font-light text-lg sm:text-xl lg:text-[24px] mb-3 sm:mb-4">Products</h2>

      {products.map((product, index) => (
        <div
          key={product.id}
          className={`flex items-center justify-between py-3 sm:py-4 lg:py-4 ${
            index > 0 ? "border-t border-gray-100" : ""
          }`}
        >
          <div className="flex space-x-2 sm:space-x-3">
            <div className="w-16 h-14 sm:w-20 sm:h-18 lg:w-[98px] lg:h-[90px] rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base font-normal">{product.name} / </span>
              <span className="text-sm sm:text-base font-normal">
                {product.description}
              </span>
            </div>
          </div>
          <span className="font-normal text-base sm:text-lg lg:text-xl">{product.price}</span>
        </div>
      ))}
    </div>

    {/* Action Buttons */}
    <div  className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 sm:mt-5 lg:mt-2">
      <button onClick={()=>navigate('/home')} className="bg-black text-white py-3 sm:py-4 lg:py-6 px-4 rounded-lg sm:rounded-xl lg:rounded-[20px] text-base sm:text-lg lg:text-[24px] font-light">
        Continue shopping
      </button>
      <button onClick={()=>navigate('/home')}  className="bg-white border border-gray-300 text-gray-800 py-3 sm:py-4 lg:py-6 px-4 rounded-lg sm:rounded-xl lg:rounded-[20px] text-base sm:text-lg lg:text-[24px] font-light mt-2 sm:mt-0">
        Back to home
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default PaymentSuccess;
