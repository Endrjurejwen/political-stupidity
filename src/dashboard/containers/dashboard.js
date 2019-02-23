/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { Spinner } from 'common';
import { H5 } from 'elements';
import {
  addToFavorite,
  removeFromFavorite,
  checkIfFavorite
} from 'quotes/actions';

class Dashboard extends Component {
  componentDidUpdate = () => {
    this.props.checkIfFavorite();
  };

  navigationToQuotationDetailsHandler = id => {
    this.props.history.push(`/quotes/${id}`);
  };

  toFavoriteHandler = id => {
    const {
      auth,
      history,
      quotes,
      addToFavorite,
      removeFromFavorite,
      checkIfFavorite
    } = this.props;
    const quotation = quotes.find(quotation => quotation.id === id);
    if (!auth.uid) {
      history.push('/login');
    }
    if (auth.uid && !quotation.likes.includes(auth.uid)) {
      addToFavorite(id);
    }
    if (auth.uid && quotation.likes.includes(auth.uid)) {
      removeFromFavorite(id);
    }
  };

  render() {
    const { quotes, auth } = this.props;

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
          likeClick={this.toFavoriteHandler}
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
  quotes: state.firestore.ordered.quotes,
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToFavorite,
      checkIfFavorite,
      removeFromFavorite
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: 'quotes'
    }
  ])
)(Dashboard);
