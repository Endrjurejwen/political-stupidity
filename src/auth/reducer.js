import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  SIGNUP_REQUEST
} from 'auth/actions';

const initState = {
  authError: null,
  isLoading: false
};

export default function(state = initState, action) {
  const { type, error } = action;
  switch (type) {
    case LOGIN_REQUEST:
      console.log('login request');
      return { ...state, authError: null, isLoading: true };
    case LOGIN_SUCCESS:
      console.log('login success');
      return { ...state, isLoading: false };
    case LOGIN_ERROR:
      console.log('login failed');
      return { ...state, authError: error.message, isLoading: false };
    case SIGNOUT_SUCCESS:
      console.log('logout success');
      return state;
    case SIGNUP_REQUEST:
      console.log('signup request');
      return { ...state, authError: null, isLoading: true };
    case SIGNUP_SUCCESS:
      console.log('signup success');
      return { ...state, authError: null, isLoading: false };
    case SIGNUP_ERROR:
      console.log('signup failed');
      return { ...state, authError: error.message, isLoading: false };
    default:
      return state;
  }
}
