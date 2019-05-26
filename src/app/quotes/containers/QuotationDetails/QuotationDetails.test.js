import React from 'react';
import {
  fakeQuotation,
  renderWithReduxAndRouter,
  fakeLocation,
  fakeHistory
} from 'utils';
import { quotationDetails as QuotationDetails } from './QuotationDetails';

describe('<QuotationDetails with quotation, history and location', () => {
  test('should render corectly', () => {
    const { getByText } = renderWithReduxAndRouter(
      <QuotationDetails
        quotation={fakeQuotation}
        location={fakeLocation}
        history={fakeHistory}
      />
    );

    expect(
      getByText(`Komentarze (${fakeQuotation.commentsCount})`)
    ).toBeInTheDocument();

    expect(getByText(/powrót/i)).toBeInTheDocument();
  });
});
