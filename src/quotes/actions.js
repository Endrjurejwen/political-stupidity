import { actionTypes } from 'redux-firestore';
import firebase from 'config/fbConfig';

import {
  createQuotationRequest,
  createQuotationSuccess,
  createQuotationFailure,
  deleteQuotationRequest,
  deleteQuotationSuccess,
  deleteQuotationFailure,
  likeQuotationRequest,
  likeQuotationSuccess,
  likeQuotationFailure,
  dislikeQuotationRequest,
  dislikeQuotationSuccess,
  dislikeQuotationFailure,
  sortQuotesRequest,
  sortQuotesSuccess,
  sortQuotesFailure,
  loadMoreQuotesRequest,
  loadMoreQuotesSuccess,
  loadMoreQuotesFailure,
  resetPagination
} from 'quotes/actionCreators';

function deleteAtPath(path) {
  const deleteFn = firebase.functions().httpsCallable('recursiveDelete');
  deleteFn({ path })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createQuotation = quotation => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;
    dispatch(createQuotationRequest());
    firestore
      .collection('quotes')
      .add({
        ...quotation,
        author: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          id: authorId
        },
        createAt: new Date(),
        likes: {},
        likesCount: 0,
        commentsCount: 0
      })
      .then(() => {
        dispatch(createQuotationSuccess());
      })
      .catch(error => {
        dispatch(createQuotationFailure(error));
      });
  };
};

export const deleteQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    deleteAtPath(`quotes/${id}/comments`);
    dispatch(deleteQuotationRequest());
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    firestore
      .collection('quotes')
      .doc(id)
      .delete()
      .then(() => {
        dispatch(deleteQuotationSuccess());
      })
      .catch(error => {
        dispatch(deleteQuotationFailure(error));
      });
  };
};

export const likeQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const dislikeQuotation = id => {
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

export const sortQuotes = sortBy => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch({
      type: actionTypes.CLEAR_DATA,
      preserve: { data: true, ordered: false }
    });
    dispatch(sortQuotesRequest(sortBy));
    dispatch(resetPagination());
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
        dispatch(sortQuotesSuccess());
      })
      .catch(error => {
        dispatch(sortQuotesFailure(error));
      });
  };
};

export const loadMoreQuotes = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch(loadMoreQuotesRequest());
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
        dispatch(loadMoreQuotesSuccess());
      })
      .catch(error => {
        dispatch(loadMoreQuotesFailure(error));
      });
  };
};

// export const CREATE_QUOTATION_REQUEST = 'CREATE_QUOTATION_REQUEST';
// export const CREATE_QUOTATION_SUCCESS = 'CREATE_QUOTATION_SUCCESS';
// export const CREATE_QUOTATION_FAILURE = 'CREATE_QUOTATION_FAILURE';

// export const DELETE_QUOTATION_REQUEST = 'DELETE_QUOTATION_REQUEST';
// export const DELETE_QUOTATION_SUCCESS = 'DELETE_QUOTATION_SUCCESS';
// export const DELETE_QUOTATION_FAILURE = 'DELETE_QUOTATION_FAILURE';

// export const LIKE_QUOTATION_REQUEST = 'LIKE_QUOTATION_REQUEST';
// export const LIKE_QUOTATION_SUCCESS = 'LIKE_QUOTATION_SUCCESS';
// export const LIKE_QUOTATION_FAILURE = 'LIKE_QUOTATION_FAILURE';

// export const DISLIKE_QUOTATION_REQUEST = 'DISLIKE_QUOTATION_REQUEST';
// export const DISLIKE_QUOTATION_SUCCESS = 'DISLIKE_QUOTATION_SUCCESS';
// export const DISLIKE_QUOTATION_FAILURE = 'DISLIKE_QUOTATION_FAILURE';

// export const SORT_QUOTES_REQUEST = 'SORT_QUOTES_REQUEST';
// export const SORT_QUOTES_SUCCESS = 'SORT_QUOTES_SUCCESS';
// export const SORT_QUOTES_FAILURE = 'SORT_QUOTES_FAILURE';

