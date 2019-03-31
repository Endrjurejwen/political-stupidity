import { createSelector, createStructuredSelector } from 'reselect';

const getQuotes = state => state.firestore.ordered.quotes;

export const getQuotesState = createSelector(
  [getQuotes],
  quotes => quotes
);

// add getSortTypes
const getTimeSortOrder = state => {
  const timeSortType = state.quotes.sortTypes.find(
    ({ name }) => name === 'time'
  );
  const { order } = timeSortType;
  return order;
};

const getCommentsSortOrder = state => {
  const commentsSortType = state.quotes.sortTypes.find(
    ({ name }) => name === 'comments'
  );
  const { order } = commentsSortType;
  return order;
};

const getLikesSortOrder = state => {
  const likesSortType = state.quotes.sortTypes.find(
    ({ name }) => name === 'likes'
  );
  const { order } = likesSortType;
  return order;
};

export const getSortOrderState = createStructuredSelector({
  time: getTimeSortOrder,
  comments: getCommentsSortOrder,
  likes: getLikesSortOrder
});

const getId = ownProps => ownProps.match.params.id;
const getDataQuotes = state => state.firestore.data.quotes;

const getQuotation = (state, ownProps) => {
  const id = getId(ownProps);
  const quotes = getDataQuotes(state);
  const quotation = quotes ? quotes[id] : null;
  return quotation;
};

export const makeGetQuotationState = () =>
  createSelector(
    [getQuotation],
    quotation => quotation
  );

const getPaginationLimit = state => state.quotes.pagination.limit;
const getPaginationIsLoading = state => state.quotes.pagination.isLoading;

export const getPaginationState = createStructuredSelector({
  limit: getPaginationLimit,
  isLoading: getPaginationIsLoading
});

// const getTimeSortOrder = state => state.quotes.sortTypes.time.order;
// const getCommentsSortOrder = state => state.quotes.sortTypes.comments.order;
// const getLikesSortOrder = state => state.quotes.sortTypes.likes.order;

// export const getSortOrderState = createStructuredSelector({
//   time: getTimeSortOrder,
//   comments: getCommentsSortOrder,
//   likes: getLikesSortOrder
// });
