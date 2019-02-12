import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const store = state =>
  createStore(rootReducer, state, composeWithDevTools(applyMiddleware(thunk)));

export default store;
