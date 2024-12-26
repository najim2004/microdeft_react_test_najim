import { loginFailure, loginStart, loginSuccess } from "../slices/authSlice";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials, //example: {"email":"naim.microdeft@gmail.com","password": "12345678"}
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          dispatch(loginStart());
          const { data } = await queryFulfilled;
          data.status
            ? dispatch(loginSuccess(data))
            : dispatch(loginFailure(data));
        } catch (error) {
          dispatch(loginFailure(error.message));
          console.error("Login Error:", error);
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData, // example:{"name":"Naimul Hasan","email":"naim.microdeft@gmail.com","password": "12345678"}
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
