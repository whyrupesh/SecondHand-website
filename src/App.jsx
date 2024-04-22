import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

import { auth, provider } from "../src/pages/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/"
            element={
              value ? (
                <Home />
              ) : (
                <div className="flex flex-col items-center justify-center h-screen ">
                  <button
                    className="bg-black text-white p-4 rounded-lg font-bold"
                    onClick={handleClick}
                  >
                    Signin With Google
                  </button>
                </div>
              )
            }
          />
          <Route
            path="/Buy"
            element={value ? <Buy /> : <Navigate to="/" replace />}
          />
          <Route
            path="/Sell"
            element={value ? <Sell /> : <Navigate to="/" replace />}
          />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
}
