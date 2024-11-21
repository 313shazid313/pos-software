import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/brand/";

const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Brand"],

  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (newBrand) => ({
        url: "/create-brand",
        method: "POST",
        body: newBrand,
      }),
      providesTags: ["Brand"],
    }),

    getAllBrands: builder.query({
      query: () => ({
        url: "/get-all-brands",
        method: "GET",
      }),
      providesTags: ["Brand"],
    }),

    // update order status
    updateBrand: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-brand/${id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Brand"],
    }),

    singleBrand: builder.query({
      query: (id) => `/single-brand/${id}`,
      providesTags: (result, error, id) => [{ type: "Brand", id }],
    }),

    // delete order
    deleteaBrand: builder.mutation({
      query: (id) => ({
        url: `/delete-brand/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Brand", id }],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useDeleteaBrandMutation,
  useGetAllBrandsQuery,
  useUpdateBrandMutation,
  useSingleBrandQuery,
} = brandApi;

export default brandApi;
