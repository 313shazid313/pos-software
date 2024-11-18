import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import authReducerR from "../redux/auth/authSlice";
import brandApi from "./product-additionals-state/brandApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducerR,
    [brandApi.reducerPath]: brandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, brandApi.middleware),
});

export default store;
