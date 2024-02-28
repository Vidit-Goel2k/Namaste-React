import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div className="">
      {items?.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;
        return (
          <div
            key={id}
            className="flex justify-between p-2 m-2 border-b-2 border-gray-200 rounded-lg"
          >
            <div className="w-9/12 p-2 text-lg">
              <div>
                <span>{name}</span>
                {/* <span> - ₹{price / 100 || defaultPrice / 100}</span> */}
              </div>
                <span> - ₹{price / 100 || defaultPrice / 100}</span>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button className="p-2 ml-32 text-black bg-gray-200 rounded-lg shadow-lg">
                  Add +
                </button>
              </div>
              <img className="w-full rounded-lg " src={CDN_URL + imageId} alt="Food Image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
