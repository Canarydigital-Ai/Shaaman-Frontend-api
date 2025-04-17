import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CommingSoon />} />
    </Routes>
    </>
  )
}

export default App
