import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="">
      <h1 className="">Counter APP</h1>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
