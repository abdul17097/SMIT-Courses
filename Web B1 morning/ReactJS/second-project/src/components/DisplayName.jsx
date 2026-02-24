import React from "react";

const DisplayName = ({ name = "Guest" }) => {
  console.log(name);

  return <div>Name: {name}</div>;
};

export default DisplayName;
