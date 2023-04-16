import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getAllRestaurant();
  }, []);

  async function getAllRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.351793&lng=78.0095493&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Early return to handle rejection
  if (!allRestaurants) {
    return null;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchText.length === 0) {
              setFilterRestaurants(allRestaurants);
            } else {
              const data = filterData(searchText, allRestaurants);
              // update the state - restaurants: update the list data to print filtered data:
              setFilterRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-container">
        {/* Lets pass data from api object */}
        {
          // now lets map the array and get all the restaurants:
          // conditional rendering
          filterRestaurants.length === 0 ? (
            <h1>No restaurant</h1>
          ) : (
            filterRestaurants.map((restaurant) => {
              return (
                <Link
                  key={restaurant.data.id}
                  to={`/restaurant/${restaurant.data.id}`}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )
        }
      </div>
    </div>
  );
};

export default Body;
