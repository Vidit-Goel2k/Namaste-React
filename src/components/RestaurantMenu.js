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
    <div className='flex flex-col gap-6 bg-red-50'>
        <h1 className='my-4 text-2xl font-bold text-center'>{name}</h1>
        <p className='text-lg font-semibold text-center'>{cuisines.join(', ')} - {costForTwoMessage}</p>

        <h2 className='text-xl font-bold text-center'>Menu</h2>
        <ul className='flex flex-col flex-wrap justify-center gap-6 m-10 text-lg'>
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