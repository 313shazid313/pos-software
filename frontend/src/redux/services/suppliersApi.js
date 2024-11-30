import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/supply/supplier/";

const supplierApi = createApi({
  reducerPath: "supplierApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Supplier"],

  endpoints: (builder) => ({
    createSupplier: builder.mutation({
      query: (newSupplier) => ({
        url: "/create",
        method: "POST",
        body: newSupplier,
      }),
      providesTags: ["Supplier"],
    }),

    getAllSupplier: builder.query({
      query: () => ({
        url: "/get-all",
        method: "GET",
      }),
      providesTags: ["Supplier"],
    }),

    // update order status
    updateaSupplier: builder.mutation({
      query: ({ id, status }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Supplier"],
    }),

    singleSupplier: builder.query({
      query: (id) => `/single-supplier/${id}`,
      providesTags: (result, error, id) => [{ type: "Supplier", id }],
    }),

    deleteaSupplier: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Supplier", id }],
    }),
  }),
});

export const {
  useCreateSupplierMutation,
  useGetAllSupplierQuery,
  useDeleteaSupplierMutation,
  useUpdateaSupplierMutation,
  useSingleSupplierQuery
} = supplierApi;

export default supplierApi;
