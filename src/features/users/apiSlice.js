import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    addProducts: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),
    updateProducts: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    // BBBBBRENDSSSS

    getBrands: builder.query({
      query: () => "/brands",
      providesTags: ["brands"],
    }),
    addBrands: builder.mutation({
      query: (payload) => ({
        url: "/brands",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["brands"],
    }),
    updateBrands: builder.mutation({
      query: (payload) => ({
        url: `brands/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["brands"],
    }),
    deleteBrands: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["brands"],
    }),

    // MMMMODELSSSSS

    getModels: builder.query({
      query: () => "/models",
      providesTags: ["models"],
    }),
    addModels: builder.mutation({
      query: (payload) => ({
        url: `/models`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["models"],
    }),
    updateModels: builder.mutation({
      query: (payload) => ({
        url: `/models/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["models"],
    }),
    deleteModels: builder.mutation({
      query: (id) => ({
        url: `/models/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["models"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductsMutation, useUpdateProductsMutation, useDeleteProductsMutation, useGetBrandsQuery, useAddBrandsMutation, useUpdateBrandsMutation, useDeleteBrandsMutation, useGetModelsQuery, useAddModelsMutation, useUpdateModelsMutation, useDeleteModelsMutation } = api
export default api