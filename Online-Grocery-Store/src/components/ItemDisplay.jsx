import React from "react";

const ItemDisplay = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-64 flex flex-col items-center space-y-2 hover:shadow-lg transition">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-contain rounded-lg"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

      {/* Price */}
      <p className="text-[#ea6c36] font-bold text-md">${product.price.toFixed(2)}</p>

      {/* Unit & Stock */}
      <div className="text-sm text-gray-500">
        {product.unit} | Stock: {product.stock}
      </div>

      {/* Button */}
      <button className="mt-2 bg-[#ea6c36] text-white px-4 py-1.5 rounded-full hover:bg-[#d25c2e] transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDisplay;