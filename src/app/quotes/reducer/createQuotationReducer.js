import { makeAsyncReducerWithLoading } from 'store/reducerFactory';
import initialState from './initialState';

const createQuotationReducer = makeAsyncReducerWithLoading({
  name: 'CREATE_QUOTATION',
  initialState
});

export default createQuotationReducer;
