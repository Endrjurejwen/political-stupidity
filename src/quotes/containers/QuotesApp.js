import React, { useEffect } from 'react';
import { shape, arrayOf, func, bool, string } from 'prop-types';
import { history, location } from 'react-router-prop-types';
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
  getCurrentSortState,
  getIsLoadingState
} from 'quotes/selectors';
import Panel from 'quotes/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { WithLoader, WithEmptyInfo, withInfiniteScroll } from 'common';
import { quotationType } from 'quotes/propTypes';
import { H3 } from 'elements';
import { spacing } from 'utils';
import {
  likeQuotation,
  dislikeQuotation,
  deleteQuotation,
  sortQuotes,
  loadMoreQuotes
} from 'quotes/actions';

const quotesApp = ({
  actions,
  history,
  location,
  quotes,
  sortOrder,
  user,
  isLoading
}) => {
  // useEffect(() => {
  //   console.log('useEffect');
  //   firestore.setListener({
  //     collection: 'quotes',
  //     orderBy: [currentSort.type, currentSort.order],
  //     limit: pagination.limit
  //   });

  //   return function cleanup() {
  //     firestore.unsetListener({
  //       collection: 'quotes',
  //       orderBy: [currentSort.type, currentSort.order],
  //       limit: pagination.limit
  //     });
  //   };
  // }, []);

  // zrobić z tego custom hooka
  useEffect(() => {
    const id = location.state ? location.state.id : 0;
    // window.scrollTo(0, 0);
    if (id) {
      window.scrollTo(0, id);
    }
  }, []);

  const handleNavigateClick = id => {
    history.push({
      pathname: `/quotes/${id}`,
      state: { id: window.scrollY }
    });
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
    // history.push('/quotes');
    const sortBy = event.target.dataset.sortby;
    actions.sortQuotes(sortBy);
  };

  return (
    <>
      <Panel onSortClick={handleSortClick} sortOrder={sortOrder} />
      <section>
        <H3 center marginBottom={spacing[6]} >Mądrości ze świata polityki</H3>
        <WithLoader isLoading={!quotes || isLoading}>
          <WithEmptyInfo
            isEmpty={!quotes || !quotes.length}
            info={<p>Nie ma jeszcze żadnych cytatów</p>}
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
      </section>
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
  history: history.isRequired,
  isLoading: bool,
  location: location.isRequired,
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
  isLoading: false,
  quotes: null,
  user: null
};

const mapStateToProps = state => ({
  quotes: getQuotesState(state),
  isLoading: getIsLoadingState(state),
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
