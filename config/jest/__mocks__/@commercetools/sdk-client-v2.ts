const client = jest.createMockFromModule('@commercetools/sdk-client-v2');

const builderMock: unknown = jest.fn(() => ({
  withProjectKey: builderMock,
  withClientCredentialsFlow: builderMock,
  withHttpMiddleware: builderMock,
  withLoggerMiddleware: builderMock,
  build: jest.fn(() =>
    jest.fn(() => ({
      login: jest.fn(() => ({
        post: jest.fn(() => ({
          execute: jest.fn(() => Promise.resolve()),
        })),
      })),
    }))
  ),
}));

(client as any).ClientBuilder = builderMock;

module.exports = client;
