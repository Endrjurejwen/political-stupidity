import React from 'react';
import { fireEvent } from 'react-testing-library';
import { renderWithRouter } from 'utils';
import NavigationItem from '../NavigationItem';

const clickMock = jest.fn();

const fakeText = 'about';

describe('<NavigationItem />', () => {
  test('should receive props and then renders text', () => {
    const { getByTestId } = renderWithRouter(
      <NavigationItem name={fakeText} />
    );

    expect(getByTestId('link')).toBeInTheDocument();
    expect(getByTestId('link')).toHaveTextContent(fakeText);
  });

  test('should call function when button was clicked', () => {
    const { getByTestId } = renderWithRouter(
      <NavigationItem closeMenu={clickMock} />
    );

    fireEvent.click(getByTestId('link'));
    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
