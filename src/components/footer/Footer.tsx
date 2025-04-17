import React from 'react' 
import { FaFacebook, FaYoutube  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#1E1B26] text-white py-6'>
      <div className='max-w-9/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex space-x-16 mb-4 md:mb-0 text-xl font-normal '>
          <a href="#" >About us</a>
          <a href="#" >Contact Us</a>
          <a href="#" >Shipping Policy</a>
          <a href="#" >Returns and Refund Policy</a>
          <a href="#" >Cancellation Policy</a>
        </div>
        
        <div className='flex items-center space-x-4'>
          <div className='flex space-x-8 '>
            <a href="#" className=''>
              <FaFacebook size={35} />
            </a>
            <a href="#" className=''>
              <FaYoutube  size={35} />
            </a>
            <a href="#" className=''>
              <AiFillInstagram size={35} />
            </a>
          </div>
          
          {/* <div className='flex space-x-2'>
            <img 
              src="/api/placeholder/50/32" 
              alt="Visa" 
              className='h-8 w-12 object-contain'
            />
            <img 
              src="/api/placeholder/50/32" 
              alt="Mastercard" 
              className='h-8 w-12 object-contain'
            />
            <img 
              src="/api/placeholder/50/32" 
              alt="Other Card" 
              className='h-8 w-12 object-contain'
            />
          </div> */}
        </div>
      </div>
      
      {/* <div className='container mx-auto px-4 mt-4 text-center text-sm text-gray-400'>
        2024 Shaaman Group (FZC) All rights reserved 
        <span className='mx-2'>•</span>
        <a href="#" className='hover:underline'>Terms & Conditions</a>
        <span className='mx-2'>•</span>
        <a href="#" className='hover:underline'>Privacy Policy</a>
        <span className='mx-2'>•</span>
        <a href="#" className='hover:underline'>Disclaimer</a>
      </div> */}
    </footer>
  )
}

export default Footer