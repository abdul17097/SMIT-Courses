import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmad");
  //   let count = 0;

  //   function Increment() {
  //     // count++
  //     count = count + 1;
  //     console.log(count);
  //   }

  //   function Increment() {
  //     setCount(count + 1);
  //     console.log(count);
  //   }

  const Increment = () => {
    setCount(5);
  };

  const changeName = () => {
    setName("Hadeed");
  };
  return (
    <div>
      <h1 className="text-[24px]">Counter</h1>
      <p className="border">Count: {count}</p>
      <button
        className="border p-1 rounded-2xl mt-3 cursor-pointer"
        onClick={Increment}
      >
        Increment
      </button>

      <h2>Name : {name}</h2>
      <button
        onClick={changeName}
        className="border p-1 rounded-2xl mt-3 cursor-pointer"
      >
        Change Name
      </button>
    </div>
  );
};

export default Counter;
