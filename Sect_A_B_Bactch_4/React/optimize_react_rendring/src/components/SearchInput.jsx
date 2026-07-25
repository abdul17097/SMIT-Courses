import React from "react";

const SearchInput = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return <input type="text" onChange={handleSearch} />;
};

export default SearchInput;
