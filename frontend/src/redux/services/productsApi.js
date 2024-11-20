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
    // updateOrderStatus: builder.mutation({
    //   query: ({ id, status }) => ({
    //     url: `/update-order-status/${id}`,
    //     method: "PATCH",
    //     body: { status },
    //   }),
    //   invalidatesTags: ["Order"],
    // }),

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
} = brandApi;

export default brandApi;
