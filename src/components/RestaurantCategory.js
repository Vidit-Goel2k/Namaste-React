import ItemsList from "./ItemsList";

const RestaurantCategory = ({ categoryData, showItems, setCategoryClicked, setShowIndex, index }) => {
  
  const handleClick = () => {
    // showItems === true ? setCategoryClicked(null) : setCategoryClicked(categoryData.title)
    showItems === true ? setShowIndex(null) : setShowIndex(index)
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
