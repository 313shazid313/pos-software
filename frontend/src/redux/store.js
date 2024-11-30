import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import authReducerR from "../redux/auth/authSlice";
import brandApi from "./product-additionals-state/brandApi";
import categoryApi from "../redux/product-additionals-state/categoryApi";
import unitApi from "./product-additionals-state/unitApi";
import originApi from "./product-additionals-state/originApi";
import typeApi from "./product-additionals-state/typeApi";
import productApi from "./services/productsApi";
import supplierApi from "./services/suppliersApi";

export const store = configureStore({
  reducer: {
    auth: authReducerR,
    [authApi.reducerPath]: authApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [originApi.reducerPath]: originApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      brandApi.middleware,
      categoryApi.middleware,
      originApi.middleware,
      typeApi.middleware,
      unitApi.middleware,
      productApi.middleware,
      supplierApi.middleware
    ),
});

export default store;
