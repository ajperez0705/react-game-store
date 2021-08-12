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
      // Loop through cart.items and foreach item, push into the state.items array
      cart.items.forEach((item) => {
        state.items.push({
          id: item.id,
          name: item.name,
          image: item.image,
          quantity: 1,
        });
      });
      //
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
