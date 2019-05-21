import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import LogoutButton from './LogoutButton';

const onCloseMenuMock = jest.fn();
const onClickMock = jest.fn();

describe('<LogoutButton /> with onCloseMenu and onClick', () => {
  test('should recieve props and render corectly', () => {
    const { getByText } = render(
      <LogoutButton onCloseMenu={onCloseMenuMock} onClick={onClickMock} />
    );

    expect(getByText(/wyloguj się/i)).toBeInTheDocument();

    fireEvent.click(getByText(/wyloguj się/i));
    expect(onCloseMenuMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
