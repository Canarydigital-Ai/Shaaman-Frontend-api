import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import ShaamanSlider1 from '../assets/ShaamanSlider1.png';
import ShaamanSlider2 from '../assets/ShaamanSlider2.png';
import ShaamanSlider3 from '../assets/ShaamanSlider3.png';
import ShaamanSlider4 from '../assets/ShaamanSlider4.png';
import ShaamanSlider5 from '../assets/ShaamanSlider5.png';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showToast, setShowToast] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);
  
  const sliderImages = [
    ShaamanSlider1,
    ShaamanSlider2,
    ShaamanSlider3,
    ShaamanSlider4,
    ShaamanSlider5
  ];

  // Calculate the target date (5 days from now)
  useEffect(() => {
    // Get current date and time
    const now = new Date();
    
    // Calculate target date (5 days from now)
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 5);
    
    // Set to the end of the day
    targetDate.setHours(23, 59, 59, 999);
    
    // Update countdown immediately
    updateCountdown(targetDate);
    
    // Set up interval for countdown
    const timer = setInterval(() => {
      if (updateCountdown(targetDate)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update countdown timer
  const updateCountdown = (targetDate: Date): boolean => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    // Check if timer has ended
    if (difference <= 0) {
      setTimerEnded(true);
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return true; // Timer ended
    }
    
    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    setCountdown({ days, hours, minutes, seconds });
    return false; // Timer still running
  };
 
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
            <p className="text-lg sm:text-2xl font-light mb-1 leading-[25px] sm:leading-[30px] pb-5 sm:pb-4 md:pb-8">Stay Tuned <br /> Our New Website is</p>
            
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-serif font-light tracking-wide mb-8 nanum-myeongjo-regular">
              {timerEnded ? 'LAUNCHING NOW' : 'COMING SOON'}
            </h1>
            
            {/* Countdown Timer */}
            <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-light mb-12">
              {!timerEnded ? (
                <>
                  <div className="flex flex-col items-center mx-2 md:mx-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl">{formatTime(countdown.days)}</span>
                    <span className="text-xs sm:text-sm mt-1">Days</span>
                  </div>
                  <span className="mx-1 md:mx-2">:</span>
                  <div className="flex flex-col items-center mx-2 md:mx-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl">{formatTime(countdown.hours)}</span>
                    <span className="text-xs sm:text-sm mt-1">Hours</span>
                  </div>
                  <span className="mx-1 md:mx-2">:</span>
                  <div className="flex flex-col items-center mx-2 md:mx-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl">{formatTime(countdown.minutes)}</span>
                    <span className="text-xs sm:text-sm mt-1">Minutes</span>
                  </div>
                  <span className="mx-1 md:mx-2">:</span>
                  <div className="flex flex-col items-center mx-2 md:mx-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl">{formatTime(countdown.seconds)}</span>
                    <span className="text-xs sm:text-sm mt-1">Seconds</span>
                  </div>
                </>
              ) : (
                <span className="text-2xl sm:text-3xl">Our website is now live!</span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              This one leans into a mystical, high-end vibe,<br className="hidden sm:block" />
              perfect for a premium jewelry experience.<br className="hidden sm:block" />
              Want me to try a version that's more modern-<br className="hidden sm:block" />
              chic, bold-luxury, or classic-romantic next?
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex rounded-[15px] sm:h-[66px] border">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow px-1 sm:px-4 py-2 placeholder:text-[#A29F9E] focus:outline-none text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-[15px] font-medium hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>

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
    
      {/* Right side image slider */}
      <div className="w-full md:w-[55%] relative overflow-hidden bg-[linear-gradient(to_bottom_right,_#F6F1E8,_#FFF9EF)]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        
        {/* Image slider */}
        <div className="animate-scroll flex space-x-3">
          {/* First set of images */}
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className="h-[50vh] sm:h-screen object-cover"
              alt={`Shaaman Jewelry ${index + 1}`}
            />
          ))}
          {/* Duplicate set of images for seamless scrolling */}
          {sliderImages.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              className="h-[50vh] sm:h-screen object-cover"
              alt={`Shaaman Jewelry ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;