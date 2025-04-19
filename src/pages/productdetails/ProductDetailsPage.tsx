import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductDetailImg1 from "../../assets/ProductDetail Img1.png";
import ProductDetailImg2 from "../../assets/ProductDetailSub Img1.png";
import { IoStar } from "react-icons/io5";
import Footer from "../../components/footer/Footer";

const ProductDetailsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(ProductDetailImg1);
  const [quantity, setQuantity] = useState(1);
  const originalPrice = 251.0;
  const discountedPrice = 201.0;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const thumbnailImages = [
    ProductDetailImg1,
    ProductDetailImg2,
    ProductDetailImg2,
    ProductDetailImg2,
  ];

  return (
    <>
      <div className="relative bg-gradient-to-t from-[#FFF9EF] to-[#F6F1E8]">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-6 sm:py-12 lg:py-24 flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col  lg:flex-row gap-8 md:gap-8 xl:gap-14">
            <div className="space-y-4 w-full lg:w-[50%] xl:w-[630px] relative">
              <img
                src={selectedImage}
                alt="Aaranya Gold Necklace"
                className="w-full h-[350px] sm:h-[460px] md:h-[570px] lg:h-[600px] object-cover object-top rounded-2xl "
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-t-[15px] px-3 pt-3 flex space-x-3 w-[280px] sm:w-[280px] md:w-[310px]">
                {thumbnailImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={` w-14  h-14 md:w-16 md:h-16 object-cover rounded-lg cursor-pointer 
                    ${selectedImage === img}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6 w-full lg:w-[550px] xl:w-[810px]">
              <div>
                <h1 className="text-3xl md:text-[50px] xl:text-[70px] nanum-myeongjo-regular font-normal leading-tight xl:leading-20 w-full max-w-[430px] lg:tracking-[-4px] tracking-[-2px]">
                  Aaranya Gold Necklace
                </h1>
                <p className="text-base md:text-lg lg:text-xl">
                  Inspired by nature's elegance, the Aaranya Gold Necklace is
                  crafted in 22K gold with intricate leaf motifs and fine
                  detailing. A timeless piece that adds grace to festive and
                  traditional looks
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500 line-through lg:text-lg text-base">
                      AED {originalPrice.toFixed(2)}
                    </span>
                    <span className="lg:text-2xl text-lg font-semibold">
                      AED {discountedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border rounded-full px-3 py-1 space-x-3 w-[110px]">
                    <button
                      onClick={handleDecrement}
                      disabled={quantity === 1}
                      className="text-xl disabled:text-gray-300"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="text-xl">
                      +
                    </button>
                  </div>
                </div>

                <div className="">
                  <div className="flex text-yellow-500 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <IoStar size={22} />
                      </span>
                    ))}
                    <span className="text-gray-600 ml-2">(4.8k reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <button className="relative overflow-hidden w-full md:w-[307px] h-[50px] md:h-[66px] bg-black text-white border-2 border-black font-light py-2 md:py-3 rounded-[15px] md:rounded-[20px] text-lg md:text-2xl cursor-pointer group transition">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Buy Now
                  </span>
                  <span className="absolute inset-0 bg-[#FFF9EF] w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
                </button>

                <button className="relative overflow-hidden w-full md:w-[307px] h-[50px] md:h-[66px] border-2 font-light py-2 md:py-3 rounded-[15px] md:rounded-[20px] text-lg md:text-2xl cursor-pointer group transition">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Add to Cart
                  </span>
                  <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-[36px] nanum-myeongjo-regular font-medium lg:tracking-[-2px] tracking-tight">
              Additional information
            </h1>
            <p className="text-base md:text-lg lg:text-xl max-w-full lg:max-w-7xl">
              Inspired by the elegance of nature, the Aaranya Gold Necklace
              features finely crafted leaf motifs in pure 22K gold. Its
              intricate detailing and graceful design make it a perfect piece
              for weddings, festivals, and traditional celebrations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
