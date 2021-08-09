import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    addToCart(state, action) {
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
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
        state.totalQuantity = state.totalQuantity + 1;
        state.totalAmount = state.totalAmount + newItem.price;
        state.changed = true;
      }
    },

    removeFromCart(state, action) {
      // Get the item id

      const newItem = action.payload;

      // Check if that item already exists
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalAmount = state.totalAmount - newItem.price;
        state.totalQuantity--;
        state.changed = true;
      } else return;
    },

    replaceCart(state, action) {
      const cartDB = action.payload;
      console.log(cartDB);
      state.items = cartDB[1].items;
      state.totalQuantity = cartDB[0].totalQuantity;
      state.totalAmount = cartDB[0].totalAmount;
    },
    hideCart(state, action) {},
    showCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
