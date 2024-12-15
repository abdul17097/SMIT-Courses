import React, { useContext } from "react";
import { userContext } from "../context/TestContext";

export const HeroSection = () => {
  const userData = useContext(userContext);
  console.log(userData);

  return (
    <div>
      <h1>User Name:{userData?.name}</h1>
    </div>
  );
};
