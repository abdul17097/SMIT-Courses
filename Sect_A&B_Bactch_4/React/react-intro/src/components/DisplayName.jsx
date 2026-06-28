import React, { useState } from "react";

const DisplayName = () => {
  // Syntax
  // const [currentState, updetedFn] = useState(initialState)

  //useState with String
  const [name, setName] = useState("ali");

  //  useState with Array
  const [skills, setSkills] = useState(["python"]);

  function addSkils() {
    setSkills([...skills, "javascript"]);
  }
  console.log(skills);

  //   const [hello, setHello] = useState("world");
  //   const [userDetails, setUserDetails] = useState({name: "ali"})
  function ChangeName() {
    setName("khan");
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button
        className="border rounded p-3 cursor-pointer"
        onClick={ChangeName}
      >
        Change Name
      </button>
      <button className="border rounded p-3 cursor-pointer" onClick={addSkils}>
        Add New Skills
      </button>
    </div>
  );
};

export default DisplayName;
