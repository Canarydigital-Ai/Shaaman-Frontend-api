import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Footer from '../../components/footer/Footer'

const CheckoutPage:React.FC = () => {
  return (
    <div>
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-[#F8F2E9]">
    <h1 className="text-5xl mb-8 nanum-myeongjo-regular tracking-[-4px]">Checkout</h1>
    <div className="flex flex-col md:flex-row gap-8">
      <LeftSection />
      <RightSection />
    </div>
    </div>
    <Footer />
  </div>
  )
}

export default CheckoutPage
