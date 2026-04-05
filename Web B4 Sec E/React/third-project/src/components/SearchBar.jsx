import React, { use, useEffect, useReducer, useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef();

  const handleFocus = () => {
    console.log(searchRef.current);
    searchRef.current.focus();
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-5">
      <input
        type="search"
        ref={searchRef}
        placeholder="Search 0..."
        className="border"
      />
      <input type="search" placeholder="Search 1..." className="border" />
      <input type="search" placeholder="Search 2..." className="border" />
      <input type="search" placeholder="Search 3..." className="border" />
      <button onClick={handleFocus}>Focus On Search</button>
    </div>
  );
};

export default SearchBar;
