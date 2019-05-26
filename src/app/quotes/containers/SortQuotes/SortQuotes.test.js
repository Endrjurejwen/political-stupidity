import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { fakeSortTypes, color, renderWithReduxAndRouter } from 'utils';
import SortQuotesWithStore, {
  sortQuotesContainer as SortQuotes
} from './SortQuotes';

const sortQuotesMock = jest.fn();

// Act issue
console.error = jest.fn();

describe('<SortQuotes /> with sortQuotes and sortTypes', () => {
  test('should fire sort function when buton was clicked', () => {
    const { getByText } = render(
      <SortQuotes sortQuotes={sortQuotesMock} sortTypes={fakeSortTypes} />
    );

    fireEvent.click(getByText('Komentarze'));

    expect(sortQuotesMock).toHaveBeenCalledTimes(1);
    expect(sortQuotesMock).toHaveBeenCalledWith('comments');
  });

  test('should change buttons style', () => {
    const { getByText } = renderWithReduxAndRouter(
      <SortQuotesWithStore
        sortQuotes={sortQuotesMock}
        sortTypes={fakeSortTypes}
      />
    );

    expect(getByText('Komentarze')).toHaveStyle(
      `border-bottom-color: transparent`
    );

    expect(getByText('Najnowsze')).toHaveStyle(
      `border-bottom-color: ${color.action}`
    );

    fireEvent.click(getByText('Komentarze'));

    expect(getByText('Komentarze')).toHaveStyle(
      `border-bottom-color: ${color.action}`
    );

    expect(getByText('Najnowsze')).toHaveStyle(
      `border-bottom-color: transparent`
    );
  });
});
