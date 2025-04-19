import React from "react";
import Image from "../../assets/About-Image.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F8F2E9] items-center justify-center">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 pr-16 pl-28">
          <h1 className="text-3xl md:text-[48px] nanum-myeongjo-regular mb-12 text-gray-900">
            About Us
          </h1>

          <div className="text-gray-800 space-y-4 max-w-[800px]">
            <p className="text-[20px]">
              At Shaaman Jewelry, we believe that jewelry is more than just an
              accessory. It is a reflection of your story, your style, and your
              spirit. With roots deeply embedded in artistry and culture,
              Shaaman is a tribute to timeless craftsmanship blended with
              contemporary elegance.
              <br />
              Founded with a passion for creating meaningful adornments, each
              piece in our collection is thoughtfully designed and meticulously
              handcrafted to embody grace, precision, and individuality. From
              heirloom-inspired classics to modern statement pieces, our jewelry
              is designed to resonate with moments that matter, whether it is a
              quiet celebration or a grand milestone.
              <br />
              We take pride in sourcing the finest materials ethically and
              sustainably to ensure quality that not only lasts a lifetime but
              can be passed on through generations. Every gemstone, every metal,
              and every setting is chosen with care, ensuring that your Shaaman
              piece is as unique as you are.
              <br />
              Shaaman is more than just jewelry. It is an experience, a journey
              of self-expression, luxury, and emotion. Our commitment to
              authenticity, customer satisfaction, and timeless design has
              helped us earn the trust and love of a growing community who see
              us not just as a brand but as a part of their personal story.
              <br />
              Whether you are seeking the perfect gift, a statement piece for an
              occasion.
            </p>
          </div>

          <div className="mt-16">
            <button className="bg-black text-white py-4 px-10 w-full md:w-1/2 rounded-[20px] hover:bg-gray-800 transition-colors ">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" md:flex md:w-1/2 items-center justify-center ">
          <div className="w-full pr-16 pl-12 relative ">
            <img
              src={Image}
              alt="Jewelry collection"
              className="w-[892px] h-[800px] object-bottom  object-cover rounded-[30px]"
            />
            {/* Product details would go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
