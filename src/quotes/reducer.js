import {
  CREATE_QUOTATION,
  CREATE_QUOTATION_ERROR,
  DELETE_QUOTATION,
  DELETE_QUOTATION_ERROR,
  LIKE_QUOTATION,
  LIKE_QUOTATION_ERROR,
  DISLIKE_QUOTATION,
  DISLIKE_QUOTATION_ERROR,
  TOGGLE_SORT_ORDER,
  LOAD_MORE_QUOTES_REQUEST,
  LOAD_MORE_QUOTES_SUCCESS,
  // LOAD_MORE_QUOTES_FAILURE,
  RESET_PAGINATION
} from './actions';

const initialState = {
  error: null,
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

export default function(state = initialState, action) {
  const { type, quotation, sortBy, error } = action;
  switch (type) {
    case CREATE_QUOTATION:
      console.log('Created Quotation', quotation);
      return state;
    case CREATE_QUOTATION_ERROR:
      console.log('create quotation error', error);
      return state;
    case DELETE_QUOTATION:
      console.log('dellete document from collection');
      return state;
    case DELETE_QUOTATION_ERROR:
      console.log('dellete document from collection error', error);
      return state;
    case LIKE_QUOTATION:
      console.log('Add to Favorite');
      return state;
    case LIKE_QUOTATION_ERROR:
      console.log('Add to Favorite error', error);
      return state;
    case DISLIKE_QUOTATION:
      console.log('Remove from favorites');
      return state;
    case DISLIKE_QUOTATION_ERROR:
      console.log('Remove from favorites error', error);
      return state;
    case TOGGLE_SORT_ORDER:
      return changeSortOrder(state, sortBy);
    case LOAD_MORE_QUOTES_REQUEST:
      console.log('try load more quotes');
      return addPaginationLimit(state);
    case LOAD_MORE_QUOTES_SUCCESS:
      console.log('recive more quotes');
      return reciveMoreQuotes(state);
    case RESET_PAGINATION:
      console.log('Reset pagination');
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
