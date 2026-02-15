import React, { useState } from "react";

const Navbar = () => {
  //   const [name, setName] = useState("test");

  //   const [userDetial, setUserDetail] = useState({
  //     id: 1,
  //     name: "Jawad",
  //     age: 21,
  //     grade: "A",
  //   });

  //   const chnageName = () => {
  //     setName("test2");
  //   };

  //   const addNewUser = () => {
  //     setUserDetail({
  //       id: 2,
  //       name: "Fahad",
  //       age: 23,
  //       grade: "B",
  //     });
  //   };

  //   const updateUser = () => {
  //     setUserDetail({ ...userDetial, name: "Mohsin" });
  //   };
  const [items, setItems] = useState([1, 2, 3]);
  const addNewItem = () => {
    setItems([...items, 5, 6, 4, "test"]);
  };

  return (
    <div>
      <ul className="border py-[10px] px-[5px] rounded-2xl flex flex-col gap-[5px] m-[10px]">
        {items.map((item) => (
          <li className="border p-2 rounded-2xl">{item}</li>
        ))}
      </ul>
      <button onClick={addNewItem}>Add New Item</button>
      {/* <div>
        <p>Name: {name}</p>
        <button className="border rounded-2xl p-[3px]" onClick={chnageName}>
          change name
        </button>
        <div className="">
          <p>ID: {userDetial.id}</p>
          <p>Name: {userDetial.name}</p>
        </div>
        <p>Age: {userDetial.age}</p>
        <p>Grade: {userDetial.grade}</p>
        <button onClick={addNewUser} className="border rounded-2xl p-[3px]">
          Add New User
        </button>

        <button
          onClick={updateUser}
          className="border rounded-2xl p-[3px] bg-amber-900 text-white"
        >
          update User
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
