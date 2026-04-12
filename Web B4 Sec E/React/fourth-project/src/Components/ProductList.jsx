import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Headphones",
      price: 120,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Smartphone",
      price: 600,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Watch",
      price: 150,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="p-6">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow hover:shadow-lg p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-cover mb-4 rounded"
            />

            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
