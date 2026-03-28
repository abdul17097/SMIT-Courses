import React from "react";
import { products } from "../constants/product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  console.log(product);

  return (
    <div className="flex flex-col">
      <label htmlFor="">Product Name: {product.name}</label>
      <label htmlFor="">Product Price: {product.price}</label>
      <label htmlFor="">Product Category: {product.category}</label>
    </div>
  );
};

export default ProductDetails;
