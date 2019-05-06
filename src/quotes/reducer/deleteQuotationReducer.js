import { makeAsyncReducerWithLoading } from 'store/reducerFactory';
import initialState from './initialState';

const deleteQuotationReducer = makeAsyncReducerWithLoading({
  name: 'DELETE_QUOTATION',
  initialState
});

export default deleteQuotationReducer;
