import React, { useState } from "react";

const UserForm = () => {
  let [nameValue, setNameValue] = useState("");

  const handleName = (event) => {
    setNameValue(event.target.value);
  };

  return (
    <div className="">
      Name: {nameValue}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(nameValue);
        }}
      >
        <input
          type="text"
          name="name"
          className="border"
          onChange={handleName}
        />

        <button className="border rounded-2xl p-1 cursor-pointer">
          Submit
        </button>
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          something
        </button>
      </form>
    </div>
  );
};

export default UserForm;
