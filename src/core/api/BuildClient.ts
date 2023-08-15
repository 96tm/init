import fetch from 'node-fetch';
import {
  ClientBuilder,

  type AuthMiddlewareOptions, 
  type HttpMiddlewareOptions, 
} from '@commercetools/sdk-client-v2';
import {
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

const projectKey = process.env.REACT_APP_PROJECT_KEY;
const scopes = [process.env.REACT_APP_SCOPES];

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: process.env.REACT_APP_AUTH_URL,
  projectKey: process.env.REACT_APP_PROJECT_KEY,
  credentials: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: process.env.REACT_APP_API_URL,
  fetch,
};

export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) 
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() 
  .build();

export const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({ projectKey: process.env.REACT_APP_PROJECT_KEY });