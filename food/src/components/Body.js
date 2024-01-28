import {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard';
import { SWIGGY_API } from '../utils/constants';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])

  useEffect(()=>{
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json()
    if(json && json.data.cards[4].card.card.gridElements.infoWithStyle){
      populateData(json.data.cards[4].card.card.gridElements.infoWithStyle)
    }
  }

  const populateData = (swiggyApiData) => {
    setRestaurantList(swiggyApiData.restaurants)
  }

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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;