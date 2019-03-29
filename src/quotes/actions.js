import { actionTypes } from 'redux-firestore';
import firebase from 'config/fbConfig';

export const CREATE_QUOTATION = 'CREATE_QUOTATION';
export const CREATE_QUOTATION_ERROR = 'CREATE_QUOTATION_ERROR';
export const DELETE_QUOTATION = 'DELETE_QUOTATION';
export const DELETE_QUOTATION_ERROR = 'DELETE_QUOTATION_ERROR';
export const LIKE_QUOTATION = 'LIKE_QUOTATION';
export const LIKE_QUOTATION_ERROR = 'LIKE_QUOTATION_ERROR';
export const DISLIKE_QUOTATION = 'DISLIKE_QUOTATION';
export const DISLIKE_QUOTATION_ERROR = 'DISLIKE_QUOTATION_ERROR';
export const TOGGLE_SORT_ORDER = 'TOGGLE_SORT_ORDER';
export const LOAD_MORE_QUOTES_REQUEST = 'LOAD_MORE_QUOTES_REQUEST';
export const LOAD_MORE_QUOTES_SUCCESS = 'LOAD_MORE_QUOTES_SUCCESS';
export const LOAD_MORE_QUOTES_FAILURE = 'LOAD_MORE_QUOTES_FAILURE';
export const RESET_PAGINATION = 'RESET_PAGINATION';

function deleteAtPath(path) {
  const deleteFn = firebase.functions().httpsCallable('recursiveDelete');
  deleteFn({ path })
    .then(result => {
      // logMessage(`Delete success: ${JSON.stringify(result)}`);
      console.log(result);
    })
    .catch(err => {
      // logMessage('Delete failed, see console,');
      console.warn(err);
    });
}

export const createQuotation = quotation => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .add({
        ...quotation,
        author: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          id: authorId
        },
        // userFirstName: profile.firstName,
        // userLastName: profile.lastName,
        // authorId,
        createAt: new Date(),
        likes: {},
        likesCount: 0,
        commentsCount: 0
      })
      .then(() => {
        dispatch({ type: 'CREATE_QUOTATION', quotation });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_QUOTATION_ERROR', error });
      });
  };
};

export const deleteQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    deleteAtPath(`quotes/${id}/comments`);
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    firestore
      .collection('quotes')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_QUOTATION' });
      })
      .catch(error => {
        dispatch({ type: 'DELETE_QUOTATION_ERROR', error });
      });
  };
};

export const likeQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: true,
        likesCount: oldLikesCount + 1
      })
      .then(() => {
        dispatch({ type: 'LIKE_QUOTATION' });
      })
      .catch(error => {
        dispatch({ type: 'LIKE_QUOTATION_ERROR', error });
      });
  };
};

export const dislikeQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: firebase.firestore.FieldValue.delete(),
        likesCount: oldLikesCount - 1
      })
      .then(() => {
        dispatch({ type: 'DISLIKE_QUOTATION' });
      })
      .catch(error => {
        dispatch({ type: 'DISLIKE_QUOTATION_ERROR', error });
      });
  };
};

export const sortQuotes = sortBy => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    dispatch({ type: 'TOGGLE_SORT_ORDER', sortBy });
    dispatch({ type: 'RESET_PAGINATION' });
    const sortInfo = getState().quotes.sortTypes.find(
      ({ name }) => name === sortBy
    );
    const { order } = sortInfo;
    const { type } = sortInfo;
    firestore
      .get({
        collection: 'quotes',
        orderBy: [type, order],
        limit: 2
      })
      .then(() => {
        // dispatch({ type: 'TOGGLE_SORT_ORDER' });
      })
      .catch(error => {
        // dispatch({ type: 'DISLIKE_QUOTATION_ERROR', error });
      });
  };
};

export const loadMoreQuotes = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch({ type: 'LOAD_MORE_QUOTES_REQUEST' });
    const { limit } = getState().quotes.pagination;
    const sortInfo = getState().quotes.sortTypes.find(
      ({ active }) => active === true
    );
    const { order } = sortInfo;
    const { type } = sortInfo;

    firestore
      .get({
        collection: 'quotes',
        orderBy: [type, order],
        limit
      })
      .then(() => {
        dispatch({ type: 'LOAD_MORE_QUOTES_SUCCESS' });
      })
      .catch(error => {
        dispatch({ type: 'LOAD_MORE_QUOTES_FAILURE', error });
      });
  };
};

// export const sortQuotes = sortBy => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     dispatch({
//       type: actionTypes.CLEAR_DATA,
//       preserve: { data: true, ordered: false }
//     });
//     dispatch({ type: 'TOGGLE_SORT_ORDER', sortBy });
//     const sortOrder = getState().quotes.sortTypes[sortBy].order;
//     const sortType = getState().quotes.sortTypes[sortBy].type;
//     firestore
//       .get({
//         collection: 'quotes',
//         orderBy: [sortType, sortOrder],
//         limit: 2
//       })
//       .then(() => {
//         // dispatch({ type: 'TOGGLE_SORT_ORDER' });
//       })
//       .catch(error => {
//         // dispatch({ type: 'DISLIKE_QUOTATION_ERROR', error });
//       });
//   };
// };
