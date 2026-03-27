import React from "react";

const SearchButton = ({ handleSearch }) => {
  return (
    <div className="px-5">
      <button onClick={handleSearch} className="border p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchButton;
