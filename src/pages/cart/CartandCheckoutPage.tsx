import React from "react";
import Footer from "../../components/footer/Footer";
import ShopingCartSection from "../../components/cart/ShopingCartSection";
import OrderSummary from "../../components/cart/OrderSummary";

const CartandCheckoutPage: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#F6F1E8,_#FFF9EF)] min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-16 lg:py-24 space-y-8 md:space-y-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] nanum-myeongjo-regular tracking-tight lg:tracking-[-4px]">
          Shopping cart
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-5 md:gap-6"> 
          <div className="w-full lg:w-2/3">
            <ShopingCartSection />
          </div>
           
          <div className="w-full lg:w-1/3">
            <OrderSummary />
          </div>
        </div>

        {/* Update Cart Button - Centered and responsive */}
        <div className="flex justify-start">
          <button className="relative w-[230px] overflow-hidden mt-4 sm:mt-0 px-4 border border-white sm:px-5 md:px-6 py-4 rounded-[15px] md:rounded-[20px] bg-black group">
            <span className="relative z-10 transition-colors duration-700 group-hover:text-black text-white text-lg lg:text-xl">
              Update cart
            </span>
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-[15px] md:rounded-[20px] border-[0.5px] border-black/50"></span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartandCheckoutPage;