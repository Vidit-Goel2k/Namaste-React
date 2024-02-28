import {useState, useEffect} from 'react'
import { SWIGGY_RESTAURANT_API_CORS_PROXIED } from './constants'

const useFetchRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_RESTAURANT_API_CORS_PROXIED + restaurantId)
      const json = await data.json()
      setRestaurantInfo(json.data)
    } catch (error) {
      console.log(error)
    }
  }
   
  return restaurantInfo
}

export default useFetchRestaurantMenu