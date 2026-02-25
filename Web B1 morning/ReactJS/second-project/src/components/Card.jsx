import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        border: "2px solid black",
        width: "200px",
        height: "200px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
