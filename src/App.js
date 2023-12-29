import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProductList from "./pages/AllProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
