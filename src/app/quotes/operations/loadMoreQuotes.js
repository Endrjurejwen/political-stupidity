import {
  loadMoreQuotesRequest,
  loadMoreQuotesSuccess,
  loadMoreQuotesFailure
} from 'app/quotes/actions';

const loadMoreQuotes = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(loadMoreQuotesRequest());
    const { filter } = getState().quotes;
    const { limit } = getState().quotes.pagination;
    const sortInfo = getState().quotes.sortTypes.find(
      ({ active }) => active === true
    );
    const { order } = sortInfo;
    const { type } = sortInfo;
    firestore
      .get({
        collection: 'quotes',
        orderBy: [type, order],
        limit,
        where: filter.instruction
      })
      .then(() => {
        dispatch(loadMoreQuotesSuccess());
      })
      .catch(error => {
        dispatch(loadMoreQuotesFailure(error));
      });
  };
};

export default loadMoreQuotes;
