import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      {/* <Signup /> */}
    </>
  );
}

export default App;
