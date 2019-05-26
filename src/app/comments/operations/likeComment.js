import {
  likeCommentRequest,
  likeCommentSuccess,
  likeCommentFailure
} from 'app/comments/actions';

const likeComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.comments[commentID]
      .likesCount;
    dispatch(likeCommentRequest());
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .doc(commentID)
      .update({
        [`likes.${authorId}`]: true,
        likesCount: oldLikesCount + 1
      })
      .then(() => {
        dispatch(likeCommentSuccess());
      })
      .catch(error => {
        dispatch(likeCommentFailure(error));
      });
  };
};

export default likeComment;
