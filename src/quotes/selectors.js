import { createSelector, createStructuredSelector } from 'reselect';

const getQuotes = state => state.firestore.ordered.quotes;

export const getQuotesState = createSelector(
  [getQuotes],
  quotes => quotes
);

const getTimeSortOrder = state => state.quotes.sortTypes.time.order;
const getCommentsSortOrder = state => state.quotes.sortTypes.comments.order;
const getLikesSortOrder = state => state.quotes.sortTypes.likes.order;

export const getSortOrderState = createStructuredSelector({
  time: getTimeSortOrder,
  comments: getCommentsSortOrder,
  likes: getLikesSortOrder
});

const getId = ownProps => ownProps.match.params.id;

const getQuotation = (state, ownProps) => {
  const id = getId(ownProps);
  const quotation = state.firestore.data.quotes[id];
  return quotation;
};

export const makeGetQuotationState = () =>
  createSelector(
    [getQuotation],
    quotation => quotation
  );
