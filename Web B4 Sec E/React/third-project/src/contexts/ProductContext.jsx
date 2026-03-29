import { createContext, useState } from "react";

// Product Context
export const ProductContext = createContext();

// Product Provider
export const ProductProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <ProductContext.Provider value={{ count, setCount }}>
      {children}
    </ProductContext.Provider>
  );
};
