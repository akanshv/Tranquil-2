import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./products/cartSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    auth:authReducer
  },
});
