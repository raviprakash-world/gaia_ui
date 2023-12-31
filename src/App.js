import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProductList from "./pages/AllProduct";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProductList />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
