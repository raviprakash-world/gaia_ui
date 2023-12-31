import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProductList from "./pages/AllProduct";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
