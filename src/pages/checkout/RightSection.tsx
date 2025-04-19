import React from 'react'
import ProductDetailSub from '../../assets/ProductDetailSub Img1.png'

const RightSection:React.FC = () => {
    const [showAll, setShowAll] = React.useState(false);
  
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
      },
      {
        id: 3,
        name: "Mango Necklace / Mangiya Mala with Studs",
        price: 201.00,
        image: ProductDetailSub
      }
    ];
    
    // Show only first 2 items if showAll is false
    const displayedItems = showAll ? items : items.slice(0, 2);
  
  return (
    <div className="w-full md:w-2/5 space-y-4">
      <h2 className="text-2xl font-medium mb-4">Your purchases</h2>
    <div className=" rounded-[30px] px-10 py-8 border-2 border-[#969393] bg-transparent">
      <div className="space-y-6">
        {displayedItems.map(item => (
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
      {
        !showAll?<button className="text-md text-center w-full mt-4 text-gray-600" onClick={()=>setShowAll(true)}>View more</button>:""
      }
      
    </div>
    
    {/* Order summary */}
    <div className="rounded-[30px] px-10 py-8 border-2 border-[#969393] bg-transparent">
      <h2 className="text-2xl font-medium mb-4">Order summary</h2>
      <div className="flex mb-4 gap-8">
        <input
          type="text"
          placeholder="Discount voucher"
          className="flex-grow  h-[68px] px-4 py-3 rounded-[20px] text-base  border-2 border-[#969393] bg-transparent outline-none placeholder:text-[#A29F9E]"
        />
        <button className=" border-2 border-[#969393] text-[#969393] hover:text-black bg-transparent px-14 py-2 rounded-[20px] text-lg">
          Apply
        </button>
      </div>
      <div className="space-y-3 border-b border-stone-200 pb-4">
        <div className="flex justify-between">
          <span className="text-xl">Sub Total</span>
          <span className="font-medium">603 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl text-[#969393]">Discount</span>
          <span className="text-[#969393]">-100 AED</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl">Delivery fee</span>
          <span className="font-medium">50 AED</span>
        </div>
      </div>
      <div className="flex justify-between pt-4 mb-6">
        <span className="text-2xl font-semibold">Total</span>
        <span className="font-semibold text-xl">553 AED</span>
      </div>

      <button className="relative w-full overflow-hidden px-4 border border-white sm:px-5 md:px-6 py-1.5 sm:py-4 rounded-[20px] bg-black group hover:font-semibold">
  <span className="relative z-10 transition-colors duration-700 group-hover:text-black text-white text-base sm:text-lg md:text-2xl ">
    Checkout Now
  </span>
  <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out rounded-[20px] border-[0.5px] border-black/50"></span>
</button>


    </div>
  </div>
  )
}

export default RightSection
