import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
  name: "library",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addToLibrary(state, action) {
      const cart = action.payload;
      state.items.push({
        id: cart.id,
        name: cart.name,
        image: cart.image,
        quantity: 1,
      });
      state.totalQuantity = state.totalQuantity + 1;
      state.changed = true;
    },

    replaceList(state, action) {
      const listDB = action.payload;
      state.items = listDB.items;
      state.totalQuantity = listDB.totalQuantity;
    },
  },
});

export const libraryActions = librarySlice.actions;
export default librarySlice;
