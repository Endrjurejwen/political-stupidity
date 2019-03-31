import {
  dislikeCommentRequest,
  dislikeCommentSuccess,
  dislikeCommentFailure
} from 'comments/actionCreators';

const dislikeComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.comments[commentID]
      .likesCount;
    dispatch(dislikeCommentRequest());
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .doc(commentID)
      .update({
        [`likes.${authorId}`]: firebase.firestore.FieldValue.delete(),
        likesCount: oldLikesCount - 1
      })
      .then(() => {
        dispatch(dislikeCommentSuccess());
      })
      .catch(error => {
        dispatch(dislikeCommentFailure(error));
      });
  };
};

export default dislikeComment;
