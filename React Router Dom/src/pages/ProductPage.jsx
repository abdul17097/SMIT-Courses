import { Link } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
export const ProductPage = () => {
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

  return (
    <div>
      <h1 className="text-[32px] mb-5">Product Page</h1>
      <div
        className={`flex gap-3 flex-wrap ${
          products.length > 5 ? "justify-between" : "justify-start"
        } `}
      >
        {products.map((item, index) => {
          return (
            <div className="border flex flex-col w-[14rem] rounded-lg">
              <img src={image1} alt="" className="h-[15rem] rounded-t-lg" />
              <div className="p-1 flex flex-col gap-1">
                <div className="flex justify-between">
                  <h2>{item.name}</h2>
                  <p className="">{item.category}</p>
                </div>
                <p>Description</p>
                <div className="flex justify-between mt-2">
                  <p className="text-[24px]">{item.price}</p>
                  <Link
                    to={`/product-detail/${item.id}`}
                    className="border p-2 rounded-lg bg-green-600 text-white "
                  >
                    Product Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
