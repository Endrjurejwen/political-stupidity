import reduceReducers from 'reduce-reducers';
import { makeAsyncReducerWithLoading } from 'store/reducerFactory';

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

const reducer = reduceReducers(loginReducer, logoutReducer, signUpReducer);

export default reducer;

// const sendRequest = state => ({ ...state, isLoading: true, error: null });
// const reciveResult = state => ({ ...state, isLoading: false });
// const reciveError = (state, action) => ({
//   ...state,
//   error: action.error.message,
//   isLoading: false
// });

// export default function(state = initState, action) {
//   const { type } = action;
//   switch (type) {
//     case LOGIN_REQUEST:
//       return sendRequest(state);
//     case LOGIN_SUCCESS:
//       return reciveResult(state);
//     case LOGIN_FAILURE:
//       return reciveError(state, action);
//     case SIGNUP_REQUEST:
//       return sendRequest(state);
//     case SIGNUP_SUCCESS:
//       return reciveResult(state);
//     case SIGNUP_FAILURE:
//       return reciveError(state, action);
//     case LOGOUT_REQUEST:
//       return sendRequest(state);
//     case LOGOUT_SUCCESS:
//       return reciveResult(state);
//     case LOGOUT_FAILURE:
//       return reciveError(state, action);
//     default:
//       return state;
//   }
// }
