import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };

  const [count, setCount] = useState(0);
  return (
    <userContext.Provider value={{ user, count, setCount }}>
      {children}
    </userContext.Provider>
  );
};
