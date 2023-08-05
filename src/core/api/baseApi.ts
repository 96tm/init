import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store/rootReducer';
import { ListResponse } from './types';

interface ProductsQueryParams {
  where?: string;
}

interface Product {
  id: string;
  key: string;
}

interface ProductsResponse extends ListResponse<Product> {}

export const BASE_URL = `${process.env.API_URL}/${process.env.PROJECT_KEY}`;

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    products: builder.query<ProductsResponse, { params: ProductsQueryParams }>({
      query: ({ params }) => ({
        url: '/products',
        params,
      }),
      providesTags: ['Products'],
    }),
  }),
});

export const { useProductsQuery } = api;
