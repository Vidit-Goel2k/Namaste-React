import { useState, useEffect } from "react";
import RestaurantCard, { withDiscountedLabel } from "./RestaurantCard";
import { SWIGGY_API_CORS_PROXIED } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Filters from "./Filters";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [restaurantListToRender, setRestaurantListToRender] = useState(restaurantList);

  const isOnline = useOnlineStatus();

  const RestaurantCardWithDiscountedLabel = withDiscountedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(prev => !prev)
      const data = await fetch(SWIGGY_API_CORS_PROXIED);
      const json = await data.json();
      if (json && json.data.cards[4].card.card.gridElements.infoWithStyle) {
        populateData(json.data.cards[4].card.card.gridElements.infoWithStyle);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const populateData = (swiggyApiData) => {
    setRestaurantList(swiggyApiData.restaurants);
    setRestaurantListToRender(swiggyApiData.restaurants);
    setIsLoading(prev => !prev)
  };

  if (isOnline === false) {
    return (
      <h1>You seem to be Offline, Please Check your internet connection.</h1>
    );
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body bg-red-50">
      <Filters setRestaurantListToRender={setRestaurantListToRender} restaurantList={restaurantList} />
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-start gap-6 py-4 cursor-default mx-14 res-container">
          {restaurantListToRender.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscountedLabel resData={restaurant} />
                ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;