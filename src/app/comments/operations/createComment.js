import {
  createCommentRequest,
  createCommentSuccess,
  createCommentFailure
} from 'app/comments/actions';

const createComment = (quotationID, content) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    dispatch(createCommentRequest());
    return firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .add({
        // ...comment,
        content,
        author: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          id: authorId
        },
        createAt: new Date(),
        likesCount: 0,
        likes: {}
      })
      .then(() => {
        dispatch(createCommentSuccess());
      })
      .catch(error => {
        dispatch(createCommentFailure(error));
      });
  };
};

export default createComment;
