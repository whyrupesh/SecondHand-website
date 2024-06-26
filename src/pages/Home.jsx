import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Navigate to the buy page
    navigate("/Buy");
  };

  const handleSellClick = () => {
    // Navigate to the sell page
    navigate("/Sell");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold mb-8">Sell and Buy old Goods</h1>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBuyClick}
        >
          Buy a Product
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSellClick}
        >
          Sell your Product
        </button>
      </div>
    </div>
  );
};

export default Home;
