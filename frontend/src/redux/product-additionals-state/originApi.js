import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/origin/";

const originApi = createApi({
  reducerPath: "originApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Origin"],

  endpoints: (builder) => ({
    createOrigin: builder.mutation({
      query: (newOrigin) => ({
        url: "/create-origin",
        method: "POST",
        body: newOrigin,
      }),
      providesTags: ["Origin"],
    }),

    getAllOrigin: builder.query({
      query: () => ({
        url: "/get-all-origins",
        method: "GET",
      }),
      providesTags: ["Origin"],
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
    deleteanOrigin: builder.mutation({
      query: (id) => ({
        url: `/delete-origin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Origin", id }],
    }),
  }),
});

export const {
  useCreateOriginMutation,
  useDeleteanOriginMutation,
  useGetAllOriginQuery,
} = originApi;

export default originApi;
