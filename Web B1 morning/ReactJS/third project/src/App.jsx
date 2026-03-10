import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Todo from "./components/Todo";
import LoginForm from "./components/LoginForm";
import LoginPro from "./components/LoginPro";
import RegisterPromax from "./components/RegisterPromax";
import Signup from "./components/Signup";
import SignupPro from "./components/SignupPro";
import EmployeeRegisterForm from "./components/EmployeeRegisterForm";
import EmployeeRegisterFormPro from "./components/EmployeeRegisterFormPro";
import Books from "./components/Books";

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
      {/* <Search /> */}
      {/* <Todo /> */}
      {/* <LoginForm /> */}
      {/* <LoginPro /> */}
      {/* <RegisterPromax /> */}
      {/* <Signup /> */}
      {/* <SignupPro /> */}
      {/* <EmployeeRegisterForm /> */}
      {/* <EmployeeRegisterFormPro /> */}
      <Books />
    </>
  );
}

export default App;
