import {
  loadMoreQuotesRequest,
  loadMoreQuotesSuccess,
  loadMoreQuotesFailure
} from 'quotes/actionCreators';

const loadMoreQuotes = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(loadMoreQuotesRequest());
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
        limit
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