import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ItemDisplay from "./ItemDisplay";

const CategoryDisplay = () => {
  const { category } = useParams(); // 예: meat

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <div className="p-8 bg-[#fcf5d5] min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-[#ea6c36] capitalize">
          {category}
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ItemDisplay key={product.id} product={product} />
            ))
          ) : (
            <p>No items found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryDisplay;
