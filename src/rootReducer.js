import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import menu from 'layout/reducer';
import quotes from 'dashboard/reducer';

const rootReducer = combineReducers({
  menu,
  quotes,
  firestore: firestoreReducer
});

export default rootReducer;
