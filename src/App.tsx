import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import ProductPage from "./pages/Pdoduct/ProductPage"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/Products" element={<ProductPage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
