import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';

import { Provider } from 'react-redux';
import store from 'store';

export const renderWithRedux = ui => {
  return {
    ...render(<Provider store={store()}>{ui}</Provider>)
  };
};

export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
};

export const renderWithReduxAndRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <Provider store={store()}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    history
  };
};
