import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh]">
      <ul className="flex gap-3 justify-center text-4xl py-3">
        <li className="border px-5 py-3 rounded-2xl cursor-pointer">link 1</li>
        <li className="border px-5 py-3 rounded-2xl cursor-pointer">link 2</li>
        <li className="border px-5 py-3 rounded-2xl cursor-pointer">link 3</li>
        <li className="border px-5 py-3 rounded-2xl cursor-pointer">link 5</li>
      </ul>
    </div>
  );
};

export default Navbar;
