import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import MenuButton from '../MenuButton';

const clickMock = jest.fn();

describe('<MenuButton />', () => {
  test('should call function when button was clicked', () => {
    const { getByTestId } = render(
      <MenuButton isOpen toggleMenu={clickMock} />
    );
    const button = getByTestId('menu-button');

    expect(button.tagName).toBe('BUTTON');

    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalledTimes(2);
  });
});
