import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_CORS_PROXIED } from "../utils/constants";
import Shimmer from "./Shimmer";

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
    if (json && json.data.cards[4].card.card.gridElements.infoWithStyle) {
      populateData(json.data.cards[4].card.card.gridElements.infoWithStyle);
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
  
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  
  const searchHandler = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) 
    );
    setRestaurantListToRender(filteredRestaurantList);
    
    // if(filteredRestaurantList.length === 0){
      //   setRestaurantListToRender(restaurantList)
    // }
    // else{
      //   setRestaurantListToRender(filteredRestaurantList);
    // }
  }

  return (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input type="text" className="search-input" value={searchText} onChange={e => {
            setSearchText(e.target.value)
            // searchHandler()
          }} />
          <button onClick={searchHandler} className="search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={ratingFilter}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurantListToRender.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
