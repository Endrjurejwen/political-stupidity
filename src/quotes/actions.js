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
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        authorId,
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
    const sortOrder = getState().quotes.sortTypes[sortBy].order;
    const sortType = getState().quotes.sortTypes[sortBy].type;
    firestore
      .get({
        collection: 'quotes',
        orderBy: [sortType, sortOrder]
      })
      .then(() => {
        // dispatch({ type: 'TOGGLE_SORT_ORDER' });
      })
      .catch(error => {
        // dispatch({ type: 'DISLIKE_QUOTATION_ERROR', error });
      });
  };
};

// export const toggleSortOrder = () => ({
//   type: 'TOGGLE_SORT_ORDER'
// });

// export const checkIfFavorite = () => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;

//     firestore
//       .collection('quotes')
//       .get()
//       .then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//           const likes = [...Object.keys(doc.data().likes)];
//           let isFavorite;
//           if (likes.includes(authorId)) {
//             isFavorite = true;
//           } else {
//             isFavorite = false;
//           }
//           return firestore
//             .collection('quotes')
//             .doc(doc.id)
//             .update({ isFavorite });
//         });
//       })
//       .then(() => {
//         dispatch({ type: 'CHECK_IF_FAVORITE' });
//       })
//       .catch(error => {
//         dispatch({ type: 'CHECK_IF_FAVORITE_ERROR', error });
//       });
//   };
// };

// export const checkIfFavorite = () => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     const { quotes } = getState().firestore.ordered;

//     quotes.forEach(quotation => {
//       let isFavorite;
//       if (quotation.likes.includes(authorId)) {
//         isFavorite = true;
//       } else {
//         isFavorite = false;
//       }

//       firestore
//         .collection('quotes')
//         .doc(quotation.id)
//         .update({ isFavorite })
//         .then(() => {
//           dispatch({ type: 'CHECK_IF_FAVORITE' });
//         })
//         .catch(error => {
//           dispatch({ type: 'CHECK_IF_FAVORITE_ERROR', error });
//         });
//     });
//   };
// };

// export const addToFavorite = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .update({
//         [`likes.${authorId}`]: true,
//         isFavorite: true
//       })
//       .then(() => {
//         const { likes } = getState().firestore.ordered.quotes.find(
//           doc => doc.id === id
//         );
//         const likesNumber = Object.keys(likes).length;
//         firestore
//           .collection('quotes')
//           .doc(id)
//           .update({ likesNumber });
//       })
//       .then(() => {
//         dispatch({ type: 'ADD_TO_FAVORITE' });
//       })
//       .catch(error => {
//         dispatch({ type: 'ADD_TO_FAVORITE_ERROR', error });
//       });
//   };
// };

// export const removeFromFavorite = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .update({
//         [`likes.${authorId}`]: firebase.firestore.FieldValue.delete(),
//         isFavorite: false
//       })
//       .then(() => {
//         const { likes } = getState().firestore.ordered.quotes.find(
//           doc => doc.id === id
//         );
//         const likesNumber = Object.keys(likes).length;
//         firestore
//           .collection('quotes')
//           .doc(id)
//           .update({ likesNumber });
//       })
//       .then(() => {
//         dispatch({ type: 'REMOVE_FROM_FAVORITE' });
//       })
//       .catch(error => {
//         dispatch({ type: 'REMOVE_FROM_ERROR', error });
//       });
//   };
// };

// export const countLikes = id => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     const { likes } = getState().firestore.ordered.quotes.find(
//       doc => doc.id === id
//     );
//     console.log(likes);
//     const likesNumber = Object.keys(likes).length;
//     console.log(likesNumber);
//     firestore
//       .collection('quotes')
//       .doc(id)
//       .update({
//         likesNumber
//       })
//       .then(() => {
//         dispatch({ type: 'COUNT_ALL_LIKES' });
//       })
//       .catch(error => {
//         dispatch({ type: 'COUNT_ALL_LIKES_ERROR', error });
//       });
//   };
// };