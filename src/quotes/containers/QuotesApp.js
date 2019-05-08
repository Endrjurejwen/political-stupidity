import React, { useEffect } from 'react';
import { shape, arrayOf, bool, string } from 'prop-types';
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
  getPaginationState,
  getCurrentSortState,
  getIsLoadingState,
  getFilterInstructionState
} from 'quotes/selectors';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import Panel from 'quotes/components/Panel';
import QuotesList from 'quotes/components/QuotesList';
import {
  WithLoader,
  WithEmptyInfo,
  withInfiniteScroll,
  withErrorHandler
} from 'common';
import { quotationType } from 'quotes/propTypes';
import { loadMoreQuotes, resetQuotesError } from 'quotes/actions';
import { H6 } from 'elements';

const quotesApp = ({ location, quotes, user, isLoading }) => {
  useEffect(() => {
    const id = location.state ? location.state.id : 0;
    if (id) {
      window.scrollTo(0, id);
    }
  }, []);

  return (
    <>
      {user.id ? <CreateQuotationToggle /> : <LoginButton fixed />}
      <Panel />
      <div>
        <WithLoader isLoading={!quotes || isLoading}>
          <WithEmptyInfo
            isEmpty={!quotes || !quotes.length}
            info={<H6 center>Nie ma jeszcze żadnych cytatów</H6>}
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
  currentFilterInstruction: getFilterInstructionState(state),
  user: getUserInfoState(state),
  currentSort: getCurrentSortState(state),
  pagination: getPaginationState(state),
  counters: getCountersState(state),
  error: state.quotes.error
});

export default compose(
  withRouter,
  withFirebase,
  withFirestore,
  connect(
    mapStateToProps,
    { loadMoreQuotes, resetQuotesError }
  ),
  firestoreConnect(props => [
    {
      collection: 'quotes',
      orderBy: [props.currentSort.type, props.currentSort.order],
      limit: props.pagination.limit,
      where: props.currentFilterInstruction
    }
  ]),
  withErrorHandler({ actionName: 'resetQuotesError' }),
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
