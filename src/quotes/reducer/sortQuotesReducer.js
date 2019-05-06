import {
  SORT_QUOTES_REQUEST,
  SORT_QUOTES_SUCCESS,
  SORT_QUOTES_FAILURE
} from 'quotes/actionTypes';
import initialState from './initialState';

const reciveResult = state => ({ ...state, error: null, isLoading: false });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message,
  isLoading: false
});

const changeSortOrder = (state, sortBy) => {
  const newSortTypes = [...state.sortTypes].map(sortType => {
    if (sortType.name === sortBy) {
      return {
        ...sortType,
        order: sortType.order === 'desc' ? 'asc' : 'desc',
        active: true
      };
    }
    return {
      ...sortType,
      order: 'asc',
      active: false
    };
  });
  return { ...state, sortTypes: [...newSortTypes], isLoading: true };
};

export default (state = initialState, action) => {
  const { type, sortBy } = action;
  switch (type) {
    case SORT_QUOTES_REQUEST:
      return changeSortOrder(state, sortBy);
    case SORT_QUOTES_SUCCESS:
      return reciveResult(state);
    case SORT_QUOTES_FAILURE:
      return reciveError(state, action);
    default:
      return state;
  }
};
