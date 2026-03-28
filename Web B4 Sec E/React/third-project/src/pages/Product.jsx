import React from "react";
import { products } from "../constants/product";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <div className="flex flex-wrap gap-5 px-10 ">
        {products.map((product) => (
          <div className="border p-3 rounded">
            <h2>{product.name}</h2>
            <p className="">${product.price}</p>
            <p>{product.category}</p>
            <NavLink
              className="border bg-black text-white p-1 rounded"
              to={`/product-details/${product.id}`}
            >
              Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
