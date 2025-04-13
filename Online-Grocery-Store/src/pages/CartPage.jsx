import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 bg-[#fcf5d5] min-h-screen">
      <h1 className="text-2xl font-bold text-[#ea6c36] mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow flex items-center gap-4"
              >
                {/* 이미지 */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />

                {/* 제품 정보 */}
                <div className="flex-1">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                {/* 수량 조절 */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className={`px-2 py-1 rounded text-sm ${
                      item.quantity === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className={`px-2 py-1 rounded text-sm ${
                      item.quantity === item.stock
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={item.quantity === item.stock}
                  >
                    +
                  </button>
                </div>

                {/* 총 가격 & 삭제 */}
                <div className="text-right ml-4">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#ea6c36]">
              Total: ${total.toFixed(2)}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/order")}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
