import React, { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { app } from "@/firebaseConfig";
const ProductForm = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);

  const [formData, setFormData] = useState({
    title: "",
    productCode: "",
    description: "",
    picture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    setFormData((prev) => ({
      ...prev,
      picture: file,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "product"), {
      title: formData.title,
      productCode: formData.productCode,
      description: formData.description,
      picture: formData.picture.name,
    });
    console.log("Product Created:", docRef);

    // Reset the form after submission
    setFormData({
      title: "",
      productCode: "",
      description: "",
      picture: null,
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      const querySnapshot = await getDocs(collection(db, "product"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };
    getProduct();
  }, []);
  return (
    <div className="max-w-[30rem] mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleCreate}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter product title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productCode"
            className="block text-sm font-medium text-gray-700"
          >
            Product Unique Code
          </label>
          <input
            type="text"
            id="productCode"
            name="productCode"
            value={formData.productCode}
            onChange={handleInputChange}
            placeholder="Enter unique product code"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="picture"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Picture
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
