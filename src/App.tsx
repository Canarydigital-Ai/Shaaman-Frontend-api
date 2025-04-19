import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import HomePage from "./pages/home/HomePage"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"
import ProductPage from "./pages/product/ProductPage"
import CartandCheckoutPage from "./pages/cart/CartandCheckoutPage"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import PaymentSuccessPage from "./pages/payment/PaymentSuccessPage"
import AuthPage from "./pages/auth/AuthPage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartandCheckoutPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
    </>
  )
}

export default App
