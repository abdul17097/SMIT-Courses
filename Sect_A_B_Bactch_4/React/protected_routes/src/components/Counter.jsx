import React, { useState } from "react";
import DisplayName from "./DisplayName";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="border p-3 cursor-pointer rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment {count}
      </button>
      <DisplayName />
    </div>
  );
};

export default Counter;
