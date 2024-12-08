import { useParams } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
export const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise-cancellation.",
      category: "Electronics",
      stock: 50,
      imageUrl: image1,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      description:
        "Latest smartphone with a high-resolution display and fast processor.",
      category: "Electronics",
      stock: 30,
      imageUrl: image2,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 49.99,
      description: "Comfortable running shoes with great durability.",
      category: "Footwear",
      stock: 100,
      imageUrl: image3,
    },
    {
      id: 4,
      name: "Backpack",
      price: 29.99,
      description: "Lightweight and spacious backpack for everyday use.",
      category: "Accessories",
      stock: 75,
      imageUrl: image1,
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 79.99,
      description: "Automatic coffee maker with multiple brewing options.",
      category: "Home Appliances",
      stock: 20,
      imageUrl: image2,
    },
  ];
  const productDetail = products.filter((item) => item.id === productId);
  console.log(productDetail);

  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  );
};
