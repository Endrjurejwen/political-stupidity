import React, { useEffect } from 'react';
import { shape, arrayOf, func, bool, string } from 'prop-types';
import { location } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getUserInfoState } from 'auth/selectors';
import { getCountersState } from 'stats/selectors';
import {
  getQuotesState,
  getSortOrderState,
  getPaginationState,
  getCurrentSortState,
  getIsLoadingState
} from 'quotes/selectors';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import Panel from 'quotes/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import { WithLoader, WithEmptyInfo, withInfiniteScroll } from 'common';
import { quotationType } from 'quotes/propTypes';
import { sortQuotes, loadMoreQuotes } from 'quotes/actions';

const quotesApp = ({
  sortQuotes,
  location,
  quotes,
  sortOrder,
  user,
  isLoading
}) => {
  useEffect(() => {
    const id = location.state ? location.state.id : 0;
    if (id) {
      window.scrollTo(0, id);
    }
  }, []);

  const handleSortClick = event => {
    const sortBy = event.target.dataset.sortby;
    sortQuotes(sortBy);
  };

  return (
    <>
      {user.id ? <CreateQuotationToggle /> : <LoginButton fixed />}
      <Panel onSortClick={handleSortClick} sortOrder={sortOrder} />
      <div>
        <WithLoader isLoading={!quotes || isLoading}>
          <WithEmptyInfo
            isEmpty={!quotes || !quotes.length}
            info={<p>Nie ma jeszcze żadnych cytatów</p>}
          >
            <QuotesList quotes={quotes} />
          </WithEmptyInfo>
        </WithLoader>
      </div>
    </>
  );
};

quotesApp.propTypes = {
  isLoading: bool,
  location: location.isRequired,
  quotes: arrayOf(quotationType),
  sortOrder: shape({
    comments: shape({
      active: bool,
      oder: string
    }).isRequired,
    likes: shape({
      active: bool,
      oder: string
    }).isRequired,
    time: shape({
      active: bool,
      oder: string
    }).isRequired
  }).isRequired,
  sortQuotes: func.isRequired,
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

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  connect(
    mapStateToProps,
    { sortQuotes, loadMoreQuotes }
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

// const handleNavigateClick = id => {
//   history.push({
//     pathname: `/quotes/${id}`,
//     state: { id: window.scrollY }
//   });
// };

// const handleLikeClick = id => {
//   if (!user.id) {
//     history.push('/login');
//   } else {
//     actions.likeQuotation(id);
//   }
// };

// const handleDislikeClick = id => {
//   if (!user.id) {
//     history.push('/login');
//   } else {
//     actions.dislikeQuotation(id);
//   }
// };

// const handleDeleteClick = id => {
//   actions.deleteQuotation(id);
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         sortQuotes,
//         loadMoreQuotes
//       },
//       dispatch
//     )
//   };
// };
