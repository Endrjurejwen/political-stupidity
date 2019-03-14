import React, { PureComponent } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionTypes } from 'redux-firestore';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { Spinner } from 'common';
import { H5 } from 'elements';
import {
  addToFavorites,
  removeFromFavorites,
  deleteQuotation
} from 'quotes/actions';

class Dashboard extends PureComponent {
  // componentDidMount = () => {
  //   this.props.firestore.setListener({
  //     collection: 'quotes'
  //   });
  // };

  // componentDidUpdate = prevProps => {
  //   if (this.props.auth.uid !== prevProps.auth.uid) {
  //     this.props.checkIfFavorite();
  //   }
  // };

  // workaround dla problemu z dodawaniem cytatów po ponownym wejściu
  componentDidMount = () => {
    this.props.firestore.setListener('quotes');
  };

  componentWillUnmount = () => {
    this.props.firestore.unsetListener('quotes');
  };

  // shouldComponentUpdate = (nextProps) => {
  //   return nextProps.quotes !== this.props.quotes;
  // }

  componentDidUpdate = () => {
    console.log('update');
  };

  navigationToQuotationDetailsHandler = id => {
    this.props.history.push(`/quotes/${id}`);
  };

  toFavoritesHandler = id => {
    const {
      auth,
      history,
      quotes,
      addToFavorites,
      removeFromFavorites
    } = this.props;
    const quotation = quotes.find(quotation => quotation.id === id);
    if (!auth.uid) {
      history.push('/login');
    }
    if (!(auth.uid in quotation.likes)) {
      addToFavorites(id);
    }
    if (auth.uid in quotation.likes) {
      removeFromFavorites(id);
    }
  };

  deleteQuotationHandler = id => {
    this.props.deleteQuotation(id);
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
          likeClick={this.toFavoritesHandler}
          deleteClick={this.deleteQuotationHandler}
          userId={auth.uid}
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
      addToFavorites,
      removeFromFavorites,
      deleteQuotation
    },
    dispatch
  );

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    // {
    //   collection: 'quotes'
    // }
  ])
)(Dashboard);
