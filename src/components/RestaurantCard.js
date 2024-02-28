import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  return (
    <div className="w-64 p-4 bg-gray-200 rounded-lg hover:bg-gray-300 h-96 res-card" >
      <img
        className="rounded-lg res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="pt-4 pb-2 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withDiscountedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return(
      <div>
        <label className="absolute p-1 text-white bg-gray-500 rounded-lg ">{header} {subHeader}</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;