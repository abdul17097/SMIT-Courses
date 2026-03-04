import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  let handleIncByFive = (value) => {
    console.log(value);
  };

  return (
    <>
      {/* <h1 onClick={handleFn}>Welcome</h1> */}
      {/* <h1 onClick={() => handleFn(id)}>Welcome</h1> */}

      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <h2>Count: {count}</h2> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => handleIncByFive(5)}>Increment by 5</button> */}
      <Search />
    </>
  );
}

export default App;
