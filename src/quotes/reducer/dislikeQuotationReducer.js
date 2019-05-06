import { makeAsyncReducer } from 'store/reducerFactory';
import initialState from './initialState';

const dislikeQuotationReducer = makeAsyncReducer({
  name: 'DISLIKE_QUOTATION',
  initialState
});

export default dislikeQuotationReducer;
