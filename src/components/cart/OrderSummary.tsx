import React, { useState } from "react";

const OrderSummary: React.FC = () => {
  const [voucher, setVoucher] = useState("");

  const orderDetails = {
    subTotal: 603,
    discount: 100,
    deliveryFee: 50,
    get total() {
      return this.subTotal - this.discount + this.deliveryFee;
    },
  };

  return (
    <div className="border-2 border-[#969393] rounded-[30px] w-[700px] px-4">
      <div className="py-8 px-4 space-y-8 border-b">
        <h2 className="text-2xl font-light">Order summary</h2>

        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Discount voucher"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
            className="w-[420px] h-[73px] border-2 border-[#969393] rounded-[20px] px-5 focus:outline-none text-base text-[ #969393]"
          />
          <button className="border-2 border-[#969393] rounded-[20px] w-[212px] h-[73px]">
            Apply
          </button>
        </div>

        <div className="space-y-4 px-6">
          <div className="flex justify-between text-2xl font-light">
            <p>Sub Total</p>
            <p>{orderDetails.subTotal} AED</p>
          </div>
          <div className="flex justify-between text-2xl font-light text-[#969393]">
            <p>Discount</p>
            <p>-{orderDetails.discount} AED</p>
          </div>
          <div className="flex justify-between text-2xl font-light ">
            <p>Delivery fee</p>
            <p>{orderDetails.deliveryFee} AED</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-2xl font-light ">
          <span>Total</span>
          <span>{orderDetails.total} AED</span>
        </div>
        <button className="w-full h-14 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
