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

    updateUnit: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-unit/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Unit"],
    }),

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
  useUpdateUnitMutation,
} = unitApi;

export default unitApi;
