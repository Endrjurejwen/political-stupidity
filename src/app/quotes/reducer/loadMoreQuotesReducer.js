import {
  LOAD_MORE_QUOTES_REQUEST,
  LOAD_MORE_QUOTES_SUCCESS,
  LOAD_MORE_QUOTES_FAILURE
} from 'app/quotes/actionTypes';
import initialState from './initialState';

const reciveError = (state, action) => ({
  ...state,
  error: action.error.message,
  isLoading: false
});

const addPaginationLimit = state => {
  const newPagination = {
    ...state.pagination,
    limit: state.pagination.limit + state.pagination.added,
    isLoading: true
  };
  return { ...state, pagination: { ...newPagination } };
};

const reciveMoreQuotes = state => ({
  ...state,
  pagination: {
    ...state.pagination,
    isLoading: false
  }
});

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_MORE_QUOTES_REQUEST:
      return addPaginationLimit(state);
    case LOAD_MORE_QUOTES_SUCCESS:
      return reciveMoreQuotes(state);
    case LOAD_MORE_QUOTES_FAILURE:
      return reciveError(state);
    default:
      return state;
  }
};
