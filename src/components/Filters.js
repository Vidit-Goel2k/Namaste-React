import { useState } from "react";

const Filters = ({setRestaurantListToRender, restaurantList}) => {
  const [searchText, setSearchText] = useState("");

  const ratingFilter = () => {
    const filteredRestaurantList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setRestaurantListToRender(filteredRestaurantList);
  };

  const searchHandler = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantListToRender(filteredRestaurantList);
  };

  return (
    <div className="flex">
      <div className="my-4 ml-14">
        <input
          type="text"
          className="p-2 border border-black rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={searchHandler}
          className="px-4 py-2 m-4 bg-red-200 rounded-lg search-btn"
        >
          Search
        </button>
      </div>
      <div className="my-4">
        <button
          className="px-4 py-2 m-4 bg-red-200 rounded-lg filter-btn"
          onClick={ratingFilter}
        >
          Top Rated
        </button>
      </div>
    </div>
  );
};

export default Filters;
