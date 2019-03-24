import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import Header from 'dashboard/components/Header';
import Panel from 'dashboard/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { quotationType, firebaseType } from 'types';
import { Spinner } from 'common';
import { H5 } from 'elements';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation,
  sortQuotes
} from 'quotes/actions';

class Dashboard extends PureComponent {
  static propTypes = {
    authId: PropTypes.string,
    quotes: PropTypes.arrayOf(quotationType),
    likeQuotation: PropTypes.func.isRequired,
    dislikeQuotation: PropTypes.func.isRequired,
    deleteQuotation: PropTypes.func.isRequired,
    sortQuotes: PropTypes.func.isRequired,
    commentsTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quotesTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sortOrder: PropTypes.shape({
      time: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired
    }).isRequired,
    firestore: firebaseType.isRequired,
    history: ReactRouterPropTypes.history.isRequired
  };

  static defaultProps = {
    authId: null,
    quotes: null,
    commentsTotal: 0,
    quotesTotal: 0
  };

  // workaround dla problemu z dodawaniem cytatów po ponownym wejściu
  componentDidMount = () => {
    const { firestore, sortOrder } = this.props;
    firestore.setListener({
      collection: 'quotes',
      orderBy: ['createAt', sortOrder.time]
    });
    firestore.setListener({ collection: 'counters' });
  };

  componentWillUnmount = () => {
    this.props.firestore.unsetListener('quotes');
  };

  navigationToQuotationDetailsHandler = id => {
    this.props.history.push(`/quotes/${id}`);
  };

  likeOrDislikeQuotationHandler = id => {
    const {
      authId,
      history,
      quotes,
      likeQuotation,
      dislikeQuotation
    } = this.props;
    const quotation = quotes.find(quotation => quotation.id === id);
    const isLiked = authId in quotation.likes;
    if (!authId) {
      history.push('/login');
    }
    if (authId && !isLiked) {
      likeQuotation(id);
    } else {
      dislikeQuotation(id);
    }
  };

  deleteQuotationHandler = id => {
    this.props.deleteQuotation(id);
  };

  sortQuotesHandler = event => {
    const sortBy = event.target.dataset.sortby;
    this.props.sortQuotes(sortBy);
  };

  render() {
    const {
      quotes,
      authId,
      sortOrder,
      commentsTotal,
      quotesTotal
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
          quotes={quotes}
          userId={authId}
          navigationClick={this.navigationToQuotationDetailsHandler}
          likeClick={this.likeOrDislikeQuotationHandler}
          deleteClick={this.deleteQuotationHandler}
        />
      );
    }
    return (
      <>
        <Header comments={commentsTotal} quotes={quotesTotal} />
        <Panel onSortClick={this.sortQuotesHandler} sortOrder={sortOrder} />
        {quotesBox}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { counters } = state.firestore.data;
  const commentsTotal = counters ? counters.comments.number : '--';
  const quotesTotal = counters ? counters.quotes.number : '--';

  return {
    quotes: state.firestore.ordered.quotes,
    authId: state.firebase.auth.uid,
    commentsTotal,
    quotesTotal,
    sortOrder: {
      time: state.quotes.sortTypes.time.order,
      comments: state.quotes.sortTypes.comments.order,
      likes: state.quotes.sortTypes.likes.order
    }
  };
};

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
