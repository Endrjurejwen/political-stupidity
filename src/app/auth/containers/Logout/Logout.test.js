import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { logoutButton as Logout } from './Logout';

const logoutMock = jest.fn();
const onCloseModalMock = jest.fn();

describe('<Logout /> with logout and onCloseModal', () => {
  test('should logout when button button was clicked', async () => {
    const { getByText } = render(
      <Logout logout={logoutMock} onCloseModal={onCloseModalMock} />
    );

    expect(getByText(/wyloguj się/i)).toBeInTheDocument();

    fireEvent.click(getByText(/potwierdzam/i));
    expect(logoutMock).toHaveBeenCalledTimes(1);
    expect(onCloseModalMock).toHaveBeenCalledTimes(1);
  });
});
