import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/Counter";
import DisplayName from "./components/DisplayName";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Counter />
      <DisplayName />
    </div>
  );
}

export default App;
