import { createSelector, createStructuredSelector } from 'reselect';

const getQuotes = state => state.firestore.ordered.quotes;

export const getQuotesState = createSelector(
  [getQuotes],
  quotes => quotes
);

const getQuotation = (state, ownProps) => {
  // const id = getId(ownProps);
  // const quotes = getDataQuotes(state);
  // const quotation = quotes ? quotes[id] : null;
  const quotation = state.firestore.ordered.quotation
    ? state.firestore.ordered.quotation[0]
    : null;
  return quotation;
};

export const makeGetQuotationState = () =>
  createSelector(
    [getQuotation],
    quotation => quotation
  );

const getPaginationLimit = state => state.quotes.pagination.limit;
const getPaginationIsLoading = state => state.quotes.pagination.isLoading;
const getPaginationInitialLimit = state => state.quotes.pagination.initialLimit;

export const getPaginationState = createStructuredSelector({
  limit: getPaginationLimit,
  initialLimit: getPaginationInitialLimit,
  isLoading: getPaginationIsLoading
});

const getCurrentSort = state => {
  const currentSort = state.quotes.sortTypes.find(
    ({ active }) => active === true
  );
  return currentSort;
};

const getCurrentSortOrder = state => {
  const { order } = getCurrentSort(state);
  return order;
};

const getCurrentSortType = state => {
  const { type } = getCurrentSort(state);
  return type;
};

export const getCurrentSortState = createStructuredSelector({
  type: getCurrentSortType,
  order: getCurrentSortOrder
});

const getIsLoading = state => state.quotes.isLoading;

export const getIsLoadingState = createSelector(
  [getIsLoading],
  isLoading => isLoading
);

const getSortTypes = state => state.quotes.sortTypes;

export const getSortTypesState = createSelector(
  [getSortTypes],
  sortTypes => sortTypes
);

const getFilterName = state => state.quotes.filter.name;

export const getFilterNameState = createSelector(
  [getFilterName],
  name => name
);

const getFilterInstruction = state => state.quotes.filter.instruction;

export const getFilterInstructionState = createSelector(
  [getFilterInstruction],
  instruction => instruction
);

// const getSortType = (state, sortTypeName) => {
//   return state.quotes.sortTypes.find(({ name }) => name === sortTypeName);
// };

// // TIME ORDER
// const getTimeSortOrder = state => {
//   const timeSortType = getSortType(state, 'time');
//   const { order } = timeSortType;
//   return order;
// };

// const getTimeSortActive = state => {
//   const timeSortType = getSortType(state, 'time');
//   const { active } = timeSortType;
//   return active;
// };

// const getTimeSortType = createStructuredSelector({
//   order: getTimeSortOrder,
//   active: getTimeSortActive
// });

// // COMMENTS ORDER
// const getCommentsSortOrder = state => {
//   const timeSortType = getSortType(state, 'comments');
//   const { order } = timeSortType;
//   return order;
// };

// const getCommentsSortActive = state => {
//   const timeSortType = getSortType(state, 'comments');
//   const { active } = timeSortType;
//   return active;
// };

// const getCommentsSortType = createStructuredSelector({
//   order: getCommentsSortOrder,
//   active: getCommentsSortActive
// });

// // LIKE ORDER
// const getLikesSortOrder = state => {
//   const timeSortType = getSortType(state, 'likes');
//   const { order } = timeSortType;
//   return order;
// };

// const getLikesSortActive = state => {
//   const timeSortType = getSortType(state, 'likes');
//   const { active } = timeSortType;
//   return active;
// };

// const getLikesSortType = createStructuredSelector({
//   order: getLikesSortOrder,
//   active: getLikesSortActive
// });

// export const getSortOrderState = createStructuredSelector({
//   time: getTimeSortType,
//   comments: getCommentsSortType,
//   likes: getLikesSortType
// });
