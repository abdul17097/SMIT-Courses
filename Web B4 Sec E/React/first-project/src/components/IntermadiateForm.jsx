import React, { useState } from "react";

const IntermadiateForm = () => {
  const [productFormData, setProductFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

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
          onChange={(e) =>
            setProductFormData({ ...productFormData, name: e.target.value })
          }
          className="border"
          type="text"
          name="title"
          value={productFormData.name}
        />
        <br />
        <label htmlFor="">Description:</label>
        <input
          onChange={(e) =>
            setProductFormData({
              ...productFormData,
              description: e.target.value,
            })
          }
          className="border"
          type="text"
          name="description"
          value={productFormData.description}
        />
        <br />
        <label htmlFor="">Price:</label>
        <input
          onChange={(e) =>
            setProductFormData({ ...productFormData, price: e.target.value })
          }
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

export default IntermadiateForm;
