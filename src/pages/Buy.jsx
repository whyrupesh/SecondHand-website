import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Buy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {isLoading ? <div>Loading...</div> : <ProductList />}
    </div>
  );
};

export default Buy;
