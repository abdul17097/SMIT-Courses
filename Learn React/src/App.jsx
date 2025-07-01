import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { Home } from "./Pages/Home";
import { CounterUl } from "./components/Dynamic_props/CounterUl";
import { ListAndKeys } from "./components/ListAndKeys";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/counterSlice";
function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();
  // Expensive calculation (runs on every render)
  // const computeExpensiveCalculation = () => {
  //   console.log("Computing...");
  //   for (let i = 0; i < 109; i++) {
  //     console.log(i);
  //   } // Simulate heavy computation
  //   return count * 2;
  // };

  // const result = computeExpensiveCalculation();
  return (
    <>
      <h1>Redux Store</h1>
      <p>Increment: {count.count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  );
}

export default App;
