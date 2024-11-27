import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/product/";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Product"],

  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/create-product",
        method: "POST",
        body: newProduct,
      }),
      providesTags: ["Product"],
    }),

    getAllProducts: builder.query({
      query: ({ page }) => `/get-all-product?page=${page}`,
      providesTags: ["Product"],
    }),

    // update order status
    updateProduct: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-product/${id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Product"],
    }),

    singleProduct: builder.query({
      query: (id) => `/single-product/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    // delete order
    deleteaProduct: builder.mutation({
      query: (id) => ({
        url: `/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteaProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useSingleProductQuery,
} = productApi;

export default productApi;
