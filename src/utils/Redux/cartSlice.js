import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // our cart will be modified using reducer function [called when action is dispacthed]
  reducers: {
    // mapping will be done here b/w action and reducer func - [action : reducerfunc()]
    additem: (state, action) => {
      if (state.items.length === 0) {
        state.items.push(action.payload);
      } else {
        const existingItem = state.items.find(
          (item) => item.newItem.id === action.payload.newItem.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push(action.payload);
        }
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.newItem.id === action.payload
      );
      existingItem.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.newItem.id === action.payload
      );
      if (existingItem.quantity === 1) {
        const remove = state.items.filter(
          (item) => item.newItem.id !== action.payload
        );
        state.items = remove;
      } else {
        existingItem.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const remove = state.items.filter(
        (item) => item.newItem.id !== action.payload
      );
      state.items = remove;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// We have to export both reducer and actions

export const {
  additem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
