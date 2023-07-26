import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import RestaurantShimmer from "../Shimmer/RestaurantShimmer";
import { Link } from "react-router-dom";
import ResShimmer from "../Shimmer/ResShimmer";
import { BiSearchAlt } from "react-icons/bi";
// Context
import { useContext } from "react";
import UserContext from "../utils/Context/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [openRestaurant, setOpenRestaurant] = useState();
  const [sortBy, setSortBy] = useState("RELEVANCE");
  const [offset, setOffset] = useState(0);
  const [showloading, setShowLoading] = useState(true);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getAllRestaurant();
  }, [sortBy, offset]);

  async function getAllRestaurant() {
    if (offset === 0) {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.351793&lng=78.0095493&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      const cardArray = json?.data?.cards?.find(
        (item) => item.cardType === "seeAllRestaurants"
      );
      const restaurantData = cardArray?.data?.data?.cards;
      setOpenRestaurant(cardArray?.data?.data?.totalOpenRestaurants);
      setAllRestaurant(restaurantData);
      setFilterRestaurants(restaurantData);
    } else {
      // Fetching will be different for infinite scrolling:

      let FETCH_MORE_RESTAURANT_DATA_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.351793&lng=78.0095493&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
      try {
        const data = await fetch(FETCH_MORE_RESTAURANT_DATA_URL);
        const json = await data.json();
        const cardArray = json?.data?.cards;
        if (cardArray != undefined) {
          const restaurantData = cardArray.map((card) => card?.data);
          // adding new data to existing state
          // setAllRestaurant((prev) => prev.concat(restaurantData));
          setAllRestaurant((prev) => [...prev, ...restaurantData]);
          setFilterRestaurants(allRestaurants);
          // or
        }
      } catch (error) {
        console.log(error);
      }
    }
    setShowLoading(false);
  }

  const fitlerRestaurantData = () => {
    if (searchText.length === 0) {
      setFilterRestaurants(allRestaurants);
    } else {
      const filteredData = allRestaurants.filter((item) =>
        item?.data?.name.toUpperCase().includes(searchText.toUpperCase())
      );
      setFilterRestaurants(filteredData);
    }
  };

  async function handleScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setShowLoading(true);
      setOffset((prev) => prev + 16);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  const updateSortByFeature = (type) => {
    setAllRestaurant([]);
    setSortBy(type);
    setOffset(0);
  };
  // Early return to handle rejection
  if (!allRestaurants) {
    return null;
  }

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
      <div className="flex flex-wrap justify-around">
        {
          // now lets map the array and get all the restaurants:
          // conditional rendering
          allRestaurants.length === 0 ? (
            <h1>No restaurant</h1>
          ) : (
            filterRestaurants.map((restaurant) => {
              return (
                <Link
                  className="min-[1440px]:w-1/4 max-w-xs"
                  key={restaurant.data.id}
                  to={`/restaurant/${restaurant.data.id}`}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )
        }
        {showloading && <ResShimmer />}
      </div>
    </div>
  );
};

export default Body;
