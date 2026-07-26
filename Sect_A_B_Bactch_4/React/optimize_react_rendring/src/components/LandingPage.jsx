import React, { useReducer } from "react";
import { useTheme } from "../hooks/useTheme";

const LandingPage = () => {
  const { theme, setTheme } = useTheme();

  const intiailState = {
    userData: {},
    theme: true,
    count: 0,
    products: [],
    error: "",
    loading: true,
  };
  const [state, dispatch] = useReducer(reducer, intiailState);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "INCREMENT_By_5":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count >= 1 ? state.count - 1 : 0,
        };
      case "DECREMENT_By_5":
        return {
          ...state,
          count: state.count >= 1 ? state.count - action.payload : 0,
        };
      case "LOGIN":
        return {
          ...state,
          userData: { name: "test", email: "test@gmail.com" },
        };
      case "UPDATE_LOADING":
        return {
          ...state,
          loading: action.payload,
        };

      default:
        return {
          ...state,
          error: "Something went Wrong",
        };
    }
  }
  console.log(state.count);
  console.log(theme);

  const handleLogin = () => {
    dispatch({ type: "UPDATE_LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "LOGIN" });
      dispatch({ type: "UPDATE_LOADING", payload: false });
    }, 2000);
  };

  return (
    <div>
      <p className="">Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="border p-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT_By_5", payload: 5 })}
        className="border p-2 rounded-lg cursor-pointer"
      >
        Increment by 5
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="border p-2 rounded-lg cursor-pointer"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT_By_", payload: 5 })}
        className="border p-2 rounded-lg cursor-pointer"
      >
        Decrement By 5
      </button>
      <p>{state.error && state.error}</p>
      <button
        onClick={handleLogin}
        className="border p-2 rounded-lg cursor-pointer"
      >
        {state.loading ? "Login..." : "Login"}
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="border p-2 rounded-lg cursor-pointer"
      >
        Toggole Theme
      </button>
    </div>
  );
};

export default LandingPage;
