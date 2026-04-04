import React, { useReducer } from "react";

const initialState = {
  count: 0,
  name: "John Doe",
};

// action {
//     type: "increment",
//     payload: 10
// }
const reducer = (state, action) => {
  // increment
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "incrementByAmount":
      return {
        ...state,
        count: state.count + action.payload,
      };
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "incrementByAmount", payload: 10 })}
      >
        incrementByAmount By 10
      </button>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
    </div>
  );
};

export default CounterReducer;
