import {
  likeQuotationRequest,
  likeQuotationSuccess,
  likeQuotationFailure
} from 'app/quotes/actions';

const getQuotation = (state, id) => {
  const quotation = state.firestore.data.quotation
    ? state.firestore.data.quotation
    : state.firestore.data.quotes[id];
  return quotation;
};

const likeQuotation = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const state = getState();
    const quotation = getQuotation(state, id);
    const oldLikesCount = quotation.likesCount;
    dispatch(likeQuotationRequest());
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: true,
        likesCount: oldLikesCount + 1
      })
      .then(() => {
        dispatch(likeQuotationSuccess());
      })
      .catch(error => {
        dispatch(likeQuotationFailure(error));
      });
  };
};

export default likeQuotation;
