import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://test2.sionic.ru/api";

export const productsApi = createApi({
  tagTypes: ["PRODUCTS"],
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: `${baseUrl}/Categories`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }),
    }),

    getProducts: build.query({
      query: () => ({
        url: `${baseUrl}/Products`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }),
    }),

    getImages: build.query({
      query: ({ productId }) => ({
        url: `${baseUrl}/ProductImages/${productId ?? ""}`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      }),
    }),
  }),
});
