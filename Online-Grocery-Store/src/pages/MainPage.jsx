import React from "react";
import Topbar from "../components/Topbar";
import MainDisplay from "../components/MainDisplay";
import { Route, Routes } from "react-router-dom";
import CategoryDisplay from "../components/CategoryDisplay";

const MainPage = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/category/:category" element={<CategoryDisplay />} />
      </Routes>
    </>
  );
};

export default MainPage;
