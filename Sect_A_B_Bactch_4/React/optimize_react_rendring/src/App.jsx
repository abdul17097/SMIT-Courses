import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ProductList from "./components/ProductList";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    console.log("child handleCount");
  }, [count]);
  return (
    <>
      {/* Lifting state up */}
      <SearchInput setSearch={setSearch} search={search} />
      <ProductList search={search} />

      {/* useCallbacke */}
      {/* <div className="">
        <button
          className="border p-2 rounded-2xl cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          count: {count}
        </button>
        <ChildComponent handleCount={handleCount} />
      </div> */}
    </>
  );
}

export default App;
