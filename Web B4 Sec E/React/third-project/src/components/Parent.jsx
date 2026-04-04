import React, { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");

  const updatedCount = useMemo(() => {
    let result = count * 3;
    console.log("updatedCount function called");

    return result;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>updated Count: {updatedCount}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="border p-2 cursor-pointer"
      >
        Increment
      </button>
      <br />
      <p>User Name: {name}</p>
      <button onClick={() => setName("Jane")}>Update Name</button>
      <Child />
    </div>
  );
};

export default Parent;
