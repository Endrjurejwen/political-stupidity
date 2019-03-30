import {
  CREATE_QUOTATION_REQUEST,
  CREATE_QUOTATION_SUCCESS,
  CREATE_QUOTATION_FAILURE,
  DELETE_QUOTATION_REQUEST,
  DELETE_QUOTATION_SUCCESS,
  DELETE_QUOTATION_FAILURE,
  LIKE_QUOTATION_REQUEST,
  LIKE_QUOTATION_SUCCESS,
  LIKE_QUOTATION_FAILURE,
  DISLIKE_QUOTATION_REQUEST,
  DISLIKE_QUOTATION_SUCCESS,
  DISLIKE_QUOTATION_FAILURE,
  SORT_QUOTES_REQUEST,
  SORT_QUOTES_SUCCESS,
  SORT_QUOTES_FAILURE,
  LOAD_MORE_QUOTES_REQUEST,
  LOAD_MORE_QUOTES_SUCCESS,
  LOAD_MORE_QUOTES_FAILURE,
  RESET_PAGINATION
} from './actionTypes';

const initialState = {
  error: null,
  // isLoading: false,
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
  return { ...state, sortTypes: [...newSortTypes] };
};

const addPaginationLimit = state => {
  const pagination = { ...state.pagination };
  const newPagination = {
    ...pagination,
    limit: state.pagination.limit + state.pagination.added,
    isLoading: true
  };
  return { ...state, pagination: { ...newPagination } };
};

const resetPagination = state => ({
  ...state,
  pagination: {
    ...initialState.pagination
  }
});

const reciveMoreQuotes = state => ({
  ...state,
  pagination: {
    ...state.pagination,
    isLoading: false
  }
});

const sendRequest = state => ({ ...state, error: null });
const reciveResult = state => ({ ...state });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message
});

export default function(state = initialState, action) {
  const { type, sortBy } = action;
  switch (type) {
    case CREATE_QUOTATION_REQUEST:
      return sendRequest(state);
    case CREATE_QUOTATION_SUCCESS:
      return reciveResult(state);
    case CREATE_QUOTATION_FAILURE:
      return reciveError(state, action);
    case DELETE_QUOTATION_REQUEST:
      return sendRequest(state);
    case DELETE_QUOTATION_SUCCESS:
      return reciveResult(state);
    case DELETE_QUOTATION_FAILURE:
      return reciveError(state, action);
    case LIKE_QUOTATION_REQUEST:
      return sendRequest(state);
    case LIKE_QUOTATION_SUCCESS:
      return reciveResult(state);
    case LIKE_QUOTATION_FAILURE:
      return reciveError(state, action);
    case DISLIKE_QUOTATION_REQUEST:
      return sendRequest(state);
    case DISLIKE_QUOTATION_SUCCESS:
      return reciveResult(state);
    case DISLIKE_QUOTATION_FAILURE:
      return reciveError(state, action);
    case SORT_QUOTES_REQUEST:
      return changeSortOrder(state, sortBy);
    case SORT_QUOTES_SUCCESS:
      return reciveResult(state);
    case SORT_QUOTES_FAILURE:
      return reciveError(state, action);
    case LOAD_MORE_QUOTES_REQUEST:
      return addPaginationLimit(state);
    case LOAD_MORE_QUOTES_SUCCESS:
      return reciveMoreQuotes(state);
    case LOAD_MORE_QUOTES_FAILURE:
      return reciveError(state);
    case RESET_PAGINATION:
      return resetPagination(state);
    default:
      return state;
  }
}

// const initialState = {
//   error: null,
//   sortTypes: {
//     time: {
//       order: 'desc',
//       type: 'createAt',
//       active: false
//     },
//     comments: {
//       order: 'asc',
//       type: 'commentsCount',
//       active: false
//     },
//     likes: {
//       order: 'asc',
//       type: 'likesCount',
//       active: false
//     }
//   }
// };

// const resetSortOrder = state => {
//   const sortTypesArray = Object.keys(state.sortTypes);
//   return sortTypesArray.reduce((acc, current) => {
//     return {
//       ...acc,
//       [current]: {
//         ...state.sortTypes[current],
//         order: 'asc',
//         active: false
//       }
//     };
//   }, {});
// };

// const changeSortOrder = (state, sortBy) => {
//   const resetSortTypes = resetSortOrder(state);
//   return {
//     ...state,
//     sortTypes: {
//       ...state.sortTypes,
//       ...resetSortTypes,
//       [sortBy]: {
//         ...state.sortTypes[sortBy],
//         order: state.sortTypes[sortBy].order === 'asc' ? 'desc' : 'asc',
//         active: true
//       }
//     }
//   };
// };
