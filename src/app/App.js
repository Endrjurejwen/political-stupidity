import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Global from 'app/globalStyle';
import Layout from 'app/layout/components/Layout';
import { store } from 'store';
import { Routes } from 'app/pages';
import { createBrowserHistory } from 'history';

// reset state location
const history = createBrowserHistory();
if (history.location && history.location.state && history.location.state.id) {
  const state = { ...history.location.state };
  delete state.id;
  history.replace({ ...history.location, state });
}

const app = () => (
  <Provider store={store}>
    <Router>
      <>
        <Layout>
          <Routes />
        </Layout>
        <Global />
      </>
    </Router>
  </Provider>
);

export default app;
