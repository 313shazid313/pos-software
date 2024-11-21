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
    updateCategories: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-category/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Category"],
    }),

    singleCategory: builder.query({
      query: (id) => `/single-category/${id}`,
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),


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
  useUpdateCategoriesMutation,
  useSingleCategoryQuery
} = categoryApi;

export default categoryApi;
