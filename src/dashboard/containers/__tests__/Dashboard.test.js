import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from '../Dashboard';

describe('<Dashboard />', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/polityczny poprawczak/i)).toBeInTheDocument();
  });
});
