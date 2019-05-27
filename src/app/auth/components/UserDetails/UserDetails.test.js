import React from 'react';
import { render } from 'react-testing-library';
import { fakeUser } from 'utils';
import UserDetails from './UserDetails';

describe('<UserDetails /> with user', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId } = render(<UserDetails user={fakeUser} />);

    expect(getByTestId('user-details-container')).toBeInTheDocument();

    const { firstName, lastName, nick } = fakeUser;
    expect(getByTestId('user-credentials')).toHaveTextContent(`${firstName} ${lastName} (${nick})`);
  });
});
