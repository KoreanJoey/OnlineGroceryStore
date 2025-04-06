import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DropdownMenu from "./DropdwonMenu";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() !== "") {
        navigate(`/search/${input}`);
        setInput("");
      }
    }
  };

  return (
    <header className="w-full bg-[#fcf5d5] shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div
        className="flex items-center gap-2 hover:opacity-70 transition cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.logo_icon}
          alt="Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-xl font-bold text-[#ea6c36]">FreshCart</span>
      </div>
      {/* Category Section */}
      <nav className="flex space-x-6 text-gray-700 font-medium">
        <DropdownMenu label="Meat & Seafood" items={["Meat", "Seafood"]} />
        <DropdownMenu
          label="Fruit & Vegetables"
          items={["Fruits", "Vegetables"]}
        />
        <DropdownMenu label="Dairy & Drinks" items={["Dairy", "Drinks"]} />
        <DropdownMenu label="Chips & Chocolate" items={["Snacks"]} />
      </nav>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="pl-5 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-250"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSearch}
        />
        <FaSearch className="absolute right-5 top-3  w-4 h-4 text-gray-500" />
      </div>
    </header>
  );
};

export default Topbar;
