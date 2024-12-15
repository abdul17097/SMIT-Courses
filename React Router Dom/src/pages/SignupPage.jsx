import { useEffect, useRef, useState } from "react";

export const SignupPage = () => {
  const searchInputRef = useRef();
  const [message, setMessage] = useState("Hello");
  console.log(message);

  const handleSearch = () => {
    searchInputRef.current.focus();
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Signup Page</h1>
      <div className="">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search ..."
          className="border border-black rounded-md my-5 p-2"
        />
        <button
          onClick={handleSearch}
          className="border p-2 ml-5 rounded-lg border-black"
        >
          Search
        </button>
      </div>
    </div>
  );
};
