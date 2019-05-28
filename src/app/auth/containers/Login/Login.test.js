import React from 'react';
import { fakeHistory } from 'utils';
import { fireEvent, render } from 'react-testing-library';
import { loginForm as Login } from './Login';

const loginMock = jest.fn(() => Promise.resolve({ email: '', password: '' }));
const resetAuthErrorMock = jest.fn();
const onCloseModalMock = jest.fn();

describe('<Login /> with login and onCloseModal', () => {
  test('should submit with proper credentials', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Login
        login={loginMock}
        resetAuthError={resetAuthErrorMock}
        onCloseModal={onCloseModalMock}
        history={fakeHistory}
      />
    );

    const emailInput = getByPlaceholderText(/twój email/i);
    const passwordInput = getByPlaceholderText(/twoje hasło/i);

    expect(getByText(/logowanie/i)).toBeInTheDocument();

    fireEvent.change(emailInput, {
      target: {
        value: 'test@test.pl'
      }
    });

    fireEvent.change(passwordInput, {
      target: {
        value: 'test'
      }
    });

    fireEvent.submit(getByText(/zaloguj się/i));
    expect(loginMock).toHaveBeenCalledTimes(1);
    expect(loginMock).toHaveBeenCalledWith({
      email: 'test@test.pl',
      password: 'test'
    });
  });
});
