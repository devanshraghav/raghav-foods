import { useState, useEffect } from "react";

const useRestaurant = (API_URL) => {
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [openRestaurant, setOpenRestaurant] = useState();

  useEffect(() => {
    getAllRestaurant();
  }, []);

  async function checkJsonData(json) {
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);
    for (let i = 0; i < json?.data?.cards.length; i++) {
      const restaurantData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          .restaurants;
      if (restaurantData !== undefined) {
        setOpenRestaurant(restaurantData?.length);
        return restaurantData;
      }
    }
  }
  async function getAllRestaurant() {
    try {
      const data = await fetch(API_URL);
      // if response is not ok then throw new Error
      if (!data.ok) {
        const err = data.status;
        throw new Error(err);
      } else {
        const json = await data.json();

        const restaurant = await checkJsonData(json);

        setAllRestaurant(restaurant);
        setFilterRestaurants(restaurant);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }

  return [allRestaurants, filterRestaurants, openRestaurant];
};

export default useRestaurant;
