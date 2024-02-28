import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ categoryData }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div className="w-6/12 p-4 mx-auto my-2 shadow-lg select-none bg-gray-50">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold">
          {categoryData.title} ({categoryData?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemsList items={categoryData?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
