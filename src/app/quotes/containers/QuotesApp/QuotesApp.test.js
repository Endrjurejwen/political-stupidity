import React from 'react';
import { cleanup, fireEvent } from 'react-testing-library';
import {
  renderWithReduxAndRouter,
  fakeQuotes,
  fakeLocation,
  fakeUser
} from 'utils';
import { quotesApp as QuotesApp } from './QuotesApp';

afterEach(cleanup);

describe('<QuotesApp /> with location, quotes and user ', () => {
  test('should render corectly', () => {
    const { getByText, debug } = renderWithReduxAndRouter(
      <QuotesApp location={fakeLocation} quotes={fakeQuotes} user={fakeUser} />
    );

    // debug();

    // fireEvent.click(getByText('Komentarze'));

    // debug();
  });
});
