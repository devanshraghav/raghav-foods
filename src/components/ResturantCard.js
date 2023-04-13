import { Image_CDN_Url } from "../constants";

// Since we will be needing many restro cards
// therefore we will create a separate component for that.
// so, that we can re-use it.

const RestaurantCard = ({name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}) => {
  // destructre on the fly
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="restro-card"
        src={Image_CDN_Url + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>  
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
