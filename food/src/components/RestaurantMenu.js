import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { SWIGGY_RESTAURANT_API_CORS_PROXIED } from './../utils/constants';

import Shimmer from './Shimmer';
import useFetchRestaurantMenu from '../utils/useFetchRestaurantMenu';

const RestaurantMenu = () => {
  const {restaurantId} = useParams()
  
  const restaurantInfo = useFetchRestaurantMenu(restaurantId)
  
  if(restaurantInfo === null) return <Shimmer />

  const { name, cuisines, costForTwoMessage, } = restaurantInfo?.cards[0]?.card?.card?.info
  const menuItems = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  
  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(', ')} - {costForTwoMessage}</p>

        <h2>Menu</h2>
        <ul>
          {menuItems?.map(
            (menuItem)=>(
              <li key={menuItem.card.info.id}>{menuItem.card.info.name} - ₹{menuItem.card.info.price/100 || menuItem.card.info.defaultPrice/100}</li>
            )
          )}
        </ul>
    </div>
  )
}

export default RestaurantMenu