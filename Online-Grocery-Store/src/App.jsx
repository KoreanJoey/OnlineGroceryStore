import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
