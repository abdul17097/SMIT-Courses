import React from "react";

const initialState = {
  count: 0,
  name: "John Doe",
  products: [],
  isLogin: false,
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
    case "updateName":
      return {
        ...state,
        name: action.payload,
        isLogin: true,
      };
  }
};

const CounterReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "incrementByAmount", payload: 11 })}
      >
        incrementByAmount By 10
      </button>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <button onClick={() => dispatch({ type: "updateName", payload: "Jane" })}>
        Update Name
      </button>
    </div>
  );
};

export default CounterReducer;
