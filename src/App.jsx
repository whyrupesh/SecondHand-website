import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
}
