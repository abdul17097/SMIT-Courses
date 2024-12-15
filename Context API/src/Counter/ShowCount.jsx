import React, { useContext } from "react";
import { userContext } from "../context/TestContext";

export const ShowCount = () => {
  const { count } = useContext(userContext);
  console.log(count);

  return (
    <div>
      <div className="border w-[5rem] h-[5rem] text-xl rounded-lg border-black flex justify-center items-center">
        {count}
      </div>
    </div>
  );
};
