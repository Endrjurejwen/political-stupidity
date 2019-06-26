import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from 'app/pages/Routes';
import { ScrollToTop } from 'app/common';
import { AboutPage, TermsPage, HomePage, SignUpPage } from 'app/pages';
import { QuotationDetailsPage } from 'app/pages/QuotesPages';
import ROUTES_NAMES from './routesNames';

const routes = () => {
  const { about, terms, signup, quotationDetails, quotes } = ROUTES_NAMES;
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path={about} component={AboutPage} />
        <Route exact path={terms} component={TermsPage} />
        <PublicRoute exact path={signup} component={SignUpPage} />
        <PrivateRoute
          exact
          path={quotationDetails}
          component={QuotationDetailsPage}
        />
        <Route path={quotes} exact component={HomePage} />
        <Redirect exact from="/" to={quotes} />
      </Switch>
    </ScrollToTop>
  );
};

export default routes;
