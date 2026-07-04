import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const toggle = (data) => {
    // setTheme((prv) => (prv === "light" ? "dark" : "light"));
    setTheme(data);
    alert(data);
  };

  const finalThem = theme === "light" ? "black" : "white";
  return (
    <div
      className={`bg-${theme === "light" ? "black" : "white"} w-[200px] h-[200px]`}
    >
      <button
        className={`bg-${theme === "light" ? "white" : "black"} border p-2 rounded-2xl cursor-pointer`}
        onClick={() => toggle(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Theme;
