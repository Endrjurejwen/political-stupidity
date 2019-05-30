import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { signUpForm as SignUp } from './SignUp';

const signUpMock = jest.fn(() =>
  Promise.resolve({
    firstName: '',
    lastName: '',
    nick: '',
    email: '',
    password: ''
  })
);
const resetAuthErrorMock = jest.fn();

describe('<SignUp /> with signUp', () => {
  test('should submit with proper credentials', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignUp signUp={signUpMock} resetAuthError={resetAuthErrorMock} />
    );

    const firstNameInput = getByPlaceholderText(/twoje imię/i);
    const lastNameInput = getByPlaceholderText(/twoje nazwisko/i);
    const nickInput = getByPlaceholderText(/twój nick/i);
    const emailInput = getByPlaceholderText(/twój email/i);
    const passwordInput = getByPlaceholderText(/twoje hasło/i);

    expect(getByText(/rejestracja/i)).toBeInTheDocument();

    fireEvent.change(firstNameInput, {
      target: {
        value: 'Gal'
      }
    });

    fireEvent.change(lastNameInput, {
      target: {
        value: 'Anonim'
      }
    });

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

    fireEvent.change(nickInput, {
      target: {
        value: 'nick'
      }
    });

    fireEvent.submit(getByText(/załóż konto/i));
    expect(signUpMock).toHaveBeenCalledTimes(1);
    expect(signUpMock).toHaveBeenCalledWith({
      firstName: 'Gal',
      lastName: 'Anonim',
      nick: 'nick',
      email: 'test@test.pl',
      password: 'test'
    });
  });
});
