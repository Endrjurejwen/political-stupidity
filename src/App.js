/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Global from 'Global';
import Layout from 'layout/components/Layout';
import store from 'store';
import { Routes } from 'pages';

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
