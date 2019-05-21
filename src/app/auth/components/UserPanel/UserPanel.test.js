import React from 'react';
import { renderWithRedux, fakeUser } from 'utils';
import UserPanel from './UserPanel';

describe('<UserPanel /> with user', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId, getByText } = renderWithRedux(
      <UserPanel user={fakeUser} />
    );

    expect(getByText(/wyloguj się/i)).toBeInTheDocument();
    expect(getByTestId('user-name')).toBeInTheDocument();
  });
});
