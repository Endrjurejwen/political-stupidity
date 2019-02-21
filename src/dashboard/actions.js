export const CREATE_QUOTATION = 'CREATE_QUOTATION';
export const CREATE_QUOTATION_ERROR = 'CREATE_QUOTATION_ERROR';

export const createQuotation = quotation => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('quotes')
      .add({
        ...quotation,
        userFirstName: 'Andrzej',
        userLastName: 'Kruk',
        authorId: 123345,
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
