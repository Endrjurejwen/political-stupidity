import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from 'pages/Routes';
import { ScrollToTop } from 'common';
import { AboutPage, TermsPage, HomePage, SignUpPage, LoginPage } from 'pages';
import { QuotationDetailsPage, CreateQuotationPage } from 'pages/QuotesPages';

const routes = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/terms" component={TermsPage} />
      <PublicRoute exact path="/login" component={LoginPage} />
      <PublicRoute exact path="/signup" component={SignUpPage} />
      <PrivateRoute exact path="/quotes/create" component={CreateQuotationPage} />
      <PrivateRoute exact path="/quotes/:id" component={QuotationDetailsPage} />
      <Route path="/quotes" exact component={HomePage} />
      <Redirect exact from="/" to="/quotes" />
    </Switch>
  </ScrollToTop>
);

export default routes;
