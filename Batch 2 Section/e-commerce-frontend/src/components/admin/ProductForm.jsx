import { useState } from "react";
import { api } from "@/api/axiosInstance";

export default function ProductForm({ product }) {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    category: product?.category || "",
    stock: product?.stock || "",
    image: product?.image || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await api.put(`/products/${product._id}`, formData);
      } else {
        await api.post("/products", formData);
      }
      window.location.href = "/admin/products";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {product ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
}
