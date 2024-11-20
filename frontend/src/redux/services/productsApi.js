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
      query: () => ({
        url: "/get-all-product",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // update order status
    updateProduct: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-product/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Product"],
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
} = productApi;

export default productApi;
