import React from "react";
import image1 from "../assets/featured_product/image1.png";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/slices/FavoriteSlice";
const Favorite = () => {
  const state = useSelector((state) => state.favorite);
  console.log(state);
  const dispatch = useDispatch();
  const handleFavorite = (data) => {
    dispatch(toggleFavorite(data));
  };
  const handleCart = () => {
    console.log("Cart");
  };
  return (
    <div className=" px-12 flex flex-col gap-5">
      {state?.favoriteProducts?.map((product) => (
        <div
          className="w-[100%]  flex h-[16rem] justify-between"
          key={product.id}
        >
          <div className="w-[20%]">
            <img src={image1} className="w-full h-full " alt="" />
          </div>
          <div className="w-[70%] flex flex-col justify-center gap-3 ">
            <h1 className="text-4xl font-bold text-blue-950 capitalize">
              {product.title}
            </h1>
            <div className="flex gap-5">
              <span className="">$500</span>
              <span className="line-through text-red-800">$300</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              reprehenderit expedita hic distinctio earum incidunt quibusdam
              illo nemo aspernatur, dolor inventore cumque, eos dolorem
              reiciendis non similique maxime minus officiis.
            </p>
            <div className="flex gap-3 mt-5">
              <FaHeart
                onClick={() => handleFavorite(product)}
                className="text-[1.3rem] lg:text-[1.5rem] text-[red] cursor-pointer"
              />
              <CiShoppingCart
                onClick={handleCart}
                className="text-[1.3rem] lg:text-[1.5rem] cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
