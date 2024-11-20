import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import authReducerR from "../redux/auth/authSlice";
import brandApi from "./product-additionals-state/brandApi";
import categoryApi from "../redux/product-additionals-state/categoryApi";
import unitApi from "./product-additionals-state/unitApi";
import originApi from "./product-additionals-state/originApi";
import typeApi from "./product-additionals-state/typeApi";
import productApi from "./services/productsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducerR,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [originApi.reducerPath]: originApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      brandApi.middleware,
      categoryApi.middleware,
      originApi.middleware,
      typeApi.middleware,
      unitApi.middleware,
      productApi.middleware
    ),
});

export default store;
