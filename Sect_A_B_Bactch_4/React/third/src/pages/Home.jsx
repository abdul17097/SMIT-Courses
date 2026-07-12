import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <button onClick={handleAbout}>About</button>
      <p>Home</p>
    </div>
  );
};

export default Home;
