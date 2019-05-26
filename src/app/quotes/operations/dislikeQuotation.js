import {
  dislikeQuotationRequest,
  dislikeQuotationSuccess,
  dislikeQuotationFailure
} from 'app/quotes/actions';

const getQuotation = (state, id) => {
  const quotation = state.firestore.data.quotation
    ? state.firestore.data.quotation
    : state.firestore.data.quotes[id];
  return quotation;
};

const dislikeQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    // const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
    const state = getState();
    const quotation = getQuotation(state, id);
    const oldLikesCount = quotation.likesCount;
    dispatch(dislikeQuotationRequest());
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: firebase.firestore.FieldValue.delete(),
        likesCount: oldLikesCount - 1
      })
      .then(() => {
        dispatch(dislikeQuotationSuccess());
      })
      .catch(error => {
        dispatch(dislikeQuotationFailure(error));
      });
  };
};

export default dislikeQuotation;
