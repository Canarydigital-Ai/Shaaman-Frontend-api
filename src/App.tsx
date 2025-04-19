import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import HomePage from "./pages/home/HomePage"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"
import ProductPage from "./pages/product/ProductPage"
import CartandCheckoutPage from "./pages/cart/CartandCheckoutPage"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import PaymentSuccessPage from "./pages/payment/PaymentSuccessPage"
import AuthPage from "./pages/auth/AuthPage"
import AboutUsPage from "./pages/about/AboutUsPage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart-checkout" element={<CartandCheckoutPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
    </>
  )
}

export default App
