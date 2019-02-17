export const CREATE_QUOTATION = 'CREATE_QUOTATION';

export const createQuotation = quotation => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_QUOTATION', quotation });
  };
};
