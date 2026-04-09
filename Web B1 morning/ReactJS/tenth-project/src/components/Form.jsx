import React from "react";
import { useToogle } from "../hooks/useToogle";

const Form = () => {
  const { toggle, toogleValue } = useToogle();
  return (
    <div className="border p-1 flex items-center">
      <input type={toggle ? "text" : "password"} placeholder="Enter password" />
      <span onClick={toogleValue} className="cursor-pointer">
        {toggle ? "👁" : "👀"}
      </span>
    </div>
  );
};

export default Form;
