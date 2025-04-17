import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import ProductDetailsPage from "./pages/productdetails/ProductDetailsPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
