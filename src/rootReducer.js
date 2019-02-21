import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import menu from 'layout/reducer';
import quotes from 'quotes/reducer';
import auth from 'auth/reducer';

const rootReducer = combineReducers({
  auth,
  menu,
  quotes,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
