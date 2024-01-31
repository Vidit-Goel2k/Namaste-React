import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_CORS_PROXIED } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListToRender, setRestaurantListToRender] = useState(restaurantList);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_CORS_PROXIED);
    const json = await data.json();
    if (json && json.data.cards[2].card.card.gridElements.infoWithStyle) {
      populateData(json.data.cards[2].card.card.gridElements.infoWithStyle);
    }
  };

  const populateData = (swiggyApiData) => {
    setRestaurantList(swiggyApiData.restaurants);
    setRestaurantListToRender(swiggyApiData.restaurants)
  };

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
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input type="text" className="search-input" value={searchText} onChange={e => setSearchText(e.target.value)} />
          <button onClick={searchHandler} className="search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={ratingFilter}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurantListToRender.map((restaurant) => (
          <Link 
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
