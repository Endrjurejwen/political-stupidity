import { createSelector, createStructuredSelector } from 'reselect';

// GET QUOTES
const getQuotes = state => state.firestore.ordered.quotes;

export const getQuotesState = createSelector(
  [getQuotes],
  quotes => quotes
);

// GET QUOTATION
const getQuotation = state => {
  const quotation = state.firestore.ordered.quotation
    ? state.firestore.ordered.quotation[0]
    : null;
  return quotation;
};

export const getQuotationState = createSelector(
  [getQuotation],
  quotation => quotation
);

// GET PAGINATION
const getPaginationLimit = state => state.quotes.pagination.limit;
const getPaginationIsLoading = state => state.quotes.pagination.isLoading;
const getPaginationInitialLimit = state => state.quotes.pagination.initialLimit;

export const getPaginationState = createStructuredSelector({
  limit: getPaginationLimit,
  initialLimit: getPaginationInitialLimit,
  isLoading: getPaginationIsLoading
});

// GET SORT
const getSortTypes = state => state.quotes.sortTypes;

export const getSortTypesState = createSelector(
  [getSortTypes],
  sortTypes => sortTypes
);

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

// GET FILTER
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

// GET LOADING STATE
const getIsLoading = state => state.quotes.isLoading;

export const getIsLoadingState = createSelector(
  [getIsLoading],
  isLoading => isLoading
);

// GET ERROR
const getError = state => state.quotes.error;

export const getErrorState = createSelector(
  [getError],
  error => error
);
