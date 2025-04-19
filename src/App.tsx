import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import HomePage from "./pages/home/HomePage"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"
import ProductPage from "./pages/product/ProductPage"
import CartandCheckoutPage from "./pages/cart/CartandCheckoutPage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart-checkout" element={<CartandCheckoutPage />} />
    </Routes>
    </>
  )
}

export default App
