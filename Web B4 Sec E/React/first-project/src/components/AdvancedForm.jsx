import React, { useState } from "react";

const AdvancedForm = () => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleInput = (e) => {
    console.log(e.target.name);
    // if(e.target.name == "name")
    // if(e.target.name == "description")
    // if(e.target.name == "price")
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
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

  //   console.log(productFormData);

  return (
    <div>
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title:</label>
        <input
          onChange={handleInput}
          className="border"
          type="text"
          name="title"
          value={productFormData.name}
        />
        <br />
        <label htmlFor="">Description:</label>
        <input
          onChange={handleInput}
          className="border"
          type="text"
          name="description"
          value={productFormData.description}
        />
        <br />
        <label htmlFor="">Price:</label>
        <input
          onChange={handleInput}
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

export default AdvancedForm;
