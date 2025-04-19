import React from 'react'
import ProductDetailSub from '../../assets/ProductDetailSub Img1.png'

const RightSection:React.FC = () => {
    const items = [
        {
          id: 1,
          name: "Mango Necklace / Mangiya Mala with Studs",
          price: 201.00,
          image: ProductDetailSub
        },
        {
          id: 2,
          name: "Mango Necklace / Mangiya Mala with Studs",
          price: 201.00,
          image: ProductDetailSub
        }
      ];
  return (
    <div className="w-full md:w-2/5 space-y-4">
      <h2 className="text-2xl font-medium mb-4">Your purchases</h2>
    <div className=" rounded-[30px] px-10 py-8 border-2 border-[#969393] bg-transparent">
      <div className="space-y-6">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex gap-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex flex-col w-1/2 justify-center">
                <p className="text-base">{item.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">AED {item.price.toFixed(2)}</p>
            </div>
              <button className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
          </div>
        ))}
      </div>
      <button className="text-md text-center w-full mt-4 text-gray-600">View more</button>
    </div>

    <div className="rounded-[30px] px-10 py-8 border-2 border-[#969393] bg-transparent">
      <h2 className="text-md font-medium mb-4">Order summary</h2>
      <div className="flex mb-4 gap-8">
        <input
          type="text"
          placeholder="Discount voucher"
          className="flex-grow  h-[68px] px-4 py-3 rounded-[20px] text-lg  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <button className="bg-white border border-stone-300 border-l-0 px-4 py-2 rounded-r-md text-sm">
          Apply
        </button>
      </div>
      <div className="space-y-3 border-b border-stone-200 pb-4">
        <div className="flex justify-between">
          <span className="text-sm">Sub Total</span>
          <span className="font-medium">603 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Discount</span>
          <span className="text-gray-500">-100 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Delivery fee</span>
          <span className="font-medium">50 AED</span>
        </div>
      </div>
      <div className="flex justify-between pt-4 mb-6">
        <span className="text-md">Total</span>
        <span className="font-medium">553 AED</span>
      </div>
      <button className="w-full bg-black text-white py-3 rounded-md font-medium">
        Checkout Now
      </button>
    </div>
  </div>
  )
}

export default RightSection
