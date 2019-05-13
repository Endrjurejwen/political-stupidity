import { makeAsyncReducer } from 'store/reducerFactory';
import initialState from './initialState';

const likeQuotationReducer = makeAsyncReducer({
  name: 'LIKE_QUOTATION',
  initialState
});

export default likeQuotationReducer;
