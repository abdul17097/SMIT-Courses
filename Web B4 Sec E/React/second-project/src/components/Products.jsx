import React, { useState } from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
  },
];

const Products = () => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    let matched = cart.find((item) => item.id === product.id);
    if (!matched) {
      setCart([...cart, product]);
    } else {
      alert("product already exist!");
    }
  }
  console.log(cart);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard addToCart={addToCart} product={product} />
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4 mt-10">Cart</h2>
      <div className="flex gap-2.5">
        {cart.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
