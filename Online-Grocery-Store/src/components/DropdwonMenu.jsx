import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/category/${item.toLowerCase()}`)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-[#ea6c36] transition">
        {label}
        <AiFillCaretDown size={12} />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-10 before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2 before:bg-transparent">
          <ul className="py-2 text-sm text-gray-700">
            {items.map((item) => (
              <li
                key={item}
                className="px-4 py-2 hover:bg-[#fcf5d5] hover:text-[#ea6c36] cursor-pointer"
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;