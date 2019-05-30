import firebase from 'config/fbConfig';

import {
  deleteQuotationRequest,
  deleteQuotationSuccess,
  deleteQuotationFailure
} from 'app/quotes/actions';

const deleteAtPath = path => {
  const deleteFn = firebase.functions().httpsCallable('recursiveDelete');
  deleteFn({ path })
    .then(() => {
      // console.log(result);
    })
    .catch(() => {
      // console.log(err);
    });
};

const deleteQuotation = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    deleteAtPath(`quotes/${id}/comments`);
    dispatch(deleteQuotationRequest());
    return firestore
      .collection('quotes')
      .doc(id)
      .delete()
      .then(res => {
        dispatch(deleteQuotationSuccess());
        return res;
      })
      .catch(error => {
        dispatch(deleteQuotationFailure(error));
      });
  };
};

export default deleteQuotation;
