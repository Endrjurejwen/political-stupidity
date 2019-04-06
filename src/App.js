/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Global from 'Global';
import Layout from 'layout/components/Layout';
import { store } from 'store';
import { Routes } from 'pages';
import { createBrowserHistory } from 'history';

// reset state location
const history = createBrowserHistory();
if (history.location && history.location.state && history.location.state.id) {
  const state = { ...history.location.state };
  delete state.id;
  history.replace({ ...history.location, state });
}

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
