import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navabar = () => {
  const [toggle, setToggle] = useState(false);
  const { favoriteProducts } = useSelector((state) => state.favorite);
  const { cartProducts } = useSelector((state) => state.cart);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);

  return (
    <>
      <div className=" h-[3rem] lg:h-[5rem] flex items-center justify-between px-4 lg:px-10 w-[100%]">
        <div className="flex gap-10 items-center w-[60%] justify-between">
          <h1 className="lg:text-[1.5rem]">Shop Us</h1>
          <ul className="hidden lg:flex gap-4">
            <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
              <Link to="/product">Product</Link>
            </li>
            <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
              Contact
            </li>
            <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
              Logout
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="hidden lg:flex border border-black items-center lg:px-2 lg:py-1 rounded-[5px]">
            <label htmlFor="search">
              <CiSearch className="text-[1.3rem] lg:text-[1.5rem]" />
            </label>
            <input type="text" id="search" name="search" />
          </div>
          <Link to="/favorite">
            <div className="relative">
              <span
                className={`${
                  favoriteProducts?.length === 0 && "invisible"
                } absolute text-sm top-[-10px] border border-black rounded-full bg-black text-white flex justify-center items-center right-0 w-4 h-4`}
              >
                {favoriteProducts?.length}
              </span>
              <CiHeart className="text-[1.3rem] lg:text-[1.5rem]" />
            </div>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <span
                className={`absolute text-sm top-[-10px] border border-black rounded-full bg-black text-white flex justify-center items-center right-0 w-4 h-4`}
              >
                {cartProducts?.length}
              </span>
              <CiShoppingCart className="text-[1.3rem] lg:text-[1.5rem]" />
            </div>
          </Link>

          <GiHamburgerMenu className="lg:hidden" onClick={handleToggle} />
        </div>
      </div>
      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col absolute w-full items-center py-5 bg-[#f2f0ff] lg:hidden gap-4`}
      >
        <li>
          <div className="flex border border-black items-center lg:px-2 lg:py-1 rounded-[5px]">
            <label htmlFor="search">
              <CiSearch className="text-[1.3rem] lg:text-[1.5rem]" />
            </label>
            <input
              type="text"
              id="search"
              name="search"
              className="bg-transparent focus:outline-none pl-1"
            />
          </div>
        </li>
        <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
          Product
        </li>
        <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
          Contact
        </li>
        <li className="text-[1.2rem] font-semibold hover:border border-black w-[5.5rem] h-[2rem] px-2 flex justify-center items-center rounded-[5px]">
          Logout
        </li>
      </ul>
    </>
  );
};

export default Navabar;
