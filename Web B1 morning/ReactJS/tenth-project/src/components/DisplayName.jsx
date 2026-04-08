import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../features/counterSlice";

const DisplayName = () => {
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>DisplayName: {name}</h2>
      <button
        onClick={() => dispatch(changeName("Alice"))}
        className="border p-2"
      >
        Change Name
      </button>
    </div>
  );
};

export default DisplayName;
