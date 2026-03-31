import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const DisplayCount = () => {
  const data = useContext(CounterContext);

  return <div>Count: {data.count}</div>;
};

export default DisplayCount;
