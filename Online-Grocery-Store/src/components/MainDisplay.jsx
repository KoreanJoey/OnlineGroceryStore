import React from "react";
import products from "../data/products.json";
import ItemDisplay from "./ItemDisplay";

const MainDisplay = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center py-8 bg-[#fcf5d5]">
        {products.map((product) => (
          <ItemDisplay key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default MainDisplay;
