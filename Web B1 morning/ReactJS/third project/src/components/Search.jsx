import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [finalOutput, setFinalOutput] = useState("");

  let handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="border p-2 rounded flex flex-col">
        <label htmlFor="">Text Counter</label>
        <div className="flex gap-2">
          <input
            type="text"
            onChange={handleSearch}
            className="border rounded-2xl p-2"
          />
          <button
            onClick={() => setFinalOutput(search)}
            className="border cursor-pointer bg-amber-100 text-green-900 px-5 py-2 rounded-2xl"
          >
            Find
          </button>
        </div>
      </div>
      <p className="border rounded-2xl mt-3 p-2"> output: {finalOutput}</p>
      <p className="border rounded-2xl mt-3 p-2">
        {" "}
        Character Count: {finalOutput.length}
      </p>
      <p className="border rounded-2xl mt-3 p-2">
        {" "}
        Word Count: {finalOutput.split(" ").length}
      </p>
    </div>
  );
};

export default Search;
