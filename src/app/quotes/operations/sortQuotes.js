import {
  sortQuotesRequest,
  sortQuotesSuccess,
  sortQuotesFailure,
  resetPagination
} from 'app/quotes/actions';

const sortQuotes = sortBy => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(resetPagination());
    dispatch(sortQuotesRequest(sortBy));
    const { filter } = getState().quotes;
    const sortInfo = getState().quotes.sortTypes.find(
      ({ name }) => name === sortBy
    );
    const { initialLimit } = getState().quotes.pagination;
    const { order } = sortInfo;
    const { type } = sortInfo;
    firestore
      .get({
        collection: 'quotes',
        orderBy: [type, order],
        limit: initialLimit,
        where: filter.instruction
      })
      .then(() => {
        dispatch(sortQuotesSuccess());
      })
      .catch(error => {
        dispatch(sortQuotesFailure(error));
      });
  };
};

export default sortQuotes;
