import React from 'react';
import { fireEvent } from 'react-testing-library';
import { renderWithReduxAndRouter } from 'utils';
import Toolbar from '../Toolbar';

const clickMock = jest.fn();

describe('<Toolbar />', () => {
  test('should render correctly and show SideDrawer when menuButton was clicked', () => {
    const { getByTestId } = renderWithReduxAndRouter(
      <Toolbar toggleMenu={clickMock} />
    );

    expect(getByTestId('toolbar-wrapper')).toBeInTheDocument();

    expect(getByTestId('sideDrawer')).toHaveStyle(
      'transform: translateY(-30vh)'
    );
    fireEvent.click(getByTestId('menu-button'));
    expect(getByTestId('sideDrawer')).toHaveStyle('transform: translateY(0)');

    fireEvent.click(getByTestId('menu-button'));
    expect(getByTestId('sideDrawer')).toHaveStyle(
      'transform: translateY(-30vh)'
    );
  });

  test('should show Backdrop when menuButton was clicked', () => {
    const { getByTestId, queryByTestId } = renderWithReduxAndRouter(
      <Toolbar toggleMenu={clickMock} />
    );

    expect(queryByTestId('backdrop')).not.toBeInTheDocument();
    fireEvent.click(getByTestId('menu-button'));
    expect(getByTestId('backdrop')).toBeInTheDocument();
  });

  test('should close Backdrop and hide SideDrawer when Backdrop was clicked', () => {
    const { getByTestId, queryByTestId } = renderWithReduxAndRouter(
      <Toolbar toggleMenu={clickMock} />
    );

    fireEvent.click(getByTestId('menu-button'));
    fireEvent.click(getByTestId('backdrop'));
    expect(queryByTestId('backdrop')).not.toBeInTheDocument();
    expect(getByTestId('sideDrawer')).toHaveStyle(
      'transform: translateY(-30vh)'
    );
  });
});
