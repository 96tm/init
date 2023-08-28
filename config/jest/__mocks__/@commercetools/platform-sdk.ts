const sdk = jest.createMockFromModule('@commercetools/platform-sdk');

function makeApiClientExecutablePostFunction<T = unknown>(returnValue?: T) {
  return jest.fn(() => ({
    post: jest.fn(() => ({
      execute: jest.fn(() => Promise.resolve(returnValue)),
    })),
  }));
}

function makeApiClientExecutableGetFunction<T = unknown>(returnValue?: T) {
  return jest.fn(() => ({
    get: jest.fn(() => ({
      execute: jest.fn(() => Promise.resolve(returnValue)),
    })),
  }));
}

const apiClientMock = jest.fn(() => ({
  login: makeApiClientExecutablePostFunction(),
  products: makeApiClientExecutableGetFunction([]),
  categories: makeApiClientExecutableGetFunction([]),
}));

(sdk as any).createApiBuilderFromCtpClient = jest.fn(() => ({
  withProjectKey: apiClientMock,
}));

module.exports = sdk;
