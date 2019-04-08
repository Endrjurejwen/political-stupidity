import reduceReducers from 'reduce-reducers';
import {
  makeAsyncReducer,
  makeAsyncReducerWithLoading
} from 'store/reducerFactory';

import {
  SORT_QUOTES_REQUEST,
  SORT_QUOTES_SUCCESS,
  SORT_QUOTES_FAILURE,
  LOAD_MORE_QUOTES_REQUEST,
  LOAD_MORE_QUOTES_SUCCESS,
  LOAD_MORE_QUOTES_FAILURE,
  RESET_PAGINATION,
  RESET_QUOTES_STATE
} from './actionTypes';

const initialState = {
  error: null,
  isLoading: false,
  pagination: {
    limit: 2,
    added: 2,
    isLoading: false
  },
  sortTypes: [
    {
      name: 'time',
      order: 'desc',
      type: 'createAt',
      active: true
    },
    {
      name: 'comments',
      order: 'asc',
      type: 'commentsCount',
      active: false
    },
    {
      name: 'likes',
      order: 'asc',
      type: 'likesCount',
      active: false
    }
  ]
};

const reciveResult = state => ({ ...state, error: null, isLoading: false });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message,
  isLoading: false
});

// SORT QUOTES REDUCER
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

const sortQuotesReducer = (state = initialState, action) => {
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

// LOAD MORE QUOTES REDUCER
const addPaginationLimit = state => {
  // const pagination = { ...state.pagination };
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

const loadMoreQuotesReducer = (state = initialState, action) => {
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

// RESET QUOTES REDUCER
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

const createQuotationReducer = makeAsyncReducerWithLoading({
  name: 'CREATE_QUOTATION',
  initialState
});

const editQuotationReducer = makeAsyncReducerWithLoading({
  name: 'EDIT_QUOTATION',
  initialState
});

const deleteQuotationReducer = makeAsyncReducerWithLoading({
  name: 'DELETE_QUOTATION',
  initialState
});
const likeQuotationReducer = makeAsyncReducer({
  name: 'LIKE_QUOTATION',
  initialState
});
const dislikeQuotationReducer = makeAsyncReducer({
  name: 'DISLIKE_QUOTATION',
  initialState
});

const reducer = reduceReducers(
  createQuotationReducer,
  editQuotationReducer,
  deleteQuotationReducer,
  likeQuotationReducer,
  dislikeQuotationReducer,
  sortQuotesReducer,
  loadMoreQuotesReducer,
  resetQuotesReducer
);

export default reducer;

// const initialState = {
//   error: null,
//   isLoading: false,
//   pagination: {
//     limit: 2,
//     added: 2,
//     isLoading: false
//   },
//   sortTypes: [
//     {
//       name: 'time',
//       order: 'desc',
//       type: 'createAt',
//       active: true
//     },
//     {
//       name: 'comments',
//       order: 'asc',
//       type: 'commentsCount',
//       active: false
//     },
//     {
//       name: 'likes',
//       order: 'asc',
//       type: 'likesCount',
//       active: false
//     }
//   ]
// };

// const changeSortOrder = (state, sortBy) => {
//   const newSortTypes = [...state.sortTypes].map(sortType => {
//     if (sortType.name === sortBy) {
//       return {
//         ...sortType,
//         order: sortType.order === 'desc' ? 'asc' : 'desc',
//         active: true
//       };
//     }
//     return {
//       ...sortType,
//       order: 'asc',
//       active: false
//     };
//   });
//   return { ...state, sortTypes: [...newSortTypes], isLoading: true };
// };

// const addPaginationLimit = state => {
//   // const pagination = { ...state.pagination };
//   const newPagination = {
//     ...state.pagination,
//     limit: state.pagination.limit + state.pagination.added,
//     isLoading: true
//   };
//   return { ...state, pagination: { ...newPagination } };
// };

// const resetPagination = state => ({
//   ...state,
//   pagination: {
//     ...initialState.pagination
//   }
// });

// const reciveMoreQuotes = state => ({
//   ...state,
//   pagination: {
//     ...state.pagination,
//     isLoading: false
//   }
// });

// const sendRequest = state => ({ ...state, error: null, isLoading: false });
// const reciveResult = state => ({ ...state, isLoading: false });
// const reciveError = (state, action) => ({
//   ...state,
//   error: action.error.message
// });

// export default function(state = initialState, action) {
//   const { type, sortBy } = action;
//   switch (type) {
//     case CREATE_QUOTATION_REQUEST:
//       return sendRequest(state);
//     case CREATE_QUOTATION_SUCCESS:
//       return reciveResult(state);
//     case CREATE_QUOTATION_FAILURE:
//       return reciveError(state, action);
//     case DELETE_QUOTATION_REQUEST:
//       return sendRequest(state);
//     case DELETE_QUOTATION_SUCCESS:
//       return reciveResult(state);
//     case DELETE_QUOTATION_FAILURE:
//       return reciveError(state, action);
//     case LIKE_QUOTATION_REQUEST:
//       return sendRequest(state);
//     case LIKE_QUOTATION_SUCCESS:
//       return reciveResult(state);
//     case LIKE_QUOTATION_FAILURE:
//       return reciveError(state, action);
//     case DISLIKE_QUOTATION_REQUEST:
//       return sendRequest(state);
//     case DISLIKE_QUOTATION_SUCCESS:
//       return reciveResult(state);
//     case DISLIKE_QUOTATION_FAILURE:
//       return reciveError(state, action);
//     case SORT_QUOTES_REQUEST:
//       return changeSortOrder(state, sortBy);
//     case SORT_QUOTES_SUCCESS:
//       return reciveResult(state);
//     case SORT_QUOTES_FAILURE:
//       return reciveError(state, action);
//     case LOAD_MORE_QUOTES_REQUEST:
//       return addPaginationLimit(state);
//     case LOAD_MORE_QUOTES_SUCCESS:
//       return reciveMoreQuotes(state);
//     case LOAD_MORE_QUOTES_FAILURE:
//       return reciveError(state);
//     case RESET_PAGINATION:
//       return resetPagination(state);
//     case RESET_QUOTES_STATE:
//       return initialState;
//     default:
//       return state;
//   }
// }
