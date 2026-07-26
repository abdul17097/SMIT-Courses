import React, { useEffect, useRef } from "react";

const SearchInput = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchRef = useRef();

  const handleSearchBtn = () => {
    console.log(searchRef.current.value);
  };

  console.log("render");

  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <>
      <input
        ref={searchRef}
        type="text"
        className="border-3 border-red-800"
        // onChange={handleSearch}
      />
      <button
        className="border p-2 rounded-2xl cursor-pointer"
        onClick={handleSearchBtn}
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
