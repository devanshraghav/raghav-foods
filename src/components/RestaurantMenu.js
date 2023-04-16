import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image_CDN_Url } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const {resId} = useParams();
  const [restaurantMenu , setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.351793&lng=78.0095493&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
  }
  return (!restaurantMenu) ? <Shimmer/> :(
    <div>
      <h1>{restaurantMenu.name}</h1>
      <img src={Image_CDN_Url + restaurantMenu.cloudinaryImageId} />
      <h3>{restaurantMenu.avgRating}⭐</h3>
      <h3>{restaurantMenu.costForTwoMessage}</h3>
      <h3>{restaurantMenu.cuisines}</h3>
      <h3>{restaurantMenu.areaName}</h3>
    </div>
  );
};

export default RestaurantMenu;
