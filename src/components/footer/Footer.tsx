import React from 'react' 
import { FaFacebook, FaYoutube  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Payment1 from '../../assets/Payment method 1.png'
import Payment2 from '../../assets/Payment method 2.png'
import Payment3 from '../../assets/Payment method 3.png'

const Footer: React.FC = () => {
  return (
<footer className='bg-[#1E1B26] text-white pt-8 md:pt-12 space-y-6 md:space-y-10'>
  <div className='max-w-[90%] lg:max-w-[75%] mx-auto px-4 flex flex-row justify-between'>
    {/* Links Section */}
    <div className='flex flex-col lg:flex-row md:space-x-8 lg:space-x-16 space-y-4 lg:space-y-0 mb-6 md:mb-0 text-base md:text-lg lg:text-xl font-normal'>
      <a href="#" className='hover:text-gray-300 transition-colors'>About us</a>
      <a href="#" className='hover:text-gray-300 transition-colors'>Contact Us</a>
      <a href="#" className='hover:text-gray-300 transition-colors'>Shipping Policy</a>
      <a href="#" className='hover:text-gray-300 transition-colors'>Returns and Refund Policy</a>
      <a href="#" className='hover:text-gray-300 transition-colors'>Cancellation Policy</a>
    </div>
     
    <div className='flex flex-col justify-center items-center space-y-4 md:space-y-6'>
      <div className='flex space-x-4 md:space-x-6 lg:space-x-8'>
        <a href="#" className='hover:opacity-80 transition-opacity'>
          <FaFacebook size={40} />
        </a>
        <a href="#" className='hover:opacity-80 transition-opacity'>
          <FaYoutube size={40} />
        </a>
        <a href="#" className='hover:opacity-80 transition-opacity'>
          <AiFillInstagram size={40} />
        </a>
      </div>
      
      <div className='flex justify-center space-x-2 md:space-x-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded'>
        <img src={Payment1} alt="Visa" className='h-6 md:h-8' />
        <img src={Payment2} alt="Mastercard" className='h-6 md:h-8' />
        <img src={Payment3} alt="Other Card" className='h-6 md:h-8' />
      </div>
    </div>
  </div>
  
  {/* Copyright Section */}
  <div className='flex justify-center text-sm md:text-base lg:text-xl border-t border-t-[#404040] py-4 md:py-6 px-4 text-center'>
    <p>© 2024 Shaaman Group (FZC) All rights reserved | Terms & Conditions | Privacy Policy | Disclaimer</p>
  </div>
</footer>
  )
}

export default Footer