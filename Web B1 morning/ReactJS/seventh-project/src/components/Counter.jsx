import React, { useReducer } from "react";

const initialState = {
  count: 5,
  name: "",
};
// action
// {
//     type: "increment" | "decrement",
//     payload: number
// }
const reducer = (state, action) => {
  // action.type = "increment" | "decrement" | "reset"
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;


