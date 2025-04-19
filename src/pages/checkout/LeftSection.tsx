import React from 'react'

const LeftSection:React.FC = () => {
  return (
    <div className="pr-12 md:w-3/5 space-y-8 ">
    <div>
      <h2 className="text-2xl  mb-4">Customer info</h2>
      <div className="space-y-6">
        <input
          type="text"
          placeholder="First Name"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
      </div>
    </div>

    <div>
      <h2 className="text-2xl mb-4">Shipping address</h2>
      <div className="space-y-6">
        <input
          type="text"
          placeholder="City"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <input
          type="text"
          placeholder="Street address"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <input
          type="text"
          placeholder="ZIP"
          className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
      </div>
    </div>

    <div>
      <h2 className="text-2xl mb-4">Payment</h2>
      <div className="border-t border-stone-200 pt-4">
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 border border-stone-300 rounded-full">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </div>
            <span>Credit card</span>
          </label>
          <label className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 border border-stone-300 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="flex items-center justify-center w-5 h-5 bg-white rounded-md">
              <span className="text-blue-600 font-bold text-sm">P</span>
            </span>
          </label>
          <label className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 border border-stone-300 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="flex items-center">
              <span className="text-black font-medium">
                <span className="text-sm">Pay</span>
              </span>
            </span>
          </label>
        </div>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Card number"
            className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
          />
          <input
            type="text"
            placeholder="Card holder name"
            className="w-full h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Expiry date(MM/YY)"
              className="w-1/2  h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2  h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftSection
