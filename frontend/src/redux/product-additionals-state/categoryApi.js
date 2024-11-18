import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseUrl = "http://localhost:8000/product-route/category/";

const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    credentials: "include",
  }),

  tagTypes: ["Category"],

  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/create-category",
        method: "POST",
        body: newCategory,
      }),
      providesTags: ["Category"],
    }),

    getAllCategories: builder.query({
      query: () => ({
        url: "/get-all-categorys",
        method: "GET",
      }),
      providesTags: ["Category"],
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
    deleteaCategory: builder.mutation({
      query: (id) => ({
        url: `/delete-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Category", id }],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useDeleteaCategoryMutation,
  useGetAllCategoriesQuery,
} = categoryApi;

export default categoryApi;
