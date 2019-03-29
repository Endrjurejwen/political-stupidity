import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import menu from 'layout/reducer';
import quotes from 'quotes/reducer';
import auth from 'auth/reducer';
import comments from 'comments/reducer';

const rootReducer = combineReducers({
  auth,
  menu,
  quotes,
  comments,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
