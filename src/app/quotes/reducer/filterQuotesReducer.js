import {
  FILTER_QUOTES_REQUEST,
  FILTER_QUOTES_SUCCESS,
  FILTER_QUOTES_FAILURE
} from 'app/quotes/actionTypes';
import initialState from './initialState';

const reciveResult = state => ({ ...state, error: null, isLoading: false });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message,
  isLoading: false
});

const changeFilter = (state, action) => ({
  ...state,
  filter: action.filter,
  isLoading: true
});

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FILTER_QUOTES_REQUEST:
      return changeFilter(state, action);
    case FILTER_QUOTES_SUCCESS:
      return reciveResult(state);
    case FILTER_QUOTES_FAILURE:
      return reciveError(state, action);
    default:
      return state;
  }
};
