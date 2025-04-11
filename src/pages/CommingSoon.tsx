import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import ShaamanSlider1 from '../assets/ShaamanSlider1.png';
import ShaamanSlider2 from '../assets/ShaamanSlider2.png';
import ShaamanSlider3 from '../assets/ShaamanSlider3.png';
import ShaamanSlider4 from '../assets/ShaamanSlider4.png';
import ShaamanSlider5 from '../assets/ShaamanSlider5.png';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 42, seconds: 0 });
  const [showToast, setShowToast] = useState(false);
  
  const sliderImages = [
    ShaamanSlider1,
    ShaamanSlider2,
    ShaamanSlider3,
    ShaamanSlider4,
    ShaamanSlider5
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Toast message effect - hide after 3 seconds
  useEffect(() => {
    if (showToast) {
      const toastTimer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
      return () => clearTimeout(toastTimer);
    }
  }, [showToast]);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail('');
    // Show toast message
    setShowToast(true);
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side content */}
      <div className="w-full md:w-[45%] flex flex-col justify-center items-center p-8 md:p-16 bg-[linear-gradient(to_bottom_right,_#F6F1E8,_#FFF9EF)]">
        <div className="max-w-xl w-full">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <div className="text-amber-800 font-serif text-xl">
              <img src={Logo} alt="shaaman" />
            </div>
          </div>

          {/* Coming Soon Text */}
          <div className="text-center mb-12">
            <p className="text-2xl font-light mb-1 leading-[30px]">Stay Tuned <br /> Our New Website is</p>
            
            <h1 className="text-[64px] font-serif font-light tracking-wide mb-8 nanum-myeongjo-regular">COMING SOON</h1>
            
            {/* Countdown Timer */}
            <div className="flex justify-center items-center text-5xl font-light mb-12">
              <span>{formatTime(countdown.hours)}</span>
              <span className="mx-4">:</span>
              <span>{formatTime(countdown.minutes)}</span>
              <span className="mx-4">:</span>
              <span>{formatTime(countdown.seconds)}</span>
            </div>
            
            {/* Description */}
            <p className="text-center text-xl text-gray-700 mb-8 leading-relaxed">
              This one leans into a mystical, high-end vibe,<br />
              perfect for a premium jewelry experience.<br />
              Want me to try a version that's more modern-<br />
              chic, bold-luxury, or classic-romantic next?
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex rounded-[15px] h-[66px] border">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow px-4 py-2 placeholder:text-[#A29F9E] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-[15px] font-medium hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>
        
        {/* Toast Message */}
        <div 
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-md shadow-lg transition-opacity duration-300 flex items-center z-50 ${
            showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Thank you! Your email has been submitted successfully.</span>
        </div>
      </div>

      {/* Right side image slider */}
      <div className="w-full md:w-[55%] relative overflow-hidden bg-[linear-gradient(to_bottom_right,_#F6F1E8,_#FFF9EF)]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        
        {/* Image slider */}
        <div className="animate-scroll flex space-x-3">
          {/* First set of logos */}
          {sliderImages.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className=""
              alt={`Client Logo ${index + 1}`}
            />
          ))}
          {/* Duplicate set of logos for seamless scrolling */}
          {sliderImages.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              className=""
              alt={`Client Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;