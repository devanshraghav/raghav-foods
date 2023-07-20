import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
//  store will contain slices
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
