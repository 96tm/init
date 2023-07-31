import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.australia-southeast1.gcp.commercetools.com',
  projectKey: 'test-project-30-07-2023',
  credentials: {
    clientId: 'sh9Jn_KEAKgQPcFVvq0E5Zbp',
    clientSecret: 'Z5spWIhiGEDcDt07ZaoQflsPG_pzJJlP',
  },
  scopes: [
    'manage_my_shopping_lists:test-project-30-07-2023 manage_my_orders:test-project-30-07-2023 create_anonymous_token:test-project-30-07-2023 manage_my_quote_requests:test-project-30-07-2023 manage_my_payments:test-project-30-07-2023 manage_my_quotes:test-project-30-07-2023 view_categories:test-project-30-07-2023 manage_my_profile:test-project-30-07-2023 view_published_products:test-project-30-07-2023 manage_my_business_units:test-project-30-07-2023',
  ],
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.australia-southeast1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
