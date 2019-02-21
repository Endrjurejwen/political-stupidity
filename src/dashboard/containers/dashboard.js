/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { Spinner } from 'common';
import { H5 } from 'elements';

class Dashboard extends Component {
  navigationToQuotationDetailsHandler = id => {
    const { history } = this.props;
    history.push(`/quotes/${id}`);
  };

  render() {
    const { quotes } = this.props;

    let quotesBox;
    if (!quotes) {
      quotesBox = <Spinner />;
    }
    if (quotes && !quotes.length) {
      quotesBox = (
        <H5 center data-testid="information">
          Nie ma jeszcze żadnych cytatów
        </H5>
      );
    }
    if (quotes && quotes.length) {
      quotesBox = (
        <QuotesList
          navigationClick={this.navigationToQuotationDetailsHandler}
          quotes={quotes}
        />
      );
    }
    return (
      <>
        <Header />
        <Panel />
        {quotesBox}
      </>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.firestore.ordered.quotes
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'quotes'
    }
  ])
)(Dashboard);
