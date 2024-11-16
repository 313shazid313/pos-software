import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseUrl = "http://localhost:8000/user/"

// query: get methods
// mutation: put, patch, delete

 const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BaseUrl}`,
        credentials: 'include'
    }),
    tagTypes: ["Users"],
    endpoints:(builder) => ({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: "/register",
                method: 'POST',
                body: newUser
            })
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: 'POST',
                body: credentials
            }),
            credentials: 'include'
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST"
            })
        }),
        editProfile: builder.mutation({
            query: ({id, profileData}) => ({
                url: `/edit-profile/${id}`,
                method: "PATCH",
                body: profileData
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: "/users",
                method: 'GET'
            }),
            refetchOnMount: true,
            invalidatesTags: ["Users"],
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"],
        }),
        updateUserRole: builder.mutation({
            query: ({userId, role}) => ({
                url: `/users/${userId}`,
                method: "PUT",
                body: {role}
            }),
            refetchOnMount: true,
            invalidatesTags: ["Users"],
        })
    })
})

export const {useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useEditProfileMutation, useGetUsersQuery, useDeleteUserMutation, useUpdateUserRoleMutation} = authApi;

export default authApi;