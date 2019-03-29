import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { getCountersState } from 'header/selectors';
import {
  getQuotesState,
  getSortOrderState,
  getPaginationState
} from 'quotes/selectors';
import Panel from 'quotes/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { WithLoader, WithEmptyInfo, withInfiniteScroll } from 'common';
import { quotationType, firebaseType } from 'quotes/types';
import { H5 } from 'elements';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation,
  sortQuotes,
  loadMoreQuotes
} from 'quotes/actions';

class QuotesApp extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string
    }),
    quotes: PropTypes.arrayOf(quotationType),
    actions: PropTypes.shape({
      likeQuotation: PropTypes.func.isRequired,
      dislikeQuotation: PropTypes.func.isRequired,
      deleteQuotation: PropTypes.func.isRequired,
      sortQuotes: PropTypes.func.isRequired
    }).isRequired,
    sortOrder: PropTypes.shape({
      time: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      likes: PropTypes.string.isRequired
    }).isRequired,
    firestore: firebaseType.isRequired,
    history: ReactRouterPropTypes.history.isRequired
  };

  static defaultProps = {
    user: null,
    quotes: null
  };

  // workaround dla problemu z dodawaniem cytatów po ponownym wejściu
  componentDidMount = () => {
    const { firestore, sortOrder, pagination } = this.props;
    firestore.setListener({
      collection: 'quotes',
      orderBy: ['createAt', sortOrder.time],
      limit: pagination.limit
    });
    // window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount = () => {
    this.props.firestore.unsetListener('quotes');
    // window.removeEventListener('scroll', this.onScroll);
  };

  // onScroll = () => {
  //   const { actions, counters, pagination } = this.props;
  //   const isBottom =
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight; // "document.body.offsetHeight - 300" if you want load before bottom
  //   const isMoreContent = pagination.limit < counters.quotes;
  //   if (isBottom && isMoreContent && !pagination.isLoading) {
  //     actions.loadMoreQuotes();
  //   }
  // };

  handleNavigateClick = id => {
    this.props.history.push(`/quotes/${id}`);
  };

  // likeOrDislikeQuotationHandler = id => {
  //   const { user, history, quotes, actions } = this.props;
  //   const quotation = quotes.find(quotation => quotation.id === id);
  //   const isLiked = user.id in quotation.likes;
  //   if (!user.id) {
  //     history.push('/login');
  //   }
  //   if (user.id && !isLiked) {
  //     actions.likeQuotation(id);
  //   } else {
  //     actions.dislikeQuotation(id);
  //   }
  // };

  handleLikeClick = id => {
    const { user, history, actions } = this.props;
    if (!user.id) {
      history.push('/login');
    } else {
      actions.likeQuotation(id);
    }
  };

  handleDislikeClick = id => {
    const { user, history, actions } = this.props;
    if (!user.id) {
      history.push('/login');
    } else {
      actions.dislikeQuotation(id);
    }
  };

  handleDeleteClick = id => {
    this.props.actions.deleteQuotation(id);
  };

  handleSortClick = event => {
    const sortBy = event.target.dataset.sortby;
    this.props.actions.sortQuotes(sortBy);
  };

  render() {
    const { quotes, user, sortOrder } = this.props;
    return (
      <>
        <Panel onSortClick={this.handleSortClick} sortOrder={sortOrder} />
        <WithLoader isLoading={!quotes}>
          <WithEmptyInfo
            isEmpty={!quotes || !quotes.length}
            info={<H5 center>Nie ma jeszcze żadnych cytatów</H5>}
          >
            <QuotesList
              quotes={quotes}
              user={user}
              navigationClick={this.handleNavigateClick}
              onLikeClick={this.handleLikeClick}
              onDislikeClick={this.handleDislikeClick}
              deleteClick={this.handleDeleteClick}
            />
            {/* {this.props.pagination.isLoading && <Spinner />}
            {this.props.pagination.limit > this.props.counters.quotes &&
              !this.props.pagination.isLoading && (
                <H5 center>gratulacje! dotarłeś do końca</H5>
              )} */}
          </WithEmptyInfo>
        </WithLoader>
      </>
    );
  }
}

const mapStateToProps = state => ({
  quotes: getQuotesState(state),
  user: getUserInfoState(state),
  sortOrder: getSortOrderState(state),
  pagination: getPaginationState(state),
  counters: getCountersState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        likeQuotation,
        dislikeQuotation,
        deleteQuotation,
        sortQuotes,
        loadMoreQuotes
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    // {
    //   collection: 'quotes'
    // }
  ]),
  withInfiniteScroll({ counterName: 'quotes', actionName: 'loadMoreQuotes' })
)(QuotesApp);

// let quotesBox;
// if (!quotes) {
//   quotesBox = <Spinner />;
// }
// if (!quotes.length) {
//   quotesBox = (
//     <H5 center data-testid="information">
//       Nie ma jeszcze żadnych cytatów
//     </H5>
//   );
// }
// if (quotes.length) {
// quotesBox = (
//   <WithLoader isLoading={!quotes}>
//     <WithEmptyInfo
//       isEmpty={!quotes || !quotes.length}
//       info={<H5 center>Nie ma jeszcze żadnych cytatów</H5>}
//     >
//       <QuotesList
//         quotes={quotes}
//         userId={authId}
//         navigationClick={this.navigationToQuotationDetailsHandler}
//         likeClick={this.likeOrDislikeQuotationHandler}
//         deleteClick={this.deleteQuotationHandler}
//       />
//     </WithEmptyInfo>
//   </WithLoader>
// );
// }
