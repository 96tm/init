import { render } from 'test-utils';

jest.mock('@commercetools/sdk-client-v2');
jest.mock('@commercetools/platform-sdk');
jest.mock('../../core/api/baseApi');

import App from './App';

describe('App component tests', () => {
  test('Renders App component', async () => {
    // ARRANGE
    render(<App />);
  });
});
