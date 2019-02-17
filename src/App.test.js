import React from 'react';
import { fireEvent } from 'react-testing-library';
import { renderWithRouter } from 'utils';
import App from './App';

// because scrollTo is not implemented in jsdom
console.error = jest.fn();

describe('<App />', () => {
  test('should navigate corectly', () => {
    const {
      queryByTestId,
      getByTestId,
      getByText,
      queryByText
    } = renderWithRouter(<App />);

    expect(console.error).toBeCalled();

    const homeLink = queryByText(/strona główna/i);
    const aboutLink = queryByText(/idea/i);
    const termsLink = queryByText(/regulamin/i);
    const logoutLink = queryByText(/wyloguj się/i);
    const lefClick = { button: 0 };

    expect(queryByText(/polityczny poprawczak/i)).toBeInTheDocument();
    expect(queryByText(/strona o pomyśle/i)).not.toBeInTheDocument();
    expect(homeLink).toHaveClass('active');
    [aboutLink, termsLink, logoutLink].map(link =>
      expect(link).not.toHaveClass('active')
    );

    fireEvent.click(aboutLink, lefClick);
    expect(queryByText(/strona o pomyśle/i)).toBeInTheDocument();
    expect(queryByText(/polityczny poprawczak/i)).not.toBeInTheDocument();
    expect(getByTestId('sideDrawer')).toHaveStyle(
      'transform: translateY(-50vh)'
    );
    expect(queryByTestId('backdrop')).not.toBeInTheDocument();
    expect(aboutLink).toHaveClass('active');
    [homeLink, termsLink, logoutLink].map(link =>
      expect(link).not.toHaveClass('active')
    );

    fireEvent.click(getByText(/dodaj cytat/i));
    expect(queryByText(/strona o pomyśle/i)).not.toBeInTheDocument();
    expect(queryByText(/create quotation/i)).toBeInTheDocument();
    [homeLink, aboutLink, termsLink, logoutLink].map(link =>
      expect(link).not.toHaveClass('active')
    );
  });
});
