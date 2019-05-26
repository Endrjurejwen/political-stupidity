import React from 'react';
import { renderWithReduxAndRouter, fakeQuotation } from 'utils';
import Quotation from './Quotation';

describe('<Quotation /> with quotation', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId } = renderWithReduxAndRouter(
      <Quotation quotation={fakeQuotation} />
    );
    const { politician, content } = fakeQuotation;

    expect(getByTestId('quotation-content')).toHaveTextContent(content);
    expect(getByTestId('quotation-title')).toHaveTextContent(politician);
  });
});
