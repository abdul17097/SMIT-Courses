import React, { useEffect, useState } from "react";
import { CouterOutput } from "./CouterOutput";

export const CounterUl = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const data = ["Shoes", "Boots"];
      setProduct(data);
      console.log("Data fetched successfully");
    }, 5000);
  }, [count]);

  console.log("outside:", product);

  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <h1>CounterUl</h1>
        <div className="flex gap-5">
          <button
            className="border border-green-800 rounded-lg px-3"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="border border-green-800 rounded-lg px-3"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      <CouterOutput count={count} />
    </div>
  );
};
