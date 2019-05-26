import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { filterQuotesContainer as FilterQuotes } from './FilterQuotes';

const filterQuotesMock = jest.fn();
const onCloseModalMock = jest.fn();

// Act issue
console.error = jest.fn();

describe('<FilterQuotes /> with filterQuotes and onCloseModal', () => {
  test('should fire filter function with proper label', () => {
    const { getByTestId, getByText } = render(
      <FilterQuotes
        filterQuotes={filterQuotesMock}
        onCloseModal={onCloseModalMock}
      />
    );

    const filterInput = getByTestId(`filter-history`);

    expect(filterInput).toBeInTheDocument();

    fireEvent.change(filterInput, {
      target: {
        value: 'historia'
      }
    });
    fireEvent.click(filterInput);
    expect(filterInput.value).toBe('historia');

    fireEvent.submit(getByText(/filtruj/i));

    expect(filterQuotesMock).toHaveBeenCalledTimes(1);
    expect(onCloseModalMock).toHaveBeenCalledTimes(1);
    expect(filterQuotesMock).toHaveBeenCalledWith('historia');
  });
});
