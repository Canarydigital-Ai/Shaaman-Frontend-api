import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import HomePage from "./pages/home/HomePage"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"
import ProductPage from "./pages/Pdoduct/ProductPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/Products" element={<ProductPage />} />
    </Routes>
    </>
  )
}

export default App
