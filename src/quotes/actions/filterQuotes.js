import { actionTypes } from 'redux-firestore';

import {
  filterQuotesRequest,
  filterQuotesSuccess,
  filterQuotesFailure,
  resetPagination
} from 'quotes/actionCreators';

const setFilterInstruction = filterName => {
  if (filterName === 'all') {
    return null;
  }
  return [['topics', 'array-contains', filterName]];
};

const filterQuotes = name => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const instruction = setFilterInstruction(name);
    const filter = {
      name,
      instruction
    };
    dispatch(resetPagination());
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    dispatch(filterQuotesRequest(filter));
    const sortInfo = getState().quotes.sortTypes.find(
      ({ active }) => active === true
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
        dispatch(filterQuotesSuccess());
      })
      .catch(error => {
        dispatch(filterQuotesFailure(error));
      });
  };
};

export default filterQuotes;
