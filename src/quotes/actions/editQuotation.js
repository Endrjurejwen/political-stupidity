import {
  editQuotationRequest,
  editQuotationSuccess,
  editQuotationFailure
} from 'quotes/actionCreators';

const editQuotation = (id, { politician, content, topics }) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(editQuotationRequest());
    firestore
      .collection('quotes')
      .doc(id)
      .update({
        politician,
        content,
        topics
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
