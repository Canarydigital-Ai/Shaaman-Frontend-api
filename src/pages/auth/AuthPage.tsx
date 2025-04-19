import React, { useState } from 'react';
import ShaamanLogin1 from '../../assets/LoginPageImg1.png'
import Logo from "../../assets/LogoMain.png";

const AuthPage :React.FC= () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animating, setAnimating] = useState(false);

  const handleToggleForm = () => {
    setAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F8F2E9]">
      {/* Auth Form Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
        <div className="text-amber-800 font-serif text-xl   flex justify-center mb-12">
              <img src={Logo} alt="shaaman" width={120} />
            </div>
          {/* Toggle Buttons */}
          <div className="relative bg-white py-2 px-2 rounded-full mb-8 shadow-md">
            <div
              className={`absolute top-0 h-full bg-black rounded-full transform transition-all duration-500 ease-in-out ${
                isLogin ? 'left-0 w-1/2 translate-x-0' : 'left-0 w-1/2 translate-x-full'
              }`}
            ></div>
            <div className="grid grid-cols-2 relative z-10">
              <button
                onClick={() => isLogin ? null : handleToggleForm()}
                className={`py-2 rounded-full font-medium text-xl relative overflow-hidden ${
                  isLogin ? 'text-white' : 'text-gray-700'
                } transition-colors duration-500`}
              >
                <span className={`transform transition-transform duration-500 ${isLogin ? 'translate-y-0' : '-translate-y-1'}`}>Sign In</span>
              </button>
              <button
                onClick={() => isLogin ? handleToggleForm() : null}
                className={`py-2 rounded-full font-medium text-xl relative overflow-hidden ${
                  !isLogin ? 'text-white' : 'text-gray-700'
                } transition-colors duration-500`}
              >
                <span className={`transform transition-transform duration-500 ${!isLogin ? 'translate-y-0' : '-translate-y-1'}`}>Sign Up</span>
              </button>
            </div>
          </div>

          {/* Forms */}
          <div className="relative overflow-hidden">
            {/* Login Form */}
            <div
              className={`transition-all duration-300 ${
                animating
                  ? 'opacity-0 transform translate-x-full'
                  : isLogin
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 absolute top-0 -translate-x-full'
              }`}
            >
              {isLogin && (
                <form>
                  <div className="mb-4">
                    <label className="block text-xl font-medium mb-2">Email address</label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xl font-medium mb-2">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Your Password"
                        className="w-full px-4  focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-xl  rounded-[31.5px]  font-medium hover:bg-gray-800 transition-colors"
                  >
                    Create Account
                  </button>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full bg-[#ffffff] text-gray-700 py-4 text-xl rounded-[31.5px]  font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                          fill="currentColor"
                        />
                      </svg>
                      Sign in with Google
                    </button>
                  </div>
                  <p className="text-start mt-6">
                    Don't have an account?{' '}
                    <span
                      onClick={handleToggleForm}
                      className="font-semibold "
                    >
                      Create an account
                    </span>
                  </p>
                </form>
              )}
            </div>

            {/* Signup Form */}
            <div
              className={`transition-all duration-300 ${
                animating
                  ? 'opacity-0 transform -translate-x-full'
                  : !isLogin
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 absolute top-0 translate-x-full'
              }`}
            >
              {!isLogin && (
                <form>
                  <div className="mb-4">
                    <label className="block text-xl font-medium mb-2">Full name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4   focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xl font-medium mb-2">Email address</label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4  focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xl font-medium mb-2">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Your Password"
                        className="w-full px-4  focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xl font-medium mb-2">Repeat Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Your Password"
                        className="w-full px-4 focus:outline-none text-xl py-4 focus:ring-2 focus:ring-gray-300 transition-all border-[1.5px] border-[#A29F9E] rounded-[12px]"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white  text-xl py-4 rounded-[31.5px] font-medium hover:bg-gray-800 transition-colors"
                  >
                    Create Account
                  </button>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full bg-[#FFFFFF] text-gray-700 py-4 text-xl rounded-[31.5px] font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                          fill="currentColor"
                        />
                      </svg>
                      Sign up with Google
                    </button>
                  </div>
                  {/* <p className="text-start mt-6">
                  Already account? 
                    <span    
                      className="font-semibold "
                      onClick={handleToggleForm}
                    >
                     {" "} Sign in
                    </span>
                  </p> */}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Jewelry Display Container */}
      <div className="hidden md:flex md:w-1/2  h-screen items-center justify-center ">
        <div className="w-full h-screen pr-16 pt-10 pb-10 pl-12 relative ">
          <img 
            src={ShaamanLogin1}
            alt="Jewelry collection" 
            className="w-[894px] h-full object-bottom  object-cover rounded-[30px]"
          />
          {/* Product details would go here */}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;