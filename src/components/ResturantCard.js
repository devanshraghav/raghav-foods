import { Image_CDN_Url } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwoString,
  deliveryTime,
  cloudinaryImageId,
  aggregatedDiscountInfo
}) => {
  // destructre on the fly
  return (
    <div className="p-4 m-4 hover:shadow-lg">
      <img
        alt="restro-card"
        src={Image_CDN_Url + cloudinaryImageId}
      />
      <h2 className="pt-2 font-semibold text-md">{name}</h2>
      <h4 className="text-gray-500 pt-2 text-sm">{cuisines.join(", ")}</h4>
      <div className="flex justify-between py-4 items-center text-gray-500 border-b-2">
        {avgRating && avgRating >= 4 ? (
          <div className="bg-green-600 text-white">{avgRating}</div>
        ) : (
          <div className="bg-orange-400">{avgRating}</div>
        )}
        <div>.</div>
        <h4 className="text-gray-500 pt-2 text-sm">{deliveryTime} min</h4>

        <div>.</div>
        <h4 className="text-sm">{costForTwoString}</h4>
      </div>
      {/* <h2 className="pt-2 text-amber-900 text-sm font-bold text-center">{aggregatedDiscountInfo?.header}</h2> */}
    </div>
  );
};

export default RestaurantCard;
