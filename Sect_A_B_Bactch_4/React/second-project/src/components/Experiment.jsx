import React, { useState } from "react";

const Experiment = () => {
  //   const [name, setName] = useState("khan");
  //   const [userDetail, setUserDetail] = useState({
  //     id: null,
  //     name: "",
  //     age: null,
  //   });
  //   const [toggle, setToggle] = useState("dark");
  const [data, setData] = useState({
    name: "khan",
    userDetail: { id: null, name: "", age: null },
    toggle: "dark",
  });
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
        onClick={() => setName("hello")}
        className="border p-2 cursor-pointer rounded-2xl"
      >
        Change Name
      </button>
    </div>
  );
};

export default Experiment;
