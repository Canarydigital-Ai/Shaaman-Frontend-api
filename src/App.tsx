import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import ProductPage from "./pages/Pdoduct/ProductPage"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/Products" element={<ProductPage />} />
    </Routes>
    </>
  )
}

export default App
