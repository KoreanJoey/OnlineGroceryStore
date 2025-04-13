import React from "react";
import Topbar from "../components/Topbar";
import MainDisplay from "../components/MainDisplay";
import { Route, Routes } from "react-router-dom";
import CategoryDisplay from "../components/CategoryDisplay";
import SearchedItemDisplay from "../components/SearchedItemDisplay";
import CartPage from "./CartPage";

const MainPage = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/category/:category" element={<CategoryDisplay />} />
        <Route path="/search/:input" element={<SearchedItemDisplay />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default MainPage;
