import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/unit/";

const unitApi = createApi({
  reducerPath: "unitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Unit"],

  endpoints: (builder) => ({
    createUnit: builder.mutation({
      query: (newUnit) => ({
        url: "/create-unit",
        method: "POST",
        body: newUnit,
      }),
      providesTags: ["Unit"],
    }),

    getAllUnit: builder.query({
      query: () => ({
        url: "/get-all-units",
        method: "GET",
      }),
      providesTags: ["Unit"],
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
    deleteanUnit: builder.mutation({
      query: (id) => ({
        url: `/delete-unit/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Unit", id }],
    }),
  }),
});

export const {
  useCreateUnitMutation,
  useDeleteanUnitMutation,
  useGetAllUnitQuery,
} = unitApi;

export default unitApi;
