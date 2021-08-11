import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import errorSlice from "./errorUI-slice";
import wishlistSlice from "./wishlist-slice";
import librarySlice from "./library-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    errorUI: errorSlice.reducer,
    library: librarySlice.reducer,
  },
});

export default store;
