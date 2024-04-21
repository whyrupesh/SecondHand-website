import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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
      <h2 className="text-2xl font-bold mb-4 ">Listed Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 active:scale-95">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2 flex">
                Listed Price:&nbsp;&nbsp; <FaRupeeSign className="my-2" />
                <span className="text-green-600 text-lg font-bold mb-2">
                  {product.price}
                </span>
              </p>
              <p className="text-gray-600 line-clamp-3">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
