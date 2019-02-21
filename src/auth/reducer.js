import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from 'auth/actions';

const initState = {
  authError: null
};

export default function(state = initState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      console.log('yupi');
      return { ...state, authError: null };
    case LOGIN_ERROR:
      console.log('login failed');
      return { ...state, authError: 'Login faild' };
    case SIGNOUT_SUCCESS:
      console.log('logout success');
      return state;
    default:
      return state;
  }
}
