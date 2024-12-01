import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
function App() {
  // const [message, setMessage] = useState("Welcome to SMIT Again");
  // setMessage("How are you?");
  // const message = "Welcome to SMIT";
  // const handleText = () => {
  //   setMessage("How are you?");
  // };

  // const [userName, setUserName] = useState();
  // const [storeUserName, setStoreUserName] = useState();

  return (
    <>
      <Login />
      {/* <h1 className="border bg-red-700">Print User Name</h1>
      <label htmlFor="">userName: </label>
      <p>{userName}</p>

      <input
        type="text"
        onChange={(event) => {
          setStoreUserName(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(storeUserName);
        }}
      >
        print
      </button> */}
      {/* <button onClick={() => setMessage("senga ye")}>Update Text</button> */}
    </>
  );
}

export default App;
