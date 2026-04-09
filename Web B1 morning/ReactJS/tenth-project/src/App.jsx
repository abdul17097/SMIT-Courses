import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/Counter";
import DisplayName from "./components/DisplayName";
import { useCounter } from "./hooks/useCounter";
import { useToogle } from "./hooks/useToogle";
import Form from "./components/Form";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  // const [count, setCount] = useState(0);
  const { count, increment } = useCounter();
  const { toogleValue, toggle } = useToogle();
  console.log(toggle);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` ${theme ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <Form />
      {/* <Counter /> */}
      <DisplayName />
      {/* <button onClick={increment}>Toogle</button> */}
      {/* <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button> */}
      <button onClick={toogleValue}>Toogle</button>
      <div
        className={`w-[400px] h-[400px] ${toggle ? "bg-blue-800" : "bg-white"} border-2 border-black border-solid mt-4`}
      ></div>
    </div>
  );
}

export default App;
