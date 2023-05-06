import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlices";
import cartReducer from "../slices/cartSlice";
export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});
