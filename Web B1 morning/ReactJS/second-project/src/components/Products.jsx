import React, { useState } from "react";
import { products } from "../constants/product";

const Products = () => {
  const [productData, setProductData] = useState(products);

  let handleAddProduct = () => {
    // add new Data
    setProductData([
      ...productData,
      {
        id: 5,
        name: "iPhone 18",
        brand: "Next Apple",
        category: "Smartphone",
        price: 999999,
        inStock: true,
      },
    ]);
  };

  console.log(productData);

  return (
    <div>
      <h1>Products</h1>
      <p>Number of products: {productData.length}</p>
      <button
        onClick={handleAddProduct}
        className="border rounded-2xl bg-amber-100 p-2 mt-1"
      >
        Add New Product
      </button>
    </div>
  );
};

export default Products;
