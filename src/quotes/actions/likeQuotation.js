import {
  likeQuotationRequest,
  likeQuotationSuccess,
  likeQuotationFailure
} from 'quotes/actionCreators';

const likeQuotation = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
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
