import {useState} from 'react'
import resList from './../utils/mockData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList)

  const ratingFilter = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant)=> restaurant.data.avgRating >= 4)
    setRestaurantList(filteredRestaurantList)
  }

  return (
    <div className="body">
      <div className="search">Search</div>
      <button className='filter-btn' onClick={ratingFilter}>Top Rated</button>
      <div className="res-container">
        {
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;