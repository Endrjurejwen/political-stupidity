import {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from 'comments/actionCreators';

const deleteComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(deleteCommentRequest());
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .doc(commentID)
      .delete()
      .then(() => {
        dispatch(deleteCommentSuccess());
      })
      .catch(error => {
        dispatch(deleteCommentFailure(error));
      });
  };
};

export default deleteComment;
