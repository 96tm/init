import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store/rootReducer';

export interface ICustomErrorDto {
  errors: [
    {
      detail: string;
      code: string;
      status: string;
    },
  ];
}

export const BASE_URL =
  'https://api.australia-southeast1.gcp.commercetools.com';

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
  tagTypes: ['User'],
  endpoints: (builder) => ({
    userRegistration: builder.mutation<
      unknown,
      { email: string; password: string }
    >({
      query: (body) => ({
        url: '/registration',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useUserRegistrationMutation } = api;
