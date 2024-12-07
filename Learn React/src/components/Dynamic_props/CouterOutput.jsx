import React from "react";
// code Spell Extensions
export const CouterOutput = ({ count, message = "Default Props" }) => {
  return (
    <div>
      <h1>Counter Output</h1>
      <div className="">
        <span>Count: {count}</span>
        <p className="">{message}</p>
      </div>
    </div>
  );
};
