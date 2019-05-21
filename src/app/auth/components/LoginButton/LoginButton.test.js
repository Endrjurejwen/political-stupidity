import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import LoginButton from './LoginButton';

const onCloseMenuMock = jest.fn();
const onClickMock = jest.fn();

describe('<LoginButton /> with onCloseMenu and onClick', () => {
  test('should recieve props and render corectly', () => {
    const { getByText } = render(
      <LoginButton onCloseMenu={onCloseMenuMock} onClick={onClickMock} />
    );

    expect(getByText(/zaloguj się/i)).toBeInTheDocument();

    fireEvent.click(getByText(/zaloguj się/i));
    expect(onCloseMenuMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
