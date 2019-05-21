import React from 'react';
import { render } from 'react-testing-library';
import UserSummary from './UserSummary';

const fakeName = 'Anonim';

describe('<UserSummary /> with user', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId } = render(<UserSummary name={fakeName} />);

    expect(getByTestId('user-name')).toHaveTextContent('Anonim');
  });
});
