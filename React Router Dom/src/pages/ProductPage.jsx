import { Link } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  // console.log(productId);
  // const productDetail = products.find((item) => item.id == productId);
  // console.log(productDetail);
  const fetchProduct = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    console.log(response.data);

    setProducts(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h1 className="text-[32px] mb-5">Product Page</h1>
      <div
        className={`flex gap-3 flex-wrap ${
          products?.length > 5 ? "justify-between" : "justify-start"
        } `}
      >
        {products?.map((product, index) => {
          return (
            <div
              className="border flex flex-col w-[14rem] rounded-lg"
              key={index}
            >
              <img
                src={product?.images[0]}
                alt=""
                className="h-[15rem] rounded-t-lg"
              />
              <div className="p-1 flex flex-col gap-1">
                <div className="flex justify-between">
                  <h2 className="w-[10rem] truncate">{product?.title}</h2>
                  <p className="font-semibold">${product?.price}</p>
                </div>
                <p>Category</p>
                <div className="flex justify-between mt-2">
                  <p className="capitalize font-semibold">
                    {product?.category?.name}
                  </p>
                  <Link
                    to={`/product-detail/${product?.id}`}
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
