import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import homeProductReducer from "./homeProductSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    homeProduct: homeProductReducer,
  },
});
