import React from 'react'
import { RiCheckboxCircleLine } from "react-icons/ri";

const PaymentSuccess:React.FC = () => {
    const products = [
        {
          id: 1,
          name: "Mango Necklace",
          description: "Maanga Maala with Studs",
          price: "AED 201.00",
          image: "/api/placeholder/64/64" 
        },
        {
          id: 2,
          name: "Mango Necklace",
          description: "Maanga Maala with Studs",
          price: "AED 201.00",
          image: "/api/placeholder/64/64"
        },
        {
          id: 3,
          name: "Mango Necklace",
          description: "Maanga Maala with Studs",
          price: "AED 201.00",
          image: "/api/placeholder/64/64"
        }
      ];
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-4">
      <div className="w-full max-w-md flex flex-col items-center space-y-6">
        {/* Success Icon and Header */}
        <div className="flex flex-col items-center mb-2">
          <RiCheckboxCircleLine className="text-green-500 w-10 h-10" />
          <h1 className="text-xl font-medium text-center mt-2">Thank you</h1>
          <p className="text-gray-800">Your order has been received</p>
        </div>
        
        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm w-full p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="font-medium mb-4">Order details</h2>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-800">April 10, 2025</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Payment method:</span>
              <span className="text-gray-800">Credit card</span>
            </div>
            
            <hr className="my-4" />
            
            <div className="flex justify-between">
              <span className="text-gray-600">Sub Total</span>
              <span className="text-gray-800">603 AED</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500">Discount</span>
              <span className="text-gray-500">-100 AED</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery fee</span>
              <span className="text-gray-800">50 AED</span>
            </div>
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>553 AED</span>
            </div>
          </div>
        </div>

        {/* Products Card - Moved to top */}
        <div className="bg-white rounded-lg shadow-sm w-full p-6">
          <h2 className="font-medium mb-4">Products</h2>
          
          {/* Map through products array */}
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex items-center justify-between py-3 ${index > 0 ? 'border-t border-gray-100' : ''}`}
            >
              <div className="flex space-x-3">
                <div className="w-16 h-16 rounded bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm">{product.name} / </span>
                  <span className="text-sm text-gray-600">{product.description}</span>
                </div>
              </div>
              <span className="font-medium">{product.price}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full grid grid-cols-2 gap-3">
          <button className="bg-black text-white py-3 px-4 rounded-md text-sm font-medium">
            Continue shopping
          </button>
          <button className="bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-md text-sm font-medium">
            Back to home
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentSuccess
