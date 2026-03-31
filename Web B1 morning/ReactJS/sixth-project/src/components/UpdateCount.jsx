import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const UpdateCount = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="border">
        Update Count
      </button>
    </div>
  );
};

export default UpdateCount;
