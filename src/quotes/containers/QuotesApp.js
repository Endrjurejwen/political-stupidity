import React, { PureComponent } from 'react';
import { shape, arrayOf, func, bool, string, number } from 'prop-types';
import { history } from 'react-router-prop-types';
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
import { quotationType, firebaseType } from 'quotes/propTypes';
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
    actions: shape({
      deleteQuotation: func.isRequired,
      dislikeQuotation: func.isRequired,
      likeQuotation: func.isRequired,
      sortQuotes: func.isRequired
    }).isRequired,
    firestore: firebaseType.isRequired,
    history: history.isRequired,
    pagination: shape({
      isLoading: bool.isRequired,
      limit: number.isRequired
    }).isRequired,
    quotes: arrayOf(quotationType),
    sortOrder: shape({
      comments: string.isRequired,
      likes: string.isRequired,
      time: string.isRequired
    }).isRequired,
    user: shape({
      id: string
    })
  };

  static defaultProps = {
    quotes: null,
    user: null
  };

  // workaround dla problemu z dodawaniem cytatów po ponownym wejściu
  componentDidMount = () => {
    const { firestore, sortOrder, pagination } = this.props;
    firestore.setListener({
      collection: 'quotes',
      orderBy: ['createAt', sortOrder.time],
      limit: pagination.limit
    });
  };

  componentWillUnmount = () => {
    this.props.firestore.unsetListener('quotes');
  };

  handleNavigateClick = id => {
    this.props.history.push(`/quotes/${id}`);
  };

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
