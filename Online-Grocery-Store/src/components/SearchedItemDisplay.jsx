import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ItemDisplay from "./ItemDisplay";

const SearchedItemDisplay = () => {
  const { input } = useParams();

  const searchedProducts = products.filter((p) => {
    return p.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <>
      <div className="p-8 bg-[#fcf5d5] min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-[#ea6c36] capitalize">
          {input}
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <ItemDisplay key={product.id} product={product} />
            ))
          ) : (
            <p>No items found for this input.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchedItemDisplay;
