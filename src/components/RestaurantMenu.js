import { Image_CDN_Url } from "../constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { useEffect } from "react";
const RestaurantMenu = () => {
  
  const { resId } = useParams();
  
  const restaurant = useRestaurant(resId);
  
  return (!restaurant) ? <Shimmer/> :(
    <div>
      <h1>{restaurant.name}</h1>
      <img src={Image_CDN_Url + restaurant.cloudinaryImageId} />
      <h3>{restaurant.avgRating}⭐</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      <h3>{restaurant.cuisines.join(", ")}</h3>
      <h3>{restaurant.areaName}</h3>
    </div>
  );
};

export default RestaurantMenu;
