import { useContext, useState } from "react";
import userContext from "../utils/userContext";

const Filters = ({setRestaurantListToRender, restaurantList}) => {
  const [searchText, setSearchText] = useState("");

  const user = useContext(userContext)

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
    <div className="flex items-center py-4 justify-evenly">
      <div className="ml-14">
        <input
          type="text"
          className="p-2 border border-black rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="search"
        />
        <button
          onClick={searchHandler}
          className="px-4 py-2 m-4 bg-red-200 rounded-lg search-btn"
        >
          Search
        </button>
      </div>
      <div>
        <button
          className="px-4 py-2 m-4 bg-red-200 rounded-lg filter-btn"
          onClick={ratingFilter}
        >
          Top Rated
        </button>
      </div>
      <div>
        <label
          onClick={searchHandler}
          className="px-4 py-2 m-4 rounded-lg search-btn"
        >
          UserName :
        </label>
        <input
          type="text"
          className="p-2 border border-black rounded-lg"
          value={user.userName}
          onChange={(e) => {
            user.setUserName(e.target.value)
          }
        }
          placeholder="enter username"
        />
      </div>
    </div>
  );
};

export default Filters;
