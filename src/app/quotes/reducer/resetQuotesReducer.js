import { RESET_PAGINATION, RESET_QUOTES_STATE } from 'app/quotes/actionTypes';
import reduceReducers from 'reduce-reducers';
import { makeResetErrorReducer } from 'store/reducerFactory';
import initialState from './initialState';

const resetPagination = state => ({
  ...state,
  pagination: {
    ...initialState.pagination
  }
});

const resetQuotesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case RESET_PAGINATION:
      return resetPagination(state);
    case RESET_QUOTES_STATE:
      return initialState;
    default:
      return state;
  }
};

const resetQuotesRerrorReducer = makeResetErrorReducer({
  name: 'QUOTES',
  initialState
});

export default reduceReducers(resetQuotesReducer, resetQuotesRerrorReducer);

// export default reducer;
