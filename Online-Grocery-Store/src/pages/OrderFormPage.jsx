import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderFormPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사 간단히
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill out all fields.");
      return;
    }

    clearCart(); // 장바구니 비우기
    navigate("/order-success"); // 성공 페이지로 이동
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-[#ea6c36]">Order Information</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-2 rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          className="w-full border border-gray-300 p-2 rounded"
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-2 rounded"
          value={form.phone}
          onChange={handleChange}
        />
        <div className="font-semibold text-gray-700">
          Total: ${total.toFixed(2)}
        </div>
        <button
          type="submit"
          className="w-full bg-[#ea6c36] text-white py-2 rounded hover:bg-[#d25c2e] transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderFormPage;