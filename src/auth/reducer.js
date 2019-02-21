import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from 'auth/actions';

const initState = {
  authError: null
};

export default function(state = initState, action) {
  const { type, error } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      console.log('login success');
      return { ...state, authError: null };
    case LOGIN_ERROR:
      console.log('login failed');
      return { ...state, authError: error.message };
    case SIGNOUT_SUCCESS:
      console.log('logout success');
      return state;
    case SIGNUP_SUCCESS:
      console.log('signup success');
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      console.log('signup failed');
      return { ...state, authError: error.message };
    default:
      return state;
  }
}
