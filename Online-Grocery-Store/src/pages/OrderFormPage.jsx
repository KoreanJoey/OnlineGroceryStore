import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderFormPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사 간단히
    const { firstName, surname, phone, email, address } = form;
    if (!firstName || !surname || !phone || !email || !address) {
      alert("Please fill out all fields.");
      return;
    }

    const phoneRegex = /^[0-9]{7,15}$/; // 7~15자리 숫자
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (digits only).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    clearCart(); // 장바구니 비우기
    navigate("/order-success"); // 성공 페이지로 이동
  };

  return (
    <div className="p-8 bg-[#fcf5d5] min-h-screen">
      <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-[#ea6c36]">Order Information</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border border-gray-300 p-2 rounded"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="w-full border border-gray-300 p-2 rounded"
            value={form.surname}
            onChange={handleChange}
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-2 rounded"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 p-2 rounded"
          value={form.email}
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
    </div>
    
  );
};

export default OrderFormPage;