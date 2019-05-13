import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import quotes from 'app/quotes/reducer';
import auth from 'app/auth/reducer';
import comments from 'app/comments/reducer';

const rootReducer = combineReducers({
  auth,
  quotes,
  comments,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
