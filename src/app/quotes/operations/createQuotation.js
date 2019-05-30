import { actionTypes } from 'redux-firestore';

import {
  createQuotationRequest,
  createQuotationSuccess,
  createQuotationFailure,
  resetQotesState
} from 'app/quotes/actions';

const createQuotation = quotation => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: true }
    });
    dispatch(resetQotesState());
    dispatch(createQuotationRequest());
    return firestore
      .collection('quotes')
      .add({
        ...quotation,
        author: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          nick: profile.nick,
          id: authorId
        },
        createAt: new Date(),
        likes: {},
        likesCount: 0,
        commentsCount: 0
      })
      .then(res => {
        dispatch(createQuotationSuccess());
        return res;
      })
      .catch(error => {
        dispatch(createQuotationFailure(error));
      });
  };
};

export default createQuotation;
