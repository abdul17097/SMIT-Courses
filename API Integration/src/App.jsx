import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "./components/Task";
const App = () => {
  const count = useSelector((state) => state.count);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleInecrementByAmount = () => {
    dispatch({ type: "INCREMENT_BY_AMOUNT", payload: data });
    setData(0);
  };

  return (
    // <div className="flex flex-col gap-7 m-10">
    //   <h1>Count: {count}</h1>
    //   <input
    //     type="text"
    //     className="border"
    //     value={data}
    //     onChange={(e) => setData(Number(e.target.value))}
    //   />
    //   <div className="flex gap-5">
    //     <button
    //       onClick={handleIncrement}
    //       className="border p-3 border-black rounded-lg"
    //     >
    //       Increment
    //     </button>

    //     <button
    //       onClick={handleDecrement}
    //       className="border p-3 border-black rounded-lg"
    //     >
    //       Decrement
    //     </button>

    //     <button
    //       onClick={handleInecrementByAmount}
    //       className="border p-3 border-black rounded-lg"
    //     >
    //       Increment by Amount
    //     </button>
    //   </div>
    // </div>
    <>
      <Task />
    </>
  );
};

export default App;
