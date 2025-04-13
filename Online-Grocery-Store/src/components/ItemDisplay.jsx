import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ItemDisplay = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item has been added to your cart!");
  };

  const outOfStock = product.stock === 0;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-64 flex flex-col items-center space-y-2 hover:shadow-lg transition">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-contain rounded-lg"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800 truncate w-full text-center">
        {product.name}
      </h2>

      {/* Price */}
      <p className="text-[#ea6c36] font-bold text-md">
        ${product.price.toFixed(2)}
      </p>

      {/* Unit & Stock */}
      <div className="text-sm text-gray-500">
        {product.unit} |{" "}
        {outOfStock ? "Out of Stock" : `Stock: ${product.stock}`}
      </div>

      {/* Button */}
      <button
        className={`mt-2 px-4 py-1.5 rounded-full transition text-white text-sm font-medium ${
          outOfStock
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#ea6c36] hover:bg-[#d25c2e]"
        }`}
        onClick={handleAddToCart}
        disabled={outOfStock}
      >
        {outOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ItemDisplay;
