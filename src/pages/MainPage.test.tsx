import { render, screen } from 'test-utils';

import MainPage from './MainPage';

describe('MainPage component tests', () => {
  test('Renders MainPage component', async () => {
    // ARRANGE
    render(<MainPage />);
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Main page');
  });
});
