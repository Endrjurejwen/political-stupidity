// import { actionTypes } from 'redux-firestore';
import firebase from 'config/fbConfig';

import {
  deleteQuotationRequest,
  deleteQuotationSuccess,
  deleteQuotationFailure,
  // resetQotesState
} from 'app/quotes/actions';

const deleteAtPath = path => {
  const deleteFn = firebase.functions().httpsCallable('recursiveDelete');
  deleteFn({ path })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

const deleteQuotation = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    deleteAtPath(`quotes/${id}/comments`);
    // dispatch(resetQotesState());
    // dispatch({
    //   type: actionTypes.CLEAR_DATA,
    //   preserve: { data: true, ordered: false }
    // });
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
