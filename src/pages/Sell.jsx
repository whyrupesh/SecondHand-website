import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

//secondhand-web
const firebaseConfig = {
  apiKey: "AIzaSyAWUBJIuFU-iRp6ELkH2-_jT2xxWHSBL8A",
  authDomain: "secondhand-website.firebaseapp.com",
  projectId: "secondhand-website",
  storageBucket: "secondhand-website.appspot.com",
  messagingSenderId: "572969560141",
  appId: "1:572969560141:web:eb6e06432ee4606b125404",
  databaseURL: "https://secondhand-website-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Sell = () => {
  const [product, setProduct] = useState({
    img: "",
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProduct((prevProduct) => ({
        ...prevProduct,
        img: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID for the product
    const productId = uuidv4();

    // Create a new product object
    const newProduct = {
      id: productId,
      img: product.img,
      name: product.name,
      price: product.price,
      description: product.description,
    };

    // Save the new product to the database
    set(ref(database, "products/" + productId), newProduct)
      .then(() => {
        console.log("Product added successfully!");
        // Reset the form
        setProduct({
          img: "",
          name: "",
          price: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Add Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="img" className="block mb-2 font-medium">
            Product Image
          </label>
          <div className="relative border-dashed border-2 border-gray-300 bg-gray-100 rounded-md p-4">
            {product.img ? (
              <img
                src={product.img}
                alt="Product"
                className="w-full h-40 object-cover mb-4"
              />
            ) : (
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h3a1 1 0 110 2H7a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  Drag and drop or choose a file
                </p>
              </div>
            )}
            <input
              type="file"
              id="img"
              name="img"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the product name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the product price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the product description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Your Product
        </button>
      </form>
    </div>
  );
};

export default Sell;
