import {
  dislikeQuotationRequest,
  dislikeQuotationSuccess,
  dislikeQuotationFailure
} from 'quotes/actionCreators';

const dislikeQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
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
