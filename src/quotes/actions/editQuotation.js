import {
  editQuotationRequest,
  editQuotationSuccess,
  editQuotationFailure
} from 'quotes/actionCreators';

const editQuotation = (id, { politician, content }) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(editQuotationRequest());
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        politician,
        content
      })
      .then(() => {
        dispatch(editQuotationSuccess());
      })
      .catch(error => {
        dispatch(editQuotationFailure(error));
      });
  };
};

export default editQuotation;
