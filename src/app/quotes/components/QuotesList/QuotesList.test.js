import React from 'react';
import { renderWithReduxAndRouter, fakeQuotes } from 'utils';
import QuotesList from './QuotesList';

describe('<QuotesList /> with quotes', () => {
  test('should render list of quotes', () => {
    const { getAllByTestId } = renderWithReduxAndRouter(
      <QuotesList quotes={fakeQuotes} />
    );
    const quotesContent = getAllByTestId('quotation-content').map(
      quotationContent => quotationContent.textContent
    );
    const fakeQuotesContent = fakeQuotes.map(
      fakeQuotation => fakeQuotation.content
    );
    expect(quotesContent).toEqual(fakeQuotesContent);
  });
});
