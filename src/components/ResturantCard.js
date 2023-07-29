import { Image_CDN_Url } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
  sla,
  cloudinaryImageId,
}) => {
  // destructre on the fly
  return (
    <div className="p-4 m-4 hover:shadow-lg">
      <img alt="restro-card" src={Image_CDN_Url + cloudinaryImageId} />
      <h2 className="pt-2 font-semibold text-md">{name}</h2>
      <h4 className="text-gray-500 pt-2 text-sm">{cuisines.join(", ")}</h4>
      <div className="flex justify-between py-4 items-center text-gray-500 border-b-2 text-sm">
        {avgRating && avgRating >= 4 ? (
          <div className="flex items-center p-1 text-xs text-white bg-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              stroke="green"
            >
              <g fill="white">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </g>
            </svg>
            {avgRating}
          </div>
        ) : (
          <div className="flex items-center p-1 text-xs text-white bg-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              stroke="green"
            >
              <g fill="white">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </g>
            </svg>
            {avgRating}
          </div>
        )}
        <div>.</div>
        <h4>{sla.deliveryTime} min</h4>

        <div>.</div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
