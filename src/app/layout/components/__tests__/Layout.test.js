import React from 'react';
import { renderWithReduxAndRouter } from 'utils';
import Layout from '../Layout';

describe('<Layout />', () => {
  test('should render correctly', () => {
    const { getByTestId } = renderWithReduxAndRouter(<Layout />);

    expect(getByTestId('layout-wrapper')).toBeInTheDocument();
    expect(getByTestId('toolbar-wrapper')).toBeInTheDocument();
  });
});
