import React, { useEffect } from 'react';
import { arrayOf, bool } from 'prop-types';
import { userType } from 'app/auth/propTypes';
import { location } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firestoreConnect,
  withFirebase,
  withFirestore
} from 'react-redux-firebase';
import { getCountersState } from 'app/stats/selectors';
import {
  getQuotesState,
  getPaginationState,
  getCurrentSortState,
  getIsLoadingState,
  getFilterInstructionState,
  getErrorState
} from 'app/quotes/selectors';
import LoginButton from 'app/auth/components/LoginButton';
import Controls from 'app/quotes/components/Controls';
import QuotesList from 'app/quotes/components/QuotesList';
import {
  WithLoader,
  WithEmptyInfo,
  withInfiniteScroll,
  withErrorHandler,
  withToggle,
  withUser
} from 'app/common';
import { quotationType } from 'app/quotes/propTypes';
import { loadMoreQuotes } from 'app/quotes/operations';
import { resetQuotesError } from 'app/quotes/actions';
import Login from 'app/auth/containers/Login';
import CreateQuotation from 'app/quotes/containers/CreateQuotation';
import CreateQuotationButton from 'app/quotes/components/CreateQuotationButton';

import * as S from 'elements';

const LoginWithToggle = withToggle({
  modalComponent: Login,
  toggleButton: LoginButton
});

const CreateQuotationWithToggle = withToggle({
  modalComponent: CreateQuotation,
  toggleButton: CreateQuotationButton
});

export const quotesApp = ({ location, quotes, user, isLoading }) => {
  useEffect(() => {
    const id = location.state ? location.state.id : 0;
    if (id) {
      window.scrollTo(0, id);
    }
  }, []);

  return (
    <>
      {user.id ? <CreateQuotationWithToggle /> : <LoginWithToggle isFixed />}
      <Controls />
      <div>
        <WithLoader isLoading={!quotes || isLoading} bgColor="#F4F4F4">
          <WithEmptyInfo
            isEmpty={!quotes || !quotes.length}
            info={<S.H6 center>Nie ma jeszcze żadnych cytatów</S.H6>}
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
  user: userType
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
  currentSort: getCurrentSortState(state),
  pagination: getPaginationState(state),
  counters: getCountersState(state),
  error: getErrorState(state)
});

export default compose(
  withUser,
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