// export const LOAD_MORE_QUOTES_REQUEST = 'LOAD_MORE_QUOTES_REQUEST';
// export const LOAD_MORE_QUOTES_SUCCESS = 'LOAD_MORE_QUOTES_SUCCESS';
// export const LOAD_MORE_QUOTES_FAILURE = 'LOAD_MORE_QUOTES_FAILURE';

// export const RESET_PAGINATION = 'RESET_PAGINATION';

// function deleteAtPath(path) {
//   const deleteFn = firebase.functions().httpsCallable('recursiveDelete');
//   deleteFn({ path })
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// export const createQuotation = quotation => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     const { profile } = getState().firebase;
//     const authorId = getState().firebase.auth.uid;
//     dispatch({ type: 'CREATE_QUOTATION_REQUEST' });
//     firestore
//       .collection('quotes')
//       .add({
//         ...quotation,
//         author: {
//           firstName: profile.firstName,
//           lastName: profile.lastName,
//           id: authorId
//         },
//         createAt: new Date(),
//         likes: {},
//         likesCount: 0,
//         commentsCount: 0
//       })
//       .then(() => {
//         dispatch({ type: 'CREATE_QUOTATION_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'CREATE_QUOTATION_FAILURE', error });
//       });
//   };
// };

// export const deleteQuotation = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     deleteAtPath(`quotes/${id}/comments`);
//     dispatch({ type: 'DELETE_QUOTATION_REQUEST' });
//     dispatch({
//       type: actionTypes.CLEAR_DATA,
//       preserve: { data: true, ordered: false }
//     });
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .delete()
//       .then(() => {
//         dispatch({ type: 'DELETE_QUOTATION_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'DELETE_QUOTATION_FAILURE', error });
//       });
//   };
// };

// export const likeQuotation = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
//     dispatch({ type: 'LIKE_QUOTATION_REQUEST' });
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .update({
//         [`likes.${authorId}`]: true,
//         likesCount: oldLikesCount + 1
//       })
//       .then(() => {
//         dispatch({ type: 'LIKE_QUOTATION_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'LIKE_QUOTATION_FAILURE', error });
//       });
//   };
// };

// export const dislikeQuotation = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     const oldLikesCount = getState().firestore.data.quotes[id].likesCount;
//     dispatch({ type: 'DISLIKE_QUOTATION_REQUEST' });
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .update({
//         [`likes.${authorId}`]: firebase.firestore.FieldValue.delete(),
//         likesCount: oldLikesCount - 1
//       })
//       .then(() => {
//         dispatch({ type: 'DISLIKE_QUOTATION_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'DISLIKE_QUOTATION_FAILURE', error });
//       });
//   };
// };

// export const sortQuotes = sortBy => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     dispatch({
//       type: actionTypes.CLEAR_DATA,
//       preserve: { data: true, ordered: false }
//     });
//     dispatch({ type: 'SORT_QUOTES_REQUEST', sortBy });
//     dispatch({ type: 'RESET_PAGINATION' });
//     const sortInfo = getState().quotes.sortTypes.find(
//       ({ name }) => name === sortBy
//     );
//     const { order } = sortInfo;
//     const { type } = sortInfo;
//     firestore
//       .get({
//         collection: 'quotes',
//         orderBy: [type, order],
//         limit: 2
//       })
//       .then(() => {
//         dispatch({ type: 'SORT_QUOTES_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'SORT_QUOTES_FAILURE', error });
//       });
//   };
// };

// export const loadMoreQuotes = () => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     dispatch({ type: 'LOAD_MORE_QUOTES_REQUEST' });
//     const { limit } = getState().quotes.pagination;
//     const sortInfo = getState().quotes.sortTypes.find(
//       ({ active }) => active === true
//     );
//     const { order } = sortInfo;
//     const { type } = sortInfo;
//     firestore
//       .get({
//         collection: 'quotes',
//         orderBy: [type, order],
//         limit
//       })
//       .then(() => {
//         dispatch({ type: 'LOAD_MORE_QUOTES_SUCCESS' });
//       })
//       .catch(error => {
//         dispatch({ type: 'LOAD_MORE_QUOTES_FAILURE', error });
//       });
//   };
// };
