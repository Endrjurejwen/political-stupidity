export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const LIKE_COMMENT_ERROR = 'LIKE_COMMENT_ERROR';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';
export const DISLIKE_COMMENT_ERROR = 'DISLIKE_COMMENT_ERROR';

export const createComment = (quotationID, comment) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .add({
        ...comment,
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        authorId,
        createAt: new Date(),
        likesCount: 0,
        likes: {}
      })
      .then(() => {
        dispatch({ type: 'CREATE_COMMENT', comment });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_COMMENT_ERROR', error });
      });
  };
};

export const deleteComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('quotes')
      .doc(quotationID)
      .collection('comments')
      .doc(commentID)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_COMMENT' });
      })
      .catch(error => {
        dispatch({ type: 'DELETE_COMMENT_ERROR', error });
      });
  };
};

export const likeComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.comments[commentID]
      .likesCount;
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
        dispatch({ type: 'LIKE_COMMENT' });
      })
      .catch(error => {
        dispatch({ type: 'LIKE_COMMENT_ERROR', error });
      });
  };
};

export const dislikeComment = (quotationID, commentID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.comments[commentID]
      .likesCount;
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
        dispatch({ type: 'DISLIKE_COMMENT' });
      })
      .catch(error => {
        dispatch({ type: 'DISLIKE_COMMENT_ERROR', error });
      });
  };
};
