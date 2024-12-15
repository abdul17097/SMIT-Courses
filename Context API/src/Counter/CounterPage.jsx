import React from "react";
import { ShowCount } from "./ShowCount";
import { UpdateCounter } from "./UpdateCounter";

export const CounterPage = () => {
  return (
    <>
      <div className="flex gap-3 flex-col">
        <h1>Counter APP</h1>
        <ShowCount />
        <UpdateCounter />
      </div>
    </>
  );
};
