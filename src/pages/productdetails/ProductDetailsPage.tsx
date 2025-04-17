import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProductDetailImg1 from '../../assets/ProductDetail Img1.png'
import ProductDetailImg2 from '../../assets/ProductDetailSub Img1.png'

const ProductDetailsPage: React.FC = () => {
  return (
    <div className='relative bg-gradient-to-t from-[#FFF9EF] to-[#F6F1E8] h-screen'>
      <div className='w-full'>
        <Navbar />
      </div>

      <div className='px-20 flex justify-between'>
        <div className='relative'>
          <img src={ProductDetailImg1} alt="" className='w-full max-w-[580px] h-[655px] rounded-[30px]'/>

          {/* image section */}
          <div className='absolute left-0 bottom-0 translate-x-1/5 flex bg-white w-fit border-x-10 border-t-10  border-white rounded-t-[20px] gap-3'>
            <img src={ProductDetailImg2} alt=""  />
            <img src={ProductDetailImg2} alt=""  />
            <img src={ProductDetailImg2} alt=""  />
            <img src={ProductDetailImg2} alt=""  />
            
          </div>
        </div>

        <div>
          sdfgh
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage