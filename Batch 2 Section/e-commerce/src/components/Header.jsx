import React from "react";

export const Header = () => {
  return (
    // create header with logo and navigation links
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">E-Commerce</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/product-detail" className="hover:text-gray-400">
                Product Details
              </a>
            </li>
            <li>
              <a href="/checkout" className="hover:text-gray-400">
                Checkout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
