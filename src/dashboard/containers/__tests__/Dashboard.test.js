import React from 'react';
import { renderWithRedux } from 'utils';
import Dashboard from '../Dashboard';

describe('<Dashboard />', () => {
  test('should render correctly', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    expect(getByText(/polityczny poprawczak/i)).toBeInTheDocument();
  });
});
