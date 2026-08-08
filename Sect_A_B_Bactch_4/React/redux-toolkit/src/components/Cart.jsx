import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3">
      <button
        onClick={() =>
          dispatch(
            addToCart({ id: 1, name: "Product 1", price: 10, quantity: 1 }),
          )
        }
        className="border p-3 rounded-lg cursor-pointer"
      >
        Add To Cart
      </button>
      <button className="border p-3 rounded-lg cursor-pointer">
        Delete Cart product
      </button>
    </div>
  );
};

export default Cart;
