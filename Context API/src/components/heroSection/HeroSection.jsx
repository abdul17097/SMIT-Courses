import React, { useContext, useState } from "react";
import { userContext } from "../../context/TestContext";
import image1 from "../../assets/image1.jpg";
import "./HeroSection.css";
import { styled } from "styled-components";
export const HeroSection = () => {
  const userData = useContext(userContext);
  console.log(userData);
  const [userLogin, setUserLogin] = useState(true);
  const Button = styled.button`
    background-color: ${({ success }) => (success ? "green" : "red")};
    font-size: ${({ size }) => `${size}px`};
  `;
  return (
    <div>
      <h1>User Name:{userData?.name}</h1>
      <img src={image1} alt="" className="heroImag" />
      {/* <button>{userLogin ? "Logout" : "Login"}</button> */}
      <Button success={true} size={12}>
        Login
      </Button>
      <Button success={true} size={20}>
        Login
      </Button>
    </div>
  );
};
