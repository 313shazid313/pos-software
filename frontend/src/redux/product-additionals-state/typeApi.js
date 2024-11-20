import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/type/";

const typeApi = createApi({
  reducerPath: "typeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Types"],

  endpoints: (builder) => ({
    createType: builder.mutation({
      query: (newType) => ({
        url: "/create-type",
        method: "POST",
        body: newType,
      }),
      providesTags: ["Types"],
    }),

    getAllTypes: builder.query({
      query: () => ({
        url: "/get-all-types",
        method: "GET",
      }),
      providesTags: ["Types"],
    }),

    // update order status
    updateType: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-type/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Types"],
    }),

    // delete order
    deleteaType: builder.mutation({
      query: (id) => ({
        url: `/delete-type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Types", id }],
    }),
  }),
});

export const {
  useCreateTypeMutation,
  useDeleteaTypeMutation,
  useGetAllTypesQuery,
  useUpdateTypeMutation
} = typeApi;

export default typeApi;
