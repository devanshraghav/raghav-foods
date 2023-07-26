import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuType from "./MenuType";
import RestaurantMenuShimmer from "../../Shimmer/RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  
  async function getRestaurantMenu() {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.351793&lng=78.0095493&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    const menus = json?.data?.cards?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuWithTitles = menus
      .filter((menu) => menu.card.card.title)
      .map((menu) => menu.card.card);
    setRestaurantMenu(menuWithTitles);
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
  }

  // dispatch(addMenu({restaurantMenu,restaurantInfo}));

  return !restaurantInfo ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="container max-w-4xl mx-auto px-4 md:w-1/2 lg:w-4/6 mt-4">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{restaurantInfo.name}</h1>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.cuisines.join(", ")}
          </h1>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.areaName}, {restaurantInfo.sla.lastMileTravelString}
          </h1>
        </div>
        <div className="border p-2 mt-5 items-center rounded-lg">
          <div className="flex items-center justify-center font-bold text-green-700 gap-1 pb-3 mb-3 border-b-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              stroke="green"
            >
              <g fill="green">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </g>
            </svg>
            {restaurantInfo.avgRatingString}
          </div>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.totalRatingsString}
          </h1>
        </div>
      </div>
      <h1 className="text-xs text-gray-500 border-dotted border-b-2 pb-4">
        {restaurantInfo.feeDetails.message}
      </h1>

      {restaurantMenu && (
        <div className="mb-8">
          {restaurantMenu.map((menu, id) => (
            <MenuType key={id} menu={menu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
