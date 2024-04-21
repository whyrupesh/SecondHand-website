import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const productsRef = ref(database, "products");

    // Retrieve the data from the 'products' location in the database
    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Convert the snapshot value to an array of products
          const productsData = snapshot.val();
          const productsArray = Object.values(productsData);
          setProducts(productsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">Price: {product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
