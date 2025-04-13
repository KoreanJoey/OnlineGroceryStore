import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-[#ea6c36] mb-4">Order Placed Successfully! 🎉</h1>
      <p className="text-gray-600 mb-6">Thank you for shopping with FreshCart.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#ea6c36] text-white px-6 py-2 rounded hover:bg-[#d25c2e] transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccessPage;