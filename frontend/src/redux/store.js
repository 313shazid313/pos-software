import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import authReducerR from "../redux/auth/authSlice";
import brandApi from "./product-additionals-state/brandApi";
import categoryApi from "../redux/product-additionals-state/categoryApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducerR,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      brandApi.middleware,
      categoryApi.middleware
    ),
});

export default store;
