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
          slug: newItem.slug,
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
      state.items = cartDB.items;
      state.totalQuantity = cartDB.totalQuantity;
      state.totalAmount = cartDB.totalAmount;
    },

    // Empties cart item by item
    emptyCart(state, action) {
      const cart = action.payload;
      console.log(cart);

      cart.items.forEach((item) => {
        console.log(cart.items);

        const existingItem = state.items.find(
          (cartItem) => cartItem.id === item.id
        );
        console.log(existingItem);
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (stateItem) => stateItem.id !== item.id
          );
          state.totalAmount = state.totalAmount - existingItem.price;
          state.totalQuantity--;
          state.changed = true;
        }
      });
      // state.items = undefined;
      // state.totalAmount = undefined;
      // state.totalQuantity = undefined;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
