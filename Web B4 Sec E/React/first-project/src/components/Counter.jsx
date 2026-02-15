import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  // let count = 0;
  // const increment = () => {
  //   count = count + 1;
  //   alert(count);
  // };

  console.log("Render");

  return (
    <div className="">
      <h1 className="">Counter APP</h1>
      <p>count: {count}</p>
      <button
        className="border p-[10px] rounded-[10px] cursor-pointer"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};
