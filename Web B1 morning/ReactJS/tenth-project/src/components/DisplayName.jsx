import React, { useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeName } from "../features/counterSlice";
import { useCounter } from "../hooks/useCounter";
import { ThemeContext } from "../contexts/ThemeContext";

const DisplayName = () => {
  // const name = useSelector((state) => state.counter.name);
  // const dispatch = useDispatch();
  const { increment, count } = useCounter();
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <div>
      <h2>DisplayName: {name}</h2>
      <button
        className="border rounded-2xl p-1"
        onClick={() => setTheme(!theme)}
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={increment}>Increment</button>
      <p>Counter: {count}</p>
      {/* <button
        onClick={() => dispatch(changeName("Alice"))}
        className="border p-2"
      >
        Change Name
      </button> */}
    </div>
  );
};

export default DisplayName;
