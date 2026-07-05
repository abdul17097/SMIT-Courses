import React, { useState } from "react";

const MultipleState = () => {
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
    subjects: ["bio", "math"],
  });

  const handleData = () => {
    // setData({
    //   ...data,
    //   name: "hello",
    //   userDetail: { ...data.userDetail, age: 22 },
    // });
    setData({ ...data, subjects: [...data.subjects, "che"] });
  };

  console.log(data);

  return (
    <div>
      <button
        onClick={handleData}
        className="border p-3 rounded-2xl cursor-pointer"
      >
        Handle Data
      </button>
    </div>
  );
};

export default MultipleState;
