import React, { useContext, useState } from "react";
import { userContext } from "../context/TestContext";

export const UpdateCounter = () => {
  const { count, setCount } = useContext(userContext);

  const handleIncrement = () => {
    // setCount((count) => count + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={handleIncrement}
          className="border border-black px-2 py-1 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="border border-black px-2 py-1 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
