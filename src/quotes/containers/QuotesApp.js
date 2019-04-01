import React, { useEffect } from 'react';
import { shape, arrayOf, func, bool, string, number } from 'prop-types';
import { history } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { getCountersState } from 'header/selectors';
import {
  getQuotesState,
  getSortOrderState,
  getPaginationState,
  getCurrentSortState
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

const quotesApp = ({
  actions,
  firestore,
  history,
  location,
  pagination,
  quotes,
  sortOrder,
  currentSort,
  user
}) => {
  // useEffect(() => {
  //   console.log('useEffect');
  //   firestore.setListener({
  //     collection: 'quotes',
  //     orderBy: [currentSort.type, currentSort.order],
  //     limit: pagination.limit
  //   });

  //   return function cleanup() {
  //     firestore.unsetListener('quotes');
  //   };
  // }, [user.id]);

  const handleNavigateClick = id => {
    history.push(`/quotes/${id}`);
  };

  const handleLikeClick = id => {
    if (!user.id) {
      history.push('/login');
    } else {
      actions.likeQuotation(id);
    }
  };

  const handleDislikeClick = id => {
    if (!user.id) {
      history.push('/login');
    } else {
      actions.dislikeQuotation(id);
    }
  };

  const handleDeleteClick = id => {
    actions.deleteQuotation(id);
  };

  const handleSortClick = event => {
    history.push('/quotes');
    const sortBy = event.target.dataset.sortby;
    actions.sortQuotes(sortBy);
  };

  return (
    <>
      <Panel onSortClick={handleSortClick} sortOrder={sortOrder} />
      <WithLoader isLoading={!quotes}>
        <WithEmptyInfo
          isEmpty={!quotes || !quotes.length}
          info={<H5 center>Nie ma jeszcze żadnych cytatów</H5>}
        >
          <QuotesList
            quotes={quotes}
            user={user}
            navigationClick={handleNavigateClick}
            onLikeClick={handleLikeClick}
            onDislikeClick={handleDislikeClick}
            deleteClick={handleDeleteClick}
          />
        </WithEmptyInfo>
      </WithLoader>
    </>
  );
};

quotesApp.propTypes = {
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

quotesApp.defaultProps = {
  quotes: null,
  user: null
};

const mapStateToProps = state => ({
  quotes: getQuotesState(state),
  user: getUserInfoState(state),
  currentSort: getCurrentSortState(state),
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
  withFirestore,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    {
      collection: 'quotes',
      orderBy: [props.currentSort.type, props.currentSort.order],
      limit: props.pagination.limit
    }
  ]),
  withInfiniteScroll({ counterName: 'quotes', actionName: 'loadMoreQuotes' })
)(quotesApp);
