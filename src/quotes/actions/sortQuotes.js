import { actionTypes } from 'redux-firestore';

import {
  sortQuotesRequest,
  sortQuotesSuccess,
  sortQuotesFailure,
  resetPagination
} from 'quotes/actionCreators';

const sortQuotes = sortBy => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    dispatch(sortQuotesRequest(sortBy));
    dispatch(resetPagination());
    const sortInfo = getState().quotes.sortTypes.find(
      ({ name }) => name === sortBy
    );
    const { order } = sortInfo;
    const { type } = sortInfo;
    firestore
      .get({
        collection: 'quotes',
        orderBy: [type, order],
        limit: 2
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
