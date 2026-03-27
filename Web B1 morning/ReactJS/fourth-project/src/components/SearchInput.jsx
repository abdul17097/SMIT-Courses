import React from "react";

const SearchInput = ({ setSearchQuery }) => {
  let handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="flex flex-col gap-2 p-5">
      <label htmlFor="">Search:</label>
      <input
        className="p-2 rounded border"
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
