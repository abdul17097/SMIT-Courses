import React from "react";
import image1 from "../assets/featured_product/image1.png";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  console.log(cartProducts);

  return (
    <div className=" px-10 flex flex-col gap-5">
      {cartProducts.map((product) => (
        <div className="flex border border-black w-full" key={product.id}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div className="flex justify-around w-full items-center">
            <div className="">
              <h1 className="">title</h1>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="">
              <span className="">$343</span>
            </div>
            <div className="">Quantity</div>
            <div className="">Total</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
