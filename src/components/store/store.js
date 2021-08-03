import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import wishlistSlice from "./wishlist-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, wishlist: wishlistSlice.reducer },
});

export default store;
