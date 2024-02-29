import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);
  // const [categoryClicked, setCategoryClicked] = useState(null)
  const [showIndex, setShowIndex] = useState(null);
  const { restaurantId } = useParams();
  const restaurantInfo = useFetchRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const menuItems =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const menuCategories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const categories = menuCategories.filter((category) => {
    return (
      category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  console.log(categories);

  return (
    <div className="flex flex-col gap-6 bg-red-50">
      <h1 className="my-4 text-2xl font-bold text-center">{name}</h1>
      <p className="text-lg font-semibold text-center">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="text-xl font-bold text-center">Menu</h2>
      <div className="flex flex-col justify-center">
        {categories.map((category, index) => {
          return (
            //* controlled component
            <RestaurantCategory
              key={category.card.card.title}
              categoryData={category.card.card}
              // showItems={
              //   category.card.card.title === categoryClicked ? true : false
              // }
              // setCategoryClicked={setCategoryClicked}
              showItems={index === showIndex ? true : false}
              setShowIndex = {setShowIndex}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
