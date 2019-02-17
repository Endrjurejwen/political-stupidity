import { combineReducers } from 'redux';

import menu from 'layout/reducer';
import quotes from 'dashboard/reducer';

const rootReducer = combineReducers({
  menu,
  quotes
});

export default rootReducer;
