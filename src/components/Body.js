import RestaurantCard from "./ResturantCard";
import { resturantDataList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState(resturantDataList);
  return (
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
            // console.log("btn click");
            // Filter the data
            if (searchText.length === 0) {
              setRestaurant(resturantDataList);
            } else {
              const data = filterData(searchText, resturantDataList);
              // update the state - restaurants: update the list data to print filtered data:
              // console.log(data);
              setRestaurant(data);
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
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
