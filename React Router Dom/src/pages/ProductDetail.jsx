import { useParams } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
export const ProductDetail = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState();
  const [loading, setLoading] = useState(false);
  // console.log(productId);
  // const products = [
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     price: 99.99,
  //     description: "High-quality wireless headphones with noise-cancellation.",
  //     category: "Electronics",
  //     stock: 50,
  //     imageUrl: image1,
  //   },
  //   {
  //     id: 2,
  //     name: "Smartphone",
  //     price: 699.99,
  //     description:
  //       "Latest smartphone with a high-resolution display and fast processor.",
  //     category: "Electronics",
  //     stock: 30,
  //     imageUrl: image2,
  //   },
  //   {
  //     id: 3,
  //     name: "Running Shoes",
  //     price: 49.99,
  //     description: "Comfortable running shoes with great durability.",
  //     category: "Footwear",
  //     stock: 100,
  //     imageUrl: image3,
  //   },
  //   {
  //     id: 4,
  //     name: "Backpack",
  //     price: 29.99,
  //     description: "Lightweight and spacious backpack for everyday use.",
  //     category: "Accessories",
  //     stock: 75,
  //     imageUrl: image1,
  //   },
  //   {
  //     id: 5,
  //     name: "Coffee Maker",
  //     price: 79.99,
  //     description: "Automatic coffee maker with multiple brewing options.",
  //     category: "Home Appliances",
  //     stock: 20,
  //     imageUrl: image2,
  //   },
  // ];

  // const productDetail = products.find((item) => item.id == productId);
  // console.log(productDetail);
  const fetchProductDetail = async () => {
    setLoading(true);
    const respose = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    // console.log(respose);
    if (respose.status == 200) {
      setProductDetail(respose.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);
  console.log(loading);

  if (loading) {
    return (
      <p className="text-3xl w-full h-screen flex justify-center items-center">
        Loading...
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-semibold">Product Detail Page</h1>
      <div className="flex justify-between  w-[1005]">
        <div className="w-[40%]">
          <img src={productDetail?.images[0]} alt="" />
        </div>
        <div className="flex flex-col w-[50%] px-5 py-3 gap-5 ">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">{productDetail?.title}</h2>
            <span className="text-lg font-semibold">
              ${productDetail?.price}
            </span>
          </div>
          <div className="">
            <h2 className="font-bold text-xl">Description</h2>
            <p className="">{productDetail?.description}</p>
          </div>
          <div className="">
            <h2 className="font-bold text-xl">Category</h2>
            <p className="">{productDetail?.category?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
