/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import Global from 'Global';
import Layout from 'layout/components/Layout';
import Dashboard from 'dashboard/containers/Dashboard';
import CreateQuotation from 'quotes/containers/CreateQuotation';
import QuotationDetails from 'quotes/containers/QuotationDetails';
import About from 'about/components/about';
import Terms from 'terms/components/terms';
import Login from 'auth/containers/Login';
import SignUp from 'auth/containers/SignUp';
import store from 'store';
import { ScrollToTop } from 'common';
// import rootReducer from './rootReducer';

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Layout>
              <Switch>
                <Route exact path="/home" component={Dashboard} />
                <Route exact path="/about" component={About} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/create" component={CreateQuotation} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/quotes/:id" component={QuotationDetails} />
                <Redirect exact from="/" to="/home" />
              </Switch>
              <Global />
            </Layout>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
