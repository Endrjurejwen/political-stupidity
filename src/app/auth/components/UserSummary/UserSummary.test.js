import React from 'react';
import { render } from 'react-testing-library';
import UserSummary from './UserSummary';

const fakeNick = 'Anonim@123';

describe('<UserSummary /> with user', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId } = render(<UserSummary nick={fakeNick} />);

    expect(getByTestId('user-nick')).toHaveTextContent('Anonim@123');
  });
});
