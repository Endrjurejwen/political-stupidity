import reduceReducers from 'reduce-reducers';
import {
  makeAsyncReducerWithLoading,
  makeResetErrorReducer
} from 'store/reducerFactory';

const initialState = {
  error: null,
  isLoading: false
};

const loginReducer = makeAsyncReducerWithLoading({
  name: 'LOGIN',
  initialState
});

const logoutReducer = makeAsyncReducerWithLoading({
  name: 'LOGOUT',
  initialState
});

const signUpReducer = makeAsyncReducerWithLoading({
  name: 'SIGNUP',
  initialState
});

const resetAuthErrorReducer = makeResetErrorReducer({
  name: 'AUTH',
  initialState
});

const reducer = reduceReducers(
  loginReducer,
  logoutReducer,
  signUpReducer,
  resetAuthErrorReducer
);

export default reducer;
