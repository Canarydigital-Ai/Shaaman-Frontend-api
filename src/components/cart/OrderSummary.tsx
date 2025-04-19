import React from "react";

const OrderSummary: React.FC = () => {
  return (
    <div className="rounded-[20px] md:rounded-[30px] px-4 md:px-6 lg:px-10 py-6 md:py-9 border-2 border-[#969393]">
      <h2 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">
        Order Summary
      </h2>

      {/* Discount Voucher Section */}
      <div className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row mb-4 md:mb-6 gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Discount voucher"
          className="flex-grow w-full sm:w-auto h-[50px] md:h-[68px] px-4 py-2 md:py-3 rounded-[15px] md:rounded-[20px] text-sm md:text-base border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <button className="h-[50px] md:h-[68px] border-2 border-[#969393] text-[#969393] hover:text-black bg-transparent px-6 sm:px-8 md:px-14 py-2 rounded-[15px] md:rounded-[20px] text-base md:text-lg whitespace-nowrap">
          Apply
        </button>
      </div>

      {/* Order Breakdown */}
      <div className="space-y-2 md:space-y-3 border-b border-[#969393] pb-4 md:pb-6">
        <div className="flex justify-between">
          <span className="text-base md:text-xl">Sub Total</span>
          <span className="font-medium">603 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base md:text-xl text-[#969393]">Discount</span>
          <span className="text-[#969393]">-100 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base md:text-xl">Delivery fee</span>
          <span className="font-medium">50 AED</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between pt-3 md:pt-4 mb-4 md:mb-6">
        <span className="text-xl md:text-2xl font-medium">Total</span>
        <span className="font-medium text-lg md:text-xl">553 AED</span>
      </div>

      {/* Checkout Button */}
      <button className="relative w-full overflow-hidden px-4 border border-white py-2 sm:py-3 md:py-4 rounded-[15px] md:rounded-[20px] bg-black group">
        <span className="relative z-10 transition-colors duration-700 group-hover:text-black text-white text-sm sm:text-base md:text-lg lg:text-xl">
          Checkout Now
        </span>
        <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out rounded-[15px] md:rounded-[20px] border-[0.5px] border-black/50"></span>
      </button>
    </div>
  );
};

export default OrderSummary;
