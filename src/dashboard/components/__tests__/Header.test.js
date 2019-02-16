import React from 'react';
import { render } from 'react-testing-library';
import Header from '../Header';

const fakeProps = {
  quotes: 12,
  comments: 25
};

describe('<Header />', () => {
  test('should render correctly', () => {
    const { getByText, getByTestId } = render(<Header {...fakeProps} />);

    expect(getByText(/polityczny poprawczak/i)).toBeInTheDocument();
    expect(getByText(/cytaty/i)).toBeInTheDocument();
    expect(getByTestId('quotes-number')).toHaveTextContent(12);
    expect(getByText(/komentarze/i)).toBeInTheDocument();
    expect(getByTestId('comments-number')).toHaveTextContent(25);
  });
});
