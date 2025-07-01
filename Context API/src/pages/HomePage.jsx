import { useContext } from "react";
import { HeroSection } from "../components/heroSection/HeroSection";
import { userContext } from "../context/TestContext";

export const HomePage = () => {
  const userData = useContext(userContext);

  return (
    <div className="">
      <HeroSection />
      <h1 className="">Home Page</h1>
      <h1>User Name: {userData?.name}</h1>
    </div>
  );
};
