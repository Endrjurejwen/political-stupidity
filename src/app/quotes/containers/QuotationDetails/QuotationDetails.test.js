import React from 'react';
import { fakeQuotation, renderWithReduxAndRouter } from 'utils';
import { quotationDetails as QuotationDetails } from './QuotationDetails';

describe('<QuotationDetails with quotation', () => {
  test('should render corectly', () => {
    const { getByText } = renderWithReduxAndRouter(
      <QuotationDetails quotation={fakeQuotation} />
    );

    expect(
      getByText(`Komentarze (${fakeQuotation.commentsCount})`)
    ).toBeInTheDocument();

    expect(getByText(/powrót/i)).toBeInTheDocument();
  });
});
