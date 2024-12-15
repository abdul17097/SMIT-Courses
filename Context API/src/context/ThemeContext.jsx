import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeToggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
