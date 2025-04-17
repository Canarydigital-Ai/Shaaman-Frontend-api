import React from 'react'
import Banner from '../../components/products/Banner'
import ProductList from '../../components/products/ProductList'

const ProductPage:React.FC = () => {
  return (
    <div className="max-w-full mx-auto bg-[#F8F2E9] min-h-screen">
      <Banner/>
      <ProductList/>
    </div>
  )
}

export default ProductPage
