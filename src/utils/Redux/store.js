import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantMenuSlice from "./restaurantMenuSlice";
//  store will contain slices
const store = configureStore({
  reducer: {
    cart: cartSlice,
    rMenu : restaurantMenuSlice,
  },
});

export default store;
