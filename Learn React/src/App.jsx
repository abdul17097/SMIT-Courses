import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { Home } from "./Pages/Home";
import { CounterUl } from "./components/Dynamic_props/CounterUl";
import { ListAndKeys } from "./components/ListAndKeys";
function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <CounterUl /> */}
      <ListAndKeys />
    </>
  );
}

export default App;
