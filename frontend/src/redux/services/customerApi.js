import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/customer/customer/";

const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Customer"],

  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: (newCustomer) => ({
        url: "/create",
        method: "POST",
        body: newCustomer,
      }),
      providesTags: ["Customer"],
    }),

    getAllCustomer: builder.query({
      query: () => ({
        url: "/get-all",
        method: "GET",
      }),
      providesTags: ["Customer"],
    }),

    // update order status
    updateaCustomer: builder.mutation({
      query: ({ id, status }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: status,
      }),
      invalidatesTags: ["Customer"],
    }),

    singleCustomer: builder.query({
      query: (id) => `/single-customer/${id}`,
      providesTags: (result, error, id) => [{ type: "Customer", id }],
    }),

    deleteaCustomer: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Customer", id }],
    }),
  }),
});

export const {
  useCreateCustomerMutation,
  useDeleteaCustomerMutation,
  useGetAllCustomerQuery,
  useSingleCustomerQuery,
  useUpdateaCustomerMutation,
} = customerApi;

export default customerApi;
