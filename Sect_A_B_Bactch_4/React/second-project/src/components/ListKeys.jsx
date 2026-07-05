import React, { useState } from "react";

const ListKeys = () => {
  //   const [subjects, setSubjects] = useState([
  //     "bio",
  //     "che",
  //     "math",
  //     "isl",
  //     "eng",
  //     "urdu",
  //     "phy",
  //   ]);
  const [subjects, setSubjects] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleDeleteItem = (item) => {
    // setSubjects([...subjects, "ps"]);
    // console.log(item)

    const updatedSubjects = subjects.filter((sub) => sub !== item);
    setSubjects([...updatedSubjects]);
  };

  const handleAdd = () => {
    if (inputValue !== "") {
      setSubjects([...subjects, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div>
      <h1 className="text-center text-4xl my-5">Subjects Lists</h1>
      <div className="m-auto  w-[450px] mb-3 gap-5 flex items-center justify-between">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="border  block px-3 w-full py-2 outline-none rounded-2xl "
          placeholder="Enter subject..."
          value={inputValue}
        />
        <button onClick={handleAdd} className="border px-2 py-2 rounded-2xl">
          Add
        </button>
      </div>
      <ul className="border rounded-2xl w-[450px] m-auto p-10 flex flex-col gap-3">
        {Array.isArray(subjects) &&
          subjects.map((sub, index) => {
            return (
              <li
                onClick={() => handleDeleteItem(sub)}
                key={sub}
                className="border p-2 rounded-2xl capitalize cursor-pointer"
              >
                {sub}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListKeys;
