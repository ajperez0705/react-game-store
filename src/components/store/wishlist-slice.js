import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addToWishList(state, action) {
      const newItem = action.payload;
      // Check if item exists within items array
      const existingItem = state.items.find((item) => item.id === newItem.id);

      // If exists, render notification, return
      if (existingItem) {
        return;
        // If does not exist, add to items array, update quantity and amount
      } else if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
        });
        state.totalQuantity = state.totalQuantity + 1;
        state.changed = true;
      }
    },

    removeFromList(state, action) {
      // Get the item id

      const newItem = action.payload;

      // Check if that item already exists
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalQuantity--;
        state.changed = true;
      } else return;
    },

    replaceList(state, action) {
      const listDB = action.payload;
      state.items = listDB.items;
      state.totalQuantity = listDB.totalQuantity;
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
