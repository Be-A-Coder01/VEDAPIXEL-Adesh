import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="bg-[#0F1016] text-white py-4 px-5 md:px-10 flex items-center justify-between flex-wrap">
      {/* Left section */}
      <div className="flex items-center gap-4 md:gap-10">
        <p className="text-xl font-semibold">Booking.com</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-1 rounded-md text-black"
          />
          <i className="fas fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 md:block"></i>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 md:gap-6 mt-3 md:mt-0">
        <p className="hidden sm:block">City</p>
        <Link to="/Signin">
          <button className="px-3 py-1 rounded-md text-sm bg-[#EB4E62] hover:bg-[#d84357] transition">
            Sign in
          </button>
        </Link>
        <Link to="/profile" className="text-lg">
          <i className="far fa-user"></i>
        </Link>
      </div>
    </header>
  );
};

export default Menu;
