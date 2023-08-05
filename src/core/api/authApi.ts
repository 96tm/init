import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TokenType = 'Bearer';

export type GrantType = 'client_credentials' | 'password';

interface ClientTokenResponse {
  access_token: string;
  token_type: TokenType;
  expires_in: number;
  scope: string;
}

interface SignInRequestParams {
  username: string;
  password: string;
}

interface SignInResponse extends ClientTokenResponse {
  refresh_token: string;
}

export interface ClientTokenRequestParams {
  grant_type: GrantType;
}

export interface ICustomErrorDto {
  errors: [
    {
      detail: string;
      code: string;
      status: string;
    },
  ];
}

export const BASE_URL = `${process.env.API_AUTH_URL}/oauth`;

const basicAuthToken = btoa(
  `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
);

export const api = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Basic ${basicAuthToken}`);
      return headers;
    },
  }),
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    adminToken: builder.mutation<ClientTokenResponse, void>({
      query: () => ({
        url: '/token',
        method: 'POST',
        params: {
          grant_type: 'client_credentials',
        },
      }),
      invalidatesTags: ['Admin'],
    }),
    signIn: builder.mutation<SignInResponse, { params: SignInRequestParams }>({
      query: ({ params: { username, password } }) => ({
        url: `${process.env.PROJECT_KEY}/customers/token`,
        method: 'POST',
        params: {
          grant_type: 'password',
          username,
          password,
        },
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
});

export const { useAdminTokenMutation, useSignInMutation } = api;
