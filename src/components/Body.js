import { API_URL } from "../constants";
import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import RestaurantShimmer from "../Shimmer/RestaurantShimmer";
import { Link } from "react-router-dom";
import ResShimmer from "../Shimmer/ResShimmer";
import { BiSearchAlt } from "react-icons/bi";
// Context
import { useContext } from "react";
import UserContext from "../utils/Context/UserContext";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [sortBy, setSortBy] = useState("RELEVANCE");
  const [offset, setOffset] = useState(0);
  // const [showloading, setShowLoading] = useState(true);
  const [filterRestaurants, setFilterRestaurants] = useState(null);

  const { user, setUser } = useContext(UserContext);

  const [allRestaurants, filterRestaurant, openRestaurant] =
    useRestaurant(API_URL);

  const fitlerRestaurantData = () => {
    if (searchText.length === 0) {
      setFilterRestaurants(allRestaurants);
    } else {
      const filteredData = filterRestaurant.filter((item) =>
        item?.info?.name.toUpperCase().includes(searchText.toUpperCase())
      );
      setFilterRestaurants(filteredData);
    }
  };

  // async function handleScrolling() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setShowLoading(true);
  //     setOffset((prev) => prev + 16);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScrolling);
  //   return () => window.removeEventListener("scroll", handleScrolling);
  // }, []);

  // const updateSortByFeature = (type) => {
  //   setAllRestaurant([]);
  //   setSortBy(type);
  //   setOffset(0);
  // };

  // Early return to handle rejection
  if (allRestaurants === undefined) {
    return <h1 className="text-2xl flex text-center h-[20vh] justify-center items-center">No Open Restaurant</h1>;
  }

  // console.log(allRestaurants);
  return allRestaurants.length === 0 ? (
    <RestaurantShimmer />
  ) : (
    <div className="md:px-8 2xl:px-60 mt-4 2xl:m-16">
      <div className="md:p-4 my-5 border-b-2 md:text-sm md:flex justify-between md:h-12 items-center bg-white md:sticky top-0">
        <h1 className="text-center font-bold text-xl">
          {openRestaurant} Restaurants
        </h1>
        <ul className="md:flex justify-between text-gray-500">
          <li className="flex p-4 gap-4">
            <input
              type="text"
              className="bg-gray-200 text-black rounded-sm"
              placeholder="Search"
              data-testid="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              data-testid="search-btn"
              className="flex items-center gap-2"
              onClick={() => fitlerRestaurantData()}
            >
              <BiSearchAlt className="text-xl" />
              Search
            </button>
          </li>
          <div className="flex lg:text-md text-sm p-1 gap-3 w-full items-center">
            <li
              className={`lg:px-3 cursor-pointer ${
                sortBy === "RELEVANCE"
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
              onClick={() => updateSortByFeature("RELEVANCE")}
            >
              Relevance
            </li>
            <li
              className={`lg:px-3 cursor-pointer ${
                sortBy === "DELIVERY_TIME"
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
              onClick={() => updateSortByFeature("DELIVERY_TIME")}
            >
              Delivery Time
            </li>
            <li
              className={`lg:px-3 cursor-pointer ${
                sortBy === "RATING"
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
              onClick={() => updateSortByFeature("RATING")}
            >
              Rating
            </li>
            <li
              className={`lg:px-3 cursor-pointer ${
                sortBy === "COST_FOR_TWO"
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
              onClick={() => updateSortByFeature("COST_FOR_TWO")}
            >
              Cost:Low to High
            </li>
            <li
              className={`lg:px-3 cursor-pointer ${
                sortBy === "COST_FOR_TWO_H2L"
                  ? "text-black underline"
                  : "hover:text-black"
              }`}
              onClick={() => updateSortByFeature("COST_FOR_TWO_H2L")}
            >
              Cost:High to Low
            </li>
          </div>
        </ul>
      </div>
      <div className="flex flex-wrap justify-evenly" data-testid="res-list">
        {(filterRestaurants === null
          ? filterRestaurant
          : filterRestaurants
        ).map((restaurant) => {
          return (
            <Link
              className="min-[1440px]:w-1/4 max-w-xs"
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
