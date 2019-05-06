import { makeAsyncReducerWithLoading } from 'store/reducerFactory';
import initialState from './initialState';

const editQuotationReducer = makeAsyncReducerWithLoading({
  name: 'EDIT_QUOTATION',
  initialState
});

export default editQuotationReducer;
