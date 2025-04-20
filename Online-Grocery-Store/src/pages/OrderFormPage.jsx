import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const OrderFormPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const states = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    postcode: "",
    state: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isFormValid = () => {
    const {
      firstName,
      surname,
      phone,
      email,
      streetAddress,
      city,
      postcode,
      state,
    } = form;

    return (
      firstName &&
      surname &&
      phone &&
      email &&
      streetAddress &&
      city &&
      postcode &&
      state
    );
  };
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검사 간단히
    const {
      firstName,
      surname,
      phone,
      email,
      streetAddress,
      city,
      postcode,
      state,
    } = form;

    if (
      !firstName ||
      !surname ||
      !phone ||
      !email ||
      !streetAddress ||
      !city ||
      !postcode ||
      !state
    ) {
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

    const postcodeRegex = /^\d{4}$/;

    if (!postcodeRegex.test(postcode)) {
      alert("Please enter a valid 4-digit postcode.");
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

          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-[#ea6c36]">Address</h2>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              className="w-full border border-gray-300 p-2 rounded"
              value={form.streetAddress}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City / Suburb"
              className="w-full border border-gray-300 p-2 rounded"
              value={form.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              className="w-full border border-gray-300 p-2 rounded"
              value={form.postcode}
              onChange={handleChange}
            />

            <div className="relative">
              {/* 드롭다운 필드 */}
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full border border-gray-300 p-2 rounded cursor-pointer bg-white flex justify-between items-center"
              >
                <span
                  className={selectedState ? "text-black" : "text-gray-400"}
                >
                  {selectedState || "Select State"}
                </span>
                <FaChevronDown className="text-gray-500 ml-2" />
              </div>

              {/* 옵션 목록 */}
              {isDropdownOpen && (
                <ul className="absolute z-10 w-full border border-gray-300 bg-white mt-1 rounded shadow-md max-h-48 overflow-y-auto">
                  {states.map((state) => (
                    <li
                      key={state}
                      onClick={() => {
                        setSelectedState(state);
                        setForm((prev) => ({ ...prev, state }));
                        setIsDropdownOpen(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="font-semibold text-gray-700">
            Total: ${total.toFixed(2)}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded transition ${
              isFormValid()
                ? "bg-[#ea6c36] text-white hover:bg-[#d25c2e] cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderFormPage;
