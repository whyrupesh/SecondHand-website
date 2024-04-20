import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "path/to/product2.jpg",
  },
  // Add more products as needed
];

const Buy = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img className="w-full" src={product.image} alt={product.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="text-gray-700 font-bold text-xl">
              {product.price}
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
