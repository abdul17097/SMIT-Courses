import React from "react";
import { ShoppingCart } from "lucide-react"; // install lucide-react
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">MyStore</h1>

      {/* Cart */}
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />

        {/* Cart Count Badge */}
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
