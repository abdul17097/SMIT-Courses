import React, { useState } from "react";

const ProductForm = () => {
  const [productFormData, setProductFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleName = (event) => {
    console.log(event.target.value);

    setProductFormData({ ...productFormData, name: event.target.value });
  };
  const handleDesc = (event) => {
    setProductFormData({ ...productFormData, description: event.target.value });
  };
  const handlePrice = (event) => {
    setProductFormData({ ...productFormData, price: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productFormData);
    setProductFormData({
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <div>
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input
          onChange={handleName}
          className="border"
          type="text"
          name="title"
          value={productFormData.name}
        />
        <br />
        <label htmlFor="">Description:</label>
        <input
          onChange={handleDesc}
          className="border"
          type="text"
          name="description"
          value={productFormData.description}
        />
        <br />
        <label htmlFor="">Price:</label>
        <input
          onChange={handlePrice}
          className="border"
          type="number"
          name="price"
          value={productFormData.price}
        />
        <br />
        <button type="submit" className="border cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
