import { useState } from "react";

import "./App.css";
import DisplayCount from "./components/DisplayCount";
import UpdateCount from "./components/UpdateCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DisplayCount />
      <UpdateCount />
    </div>
  );
}

export default App;
