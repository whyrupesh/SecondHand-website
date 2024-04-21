import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import { FaRupeeSign } from "react-icons/fa";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const database = getDatabase();
    const productRef = ref(database, `products/${id}`);

    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct(snapshot.val());
        } else {
          console.log("No data available for the product with ID: " + id);
        }
      })
      .catch((error) => {
        console.error("Error getting product data:", error);
      });
  }, [id]);

  return (
    <div>
      {product ? (
        <div className="flex justify-center py-8">
          <div className="max-w-lg mx-auto">
            <div>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
              <p className="text-gray-600 mb-2 flex">
                Listed Price:&nbsp;&nbsp; <FaRupeeSign className="my-2" />
                <span className="text-green-600 text-lg font-bold mb-2">
                  {product.price}
                </span>
              </p>
              <p className="mt-4">{product.description}</p>
            </div>
            {/* Render other product details */}
            {/* chat button */}
            <div className="mt-6">
              <a
                href={`https://wa.me/${product.phone}?text=${encodeURIComponent(
                  `Hi, I wanted to buy your product: *${product.name}* listed on SecondHand.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Chat with Seller
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
