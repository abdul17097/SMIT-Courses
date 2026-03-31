import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// let name = "CounterProvider";
// let userDetails = {
//     name
// }
