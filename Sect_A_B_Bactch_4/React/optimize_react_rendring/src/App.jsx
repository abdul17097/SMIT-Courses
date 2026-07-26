import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SearchInput from "./components/SearchInput";
import ProductList from "./components/ProductList";
import ChildComponent from "./components/ChildComponent";
import LandingPage from "./components/LandingPage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    console.log("child handleCount");
  }, [count]);
  console.log(theme);

  return (
    <>
      {/* Lifting state up */}
      {/* <SearchInput setSearch={setSearch} search={search} />
      <ProductList search={search} /> */}

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

      <LandingPage />
    </>
  );
}

export default App;
