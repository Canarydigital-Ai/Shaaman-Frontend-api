import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductDetailImg1 from "../../assets/ProductDetail Img1.png";
import ProductDetailImg2 from "../../assets/ProductDetailSub Img1.png";
import { IoStar } from "react-icons/io5";
import Footer from "../../components/footer/Footer";

const ProductDetailsPage: React.FC = () => {
  const discountedPrice = 201.0;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(ProductDetailImg1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="relative bg-gradient-to-t from-[#FFF9EF] to-[#F6F1E8]">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24 flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="flex-1 space-y-4 md:space-y-6 max-w-full lg:max-w-[632px] relative">
              {/* Main Product Image */}
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Aanya Gold Necklace"
                  className="w-full h-auto md:h-[500px] lg:h-[655px] object-cover rounded-[20px] lg:rounded-[30px]"
                />

                {/* Centered Thumbnail Images */}
                <div className="flex justify-center gap-3 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-2 px-2 md:pt-3 md:px-3 rounded-t-[15px] md:rounded-t-[20px] w-full max-w-[280px]  lg:max-w-[380px]">
                  {[
                    ProductDetailImg1,
                    ProductDetailImg2,
                    ProductDetailImg2,
                    ProductDetailImg2,
                  ].map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-14 h-14 md:w-20 md:h-20 rounded-md md:rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedImage === img
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8 ">
              <div className="space-y-3 lg:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[70px] nanum-myeongjo-regular font-normal leading-tight lg:leading-20 w-full max-w-full lg:max-w-[430px] tracking-[-4px]">
                  Aaranya Gold Necklace
                </h1>
                <p className="text-base md:text-lg lg:text-xl max-w-full lg:max-w-[810px]">
                  Inspired by nature's elegance, the Aaranya Gold Necklace is
                  crafted in 22K gold with intricate leaf motifs and fine
                  detailing. A timeless piece that adds grace to festive and
                  traditional looks
                </p>
              </div>

              <div className="space-y-2 md:space-y-4">
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <p className="text-sm md:text-base font-medium text-[#797979] line-through">
                    AED 251.00
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    AED {(discountedPrice * quantity).toFixed(2)}
                  </p>

                  <div className="bg-white border rounded-full w-[90px] md:w-[110px] h-[28px] md:h-[30px] flex items-center justify-between px-2 md:px-3 text-[16px] md:text-[18px]">
                    <button
                      className="cursor-pointer"
                      onClick={handleDecrement}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="cursor-pointer"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex text-yellow-500 gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>
                          <IoStar size={22} />
                        </span>
                      ))}
                  </div>
                  <p className="text-base md:text-xl">(4.8k reviews)</p>
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
            <h1 className="text-2xl md:text-3xl lg:text-[36px] nanum-myeongjo-regular font-medium lg:tracking-[-4px] tracking-tight">
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
