import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AuthErrorHandler from './AuthErrorHandler';

const resetErrorMock = jest.fn();

const fakeError = 'error';

describe('<AuthErrorHandler /> with error and resetError', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId, getByText } = render(
      <AuthErrorHandler error={fakeError} resetError={resetErrorMock} />
    );

    expect(getByTestId('auth-error-handler')).toBeInTheDocument();

    expect(getByTestId('error-text')).toHaveTextContent(fakeError);

    fireEvent.click(getByText(/rozumiem/i));
    expect(resetErrorMock).toHaveBeenCalledTimes(1);
  });

  test('should not render without error', () => {
    const { queryByTestId } = render(
      <AuthErrorHandler resetError={resetErrorMock} />
    );

    expect(queryByTestId('auth-error-handler')).not.toBeInTheDocument();
  });
});
