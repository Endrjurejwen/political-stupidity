import React, { PureComponent } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { Spinner } from 'common';
import { H5 } from 'elements';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation,
  sortQuotes
} from 'quotes/actions';

class Dashboard extends PureComponent {
  // workaround dla problemu z dodawaniem cytatów po ponownym wejściu
  componentDidMount = () => {
    this.props.firestore.setListener({
      collection: 'quotes',
      orderBy: ['createAt', this.props.timeSortOrder]
    });
  };

  // componentDidUpdate = () => {
  //   this.props.firestore.setListener({
  //     collection: 'quotes',
  //     orderBy: ['createAt', this.state.order]
  //   });
  // };

  componentWillUnmount = () => {
    this.props.firestore.unsetListener('quotes');
  };

  navigationToQuotationDetailsHandler = id => {
    this.props.history.push(`/quotes/${id}`);
  };

  likeOrDislikeQuotationHandler = id => {
    const {
      auth,
      history,
      quotes,
      likeQuotation,
      dislikeQuotation
    } = this.props;
    const quotation = quotes.find(quotation => quotation.id === id);
    if (!auth.uid) {
      history.push('/login');
    }
    if (auth.uid && !(auth.uid in quotation.likes)) {
      likeQuotation(id);
    }
    if (auth.uid && auth.uid in quotation.likes) {
      dislikeQuotation(id);
    }
  };

  deleteQuotationHandler = id => {
    this.props.deleteQuotation(id);
  };

  sortingQuotesHandler = event => {
    const sortBy = event.target.dataset.sortby;
    this.props.sortQuotes(sortBy);
  };

  render() {
    const {
      quotes,
      auth,
      timeSortOrder,
      commentsSortOrder,
      likesSortOrder
    } = this.props;

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
          likeClick={this.likeOrDislikeQuotationHandler}
          deleteClick={this.deleteQuotationHandler}
          userId={auth.uid}
        />
      );
    }
    return (
      <>
        <Header />
        <Panel
          onSortClick={this.sortingQuotesHandler}
          timeSortOrder={timeSortOrder}
          commentsSortOrder={commentsSortOrder}
          likesSortOrder={likesSortOrder}
        />
        {quotesBox}
      </>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.firestore.ordered.quotes,
  auth: state.firebase.auth,
  timeSortOrder: state.quotes.sortTypes.time.order,
  commentsSortOrder: state.quotes.sortTypes.comments.order,
  likesSortOrder: state.quotes.sortTypes.likes.order
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      likeQuotation,
      dislikeQuotation,
      deleteQuotation,
      sortQuotes
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
