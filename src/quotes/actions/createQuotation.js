import { actionTypes } from 'redux-firestore';

import {
  createQuotationRequest,
  createQuotationSuccess,
  createQuotationFailure,
  resetQotesState
} from 'quotes/actionCreators';

const createQuotation = quotation => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    dispatch(resetQotesState());
    dispatch(createQuotationRequest());
    firestore
      .collection('quotes')
      .add({
        ...quotation,
        author: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          id: authorId
        },
        createAt: new Date(),
        likes: {},
        likesCount: 0,
        commentsCount: 0
      })
      .then(() => {
        dispatch(createQuotationSuccess());
      })
      .catch(error => {
        dispatch(createQuotationFailure(error));
      });
  };
};

export default createQuotation;
