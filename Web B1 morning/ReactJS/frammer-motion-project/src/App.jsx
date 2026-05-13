import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { motion } from "motion/react";
import "./App.css";
import ScrollLinked from "./components/ScrollLinked";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-[200px] justify-center w-full mt-[90px]">
      {/* <motion.h1 animate={{ rotate: 360 }}>Hello world</motion.h1> */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{
          rotate: 130,
          scale: 1,
          transition: { duration: 5 },
        }}
        className="w-[50px] h-[50px] bg-red-800 border"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 5 } }}
        // animate={{
        //   rotate: 130,

        //   transition: { duration: 5 },
        // }}
        className="w-[50px] h-[50px] bg-red-800 border"
      ></motion.div>
      <div className="w-full flex justify-around">
        <motion.div
          // initial={{ translateX: -100 }}
          // whileInView={{ translateX: 0, transition: { duration: 1 } }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 3 } }}
          className="border w-[30%] h-[100px] bg-sky-600"
        ></motion.div>
        <motion.div
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0, transition: { duration: 1 } }}
          className="border w-[30%] h-[100px] bg-sky-900"
        ></motion.div>
      </div> */}
      {/* <ScrollLinked /> */}
      <ProductList />
    </div>
  );
}

export default App;
