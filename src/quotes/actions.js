export const CREATE_QUOTATION = 'CREATE_QUOTATION';
export const CREATE_QUOTATION_ERROR = 'CREATE_QUOTATION_ERROR';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const ADD_TO_FAVORITES_ERROR = 'ADD_TO_FAVORITES_ERROR';
export const CHECK_IF_FAVORITE = 'CHECK_IF_FAVORITE';
export const CHECK_IF_FAVORITE_ERROR = 'CHECK_IF_FAVORITE_ERROR';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const REMOVE_FROM_FAVORITES_ERROR = 'REMOVE_FROM_FAVORITES_ERROR';
export const DELETE_FROM_COLLECTION = 'DELETE_FROM_COLLECTION';
export const DELETE_FROM_COLLECTION_ERROR = 'DELETE_FROM_COLLECTION_ERROR';
export const COUNT_ALL_LIKES = 'COUNT_ALL_LIKES';
export const COUNT_ALL_LIKES_ERROR = 'COUNT_ALL_LIKES_ERROR';

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
        comments: [
          {
            content: 'Jego to ewolucja nie rusza',
            likes: 12,
            user: 'Jan Nowak',
            id: 'sgfsg45gsdgdf'
          },
          {
            content: 'Hahahahaha, nie no, ten to wymyślił',
            likes: 19,
            user: 'Halina Konopna',
            id: 'dsgdfgdff44gdfg'
          }
        ]
      })
      .then(() => {
        dispatch({ type: 'CREATE_QUOTATION', quotation });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_QUOTATION_ERROR', error });
      });
  };
};

export const addToFavorites = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: true
        // isFavorite: true
      })
      .then(() => {
        dispatch({ type: 'ADD_TO_FAVORITES' });
        // firestore.unsetListener('quotes');
      })
      .catch(error => {
        dispatch({ type: 'ADD_TO_FAVORITES_ERROR', error });
      });
  };
};

export const removeFromFavorites = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        [`likes.${authorId}`]: firebase.firestore.FieldValue.delete()
        // isFavorite: false
      })
      .then(() => {
        dispatch({ type: 'REMOVE_FROM_FAVORITES' });
        // firestore.unsetListener('quotes');
      })
      .catch(error => {
        dispatch({ type: 'REMOVE_FROM_FAVORITES_ERROR', error });
      });
  };
};

export const deleteQuotation = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('quotes')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_FROM_COLLECTION' });
      })
      .catch(error => {
        dispatch({ type: 'DELETE_FROM_COLLECTION_ERROR', error });
      });
  };
};

export const checkIfFavorite = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('quotes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const likes = [...Object.keys(doc.data().likes)];
          let isFavorite;
          if (likes.includes(authorId)) {
            isFavorite = true;
          } else {
            isFavorite = false;
          }
          return firestore
            .collection('quotes')
            .doc(doc.id)
            .update({ isFavorite });
        });
      })
      .then(() => {
        dispatch({ type: 'CHECK_IF_FAVORITE' });
      })
      .catch(error => {
        dispatch({ type: 'CHECK_IF_FAVORITE_ERROR', error });
      });
  };
};

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
