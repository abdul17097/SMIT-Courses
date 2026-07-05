import React, { useState } from "react";

const Experiment = () => {
  //   let name = "khan";
  const handleChangeName = () => {
    // name = "hello";
    setName("hello");
  };

  return (
    <div>
      <p className="border">{name}</p>
      <button
        // onClick={handleChangeName}
        // onClick={() => setName("hello")}
        className="border p-2 cursor-pointer rounded-2xl"
      >
        Change Name
      </button>
    </div>
  );
};

export default Experiment;
