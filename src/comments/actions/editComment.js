import {
  editCommentRequest,
  editCommentSuccess,
  editCommentFailure
} from 'comments/actionCreators';

const editComment = (quotationID, commentID, content) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(editCommentRequest());
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .doc(commentID)
      .update({
        content
      })
      .then(() => {
        dispatch(editCommentSuccess());
      })
      .catch(error => {
        dispatch(editCommentFailure(error));
      });
  };
};

export default editComment;
