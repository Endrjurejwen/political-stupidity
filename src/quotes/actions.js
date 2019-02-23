export const CREATE_QUOTATION = 'CREATE_QUOTATION';
export const CREATE_QUOTATION_ERROR = 'CREATE_QUOTATION_ERROR';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const ADD_TO_FAVORITE_ERROR = 'ADD_TO_FAVORITE_ERROR';
export const CHECK_IF_FAVORITE = 'CHECK_IF_FAVORITE';
export const CHECK_IF_FAVORITE_ERROR = 'CHECK_IF_FAVORITE_ERROR';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const REMOVE_FROM_FAVORITE_ERROR = 'REMOVE_FROM_FAVORITE';

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
        likes: [],
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

export const addToFavorite = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .doc(id)
      .update({ likes: firebase.firestore.FieldValue.arrayUnion(authorId) })
      .then(() => {
        dispatch({ type: 'ADD_TO_FAVORITE' });
      })
      .catch(error => {
        dispatch({ type: 'ADD_TO_FAVORITE_ERROR', error });
      });
  };
};

export const removeFromFavorite = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('quotes')
      .doc(id)
      .update({ likes: firebase.firestore.FieldValue.arrayRemove(authorId) })
      .then(() => {
        dispatch({ type: 'REMOVE_FROM_FAVORITE' });
      })
      .catch(error => {
        dispatch({ type: 'REMOVE_FROM_ERROR', error });
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

export const checkIfFavorite = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const { quotes } = getState().firestore.ordered;

    firestore
      .collection('quotes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const likes = [...doc.data().likes];
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
