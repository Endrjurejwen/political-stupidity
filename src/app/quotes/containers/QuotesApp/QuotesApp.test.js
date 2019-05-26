import React from 'react';
import {
  renderWithReduxAndRouter,
  fakeQuotes,
  fakeLocation,
  fakeUser
} from 'utils';
import { quotesApp as QuotesApp } from './QuotesApp';

describe('<QuotesApp /> with location, quotes and user ', () => {
  test('should render corectly', () => {
    const { getByText } = renderWithReduxAndRouter(
      <QuotesApp location={fakeLocation} quotes={fakeQuotes} user={fakeUser} />
    );

    expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
  });
});
