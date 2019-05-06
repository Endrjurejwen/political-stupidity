import reduceReducers from 'reduce-reducers';

import createQuotationReducer from './createQuotationReducer';
import editQuotationReducer from './editQuotationReducer';
import deleteQuotationReducer from './deleteQuotationReducer';
import likeQuotationReducer from './likeQuotationReducer';
import dislikeQuotationReducer from './dislikeQuotationReducer';
import sortQuotesReducer from './sortQuotesReducer';
import loadMoreQuotesReducer from './loadMoreQuotesReducer';
import resetQuotesReducer from './resetQuotesReducer';

const reducer = reduceReducers(
  createQuotationReducer,
  editQuotationReducer,
  deleteQuotationReducer,
  likeQuotationReducer,
  dislikeQuotationReducer,
  sortQuotesReducer,
  loadMoreQuotesReducer,
  resetQuotesReducer
);

export default reducer;
