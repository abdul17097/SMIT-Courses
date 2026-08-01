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
import { Button } from "./components/ui/button";
import { FAQ } from "./components/FAQ";
import { ProductCard } from "./components/ProductCard";
import { StudentsChart } from "./components/StudentsChart";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { motion } from "motion/react";

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
      <Button className={"bg-amber-700"} onClick={() => setCount(count + 1)}>
        Click ME
      </Button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        // whileHover={{ scale: 1.2, rotate: 360 }}
        className="border py-5 w-fit px-5 m-auto"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
        obcaecati!
      </motion.p>

      {/* <DashboardLayout /> */}
      {/* <FAQ />
      <ProductCard />
      <StudentsChart /> */}
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

      {/* <LandingPage /> */}
    </>
  );
}

export default App;
