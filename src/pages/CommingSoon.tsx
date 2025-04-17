import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion";
import Logo from "../assets/LogoMain.png";
import ShaamanSlider1 from "../assets/ShaamanSlider1.png";
import ShaamanSlider2 from "../assets/ShaamanSlider2.png";
import ShaamanSlider3 from "../assets/ShaamanSlider3.png";
import ShaamanSlider4 from "../assets/ShaamanSlider4.png";
import ShaamanSlider5 from "../assets/ShaamanSlider5.png";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showToast, setShowToast] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  const sliderImages = [
    ShaamanSlider1,
    ShaamanSlider2,
    ShaamanSlider3,
    ShaamanSlider4,
    ShaamanSlider5,
  ];

  // Calculate the target date (5 days from now)
  useEffect(() => {
    // Set the specific start date: April 11, 2025
    const startDate = new Date("2025-04-16T00:00:00");
    
    // Calculate target date (5 days from start date)
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + 5);
    
    // Set to the end of the day
    targetDate.setHours(23, 59, 59, 999);
    
    // This means the countdown will end on April 16, 2025 at 23:59:59
    console.log("Countdown will end on:", targetDate.toLocaleString());
    
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
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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
    const serviceId ="service_qjk23ga"
    const templateId ="template_lhb9bjw"
    const publicKey ="yRqB12zhJfiYANARr"

    const templateParams ={
      user_email:email
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((_)=>{
      setEmail("");
      setShowToast(true);
    })
    .catch((error)=>{
      console.log('Error senting email',error)
    })

    // Show toast message
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[45%] flex flex-col justify-center items-center p-8 md:p-16 bg-[linear-gradient(to_bottom_right,_#F6F1E8,_#FFF9EF)]"
      >
        <div className="max-w-2xl w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex justify-center"
          >
            <div className="text-amber-800 font-serif text-xl">
              <img src={Logo} alt="shaaman" width={120} />
            </div>
          </motion.div>

          {/* UNVEILING SOON Text */}
          <div className="text-center ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-light mb-1 leading-[25px] sm:leading-[30px] pb-5 sm:pb-4 md:pb-8"
            >
              Stay Tuned <br /> Our New Website is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-[44px] xl:text-[64px] font-serif font-light tracking-wide mb-8 nanum-myeongjo-regular"
            >
              {timerEnded ? "COMING SOON" : "UNVEILING SOON"}
            </motion.h1>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-light mb-12"
            >
              {!timerEnded ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col items-center mx-2 md:mx-3"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl">
                      {formatTime(countdown.days)}
                    </span>
                    <span className="text-xs sm:text-sm mt-1">Days</span>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mx-1 md:mx-2"
                  >
                    :
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-col items-center mx-2 md:mx-3"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl">
                      {formatTime(countdown.hours)}
                    </span>
                    <span className="text-xs sm:text-sm mt-1">Hours</span>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="mx-1 md:mx-2"
                  >
                    :
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex flex-col items-center mx-2 md:mx-3"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl">
                      {formatTime(countdown.minutes)}
                    </span>
                    <span className="text-xs sm:text-sm mt-1">Minutes</span>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mx-1 md:mx-2"
                  >
                    :
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="flex flex-col items-center mx-2 md:mx-3"
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl">
                      {formatTime(countdown.seconds)}
                    </span>
                    <span className="text-xs sm:text-sm mt-1">Seconds</span>
                  </motion.div>
                </>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl"
                >
                  Our website is now live!
                </motion.span>
              )}
            </motion.div>

            {/* Description */}
            <div className="flex flex-col items-center justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center text-base sm:text-lg md:text-lg xl:w-[85%] 2xl:w-[68%] text-gray-700 mb-3 leading-relaxed"
              >
                An exclusive jewelry experience is on its way—where elegance
                meets mystique, and every piece tells a story. Stay tuned as we
                unveil a world of rare craftsmanship, premium artistry,
                and eternal allure.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center text-base sm:text-lg md:text-lg 2xl:w-[85%] text-gray-700 mb-3 leading-relaxed mt-8"
              >
                Enter your details below to stay informed.
              </motion.p>
            </div>
          </div>
          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            onSubmit={handleSubmit}
            className="flex rounded-[15px] sm:h-[66px] border"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow px-1 sm:px-4 py-2 placeholder:text-[#A29F9E] focus:outline-none text-sm sm:text-base"
              required
            />
            <motion.button
              whileHover={{ backgroundColor: "#333" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-[15px] font-medium hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Toast Message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: showToast ? 1 : 0,
          y: showToast ? 0 : 50,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-md shadow-lg flex items-center z-50 ${
          !showToast && "pointer-events-none"
        }`}
      >
        <svg
          className="w-5 h-5 mr-2 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>Thank you! Your email has been submitted successfully.</span>
      </motion.div>

      {/* Right side image slider */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full md:w-[55%] relative overflow-hidden bg-[linear-gradient(to_bottom_right,_#F6F1E8,_#FFF9EF)]"
>
  {/* Gradient overlay */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"
  ></motion.div>

  {/* Image slider with persistent animation */}
  <div
    className="animate-scroll flex space-x-3"
    style={{ willChange: "transform" }}
  >
    {/* First set of images */}
    {sliderImages.map((image, index) => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={index}
        src={image}
        className="h-[50vh] sm:h-screen object-cover"
        alt={`Shaaman Jewelry ${index + 1}`}
        loading="eager"
      />
    ))}
    {/* Duplicate set of images for seamless scrolling */}
    {sliderImages.map((image, index) => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={`duplicate-${index}`}
        src={image}
        className="h-[50vh] sm:h-screen object-cover"
        alt={`Shaaman Jewelry ${index + 1}`}
        loading="eager"
      />
    ))}
    {sliderImages.map((image, index) => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={`duplicate-${index}`}
        src={image}
        className="h-[50vh] sm:h-screen object-cover"
        alt={`Shaaman Jewelry ${index + 1}`}
        loading="eager"
      />
    ))}
    {sliderImages.map((image, index) => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={`duplicate-${index}`}
        src={image}
        className="h-[50vh] sm:h-screen object-cover"
        alt={`Shaaman Jewelry ${index + 1}`}
        loading="eager"
      />
    ))}
    {sliderImages.map((image, index) => (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={`duplicate-${index}`}
        src={image}
        className="h-[50vh] sm:h-screen object-cover"
        alt={`Shaaman Jewelry ${index + 1}`}
        loading="eager"
      />
    ))}
  </div>
</motion.div>
    </div>
  );
};

export default ComingSoon;
