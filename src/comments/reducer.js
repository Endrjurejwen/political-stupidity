import reduceReducers from 'reduce-reducers';
import {
  makeAsyncReducer,
  makeAsyncReducerWithLoading
} from 'store/reducerFactory';

const initialState = {
  error: null,
  isLoading: false
};

const createCommentReducer = makeAsyncReducerWithLoading({
  name: 'CREATE_COMMENT',
  initialState
});
const editCommentReducer = makeAsyncReducer({
  name: 'EDIT_COMMENT',
  initialState
});
const deleteCommentReducer = makeAsyncReducerWithLoading({
  name: 'DELETE_COMMENT',
  initialState
});
const likeCommentReducer = makeAsyncReducer({
  name: 'LIKE_COMMENT',
  initialState
});
const dislikeCommentReducer = makeAsyncReducer({
  name: 'DISLIKE_COMMENT',
  initialState
});

const reducer = reduceReducers(
  createCommentReducer,
  editCommentReducer,
  deleteCommentReducer,
  likeCommentReducer,
  dislikeCommentReducer
);

export default reducer;

// import {
//   CREATE_COMMENT_REQUEST,
//   CREATE_COMMENT_SUCCESS,
//   CREATE_COMMENT_FAILURE,
//   DELETE_COMMENT_REQUEST,
//   DELETE_COMMENT_SUCCESS,
//   DELETE_COMMENT_FAILURE,
//   LIKE_COMMENT_REQUEST,
//   LIKE_COMMENT_SUCCESS,
//   LIKE_COMMENT_FAILURE,
//   DISLIKE_COMMENT_REQUEST,
//   DISLIKE_COMMENT_SUCCESS,
//   DISLIKE_COMMENT_FAILURE
// } from './actionTypes';

// const initialState = {
//   error: null,
//   isLoading: false
// };

// const sendRequest = state => ({ ...state, error: null });
// const reciveResult = state => ({ ...state, error: null });
// const reciveError = (state, action) => ({
//   ...state,
//   error: action.error.message
// });

// export default function(state = initialState, action) {
//   const { type } = action;
//   switch (type) {
//     case CREATE_COMMENT_REQUEST:
//       return sendRequest(state);
//     case CREATE_COMMENT_SUCCESS:
//       return reciveResult(state);
//     case CREATE_COMMENT_FAILURE:
//       return reciveError(state, action);
//     case DELETE_COMMENT_REQUEST:
//       return sendRequest(state);
//     case DELETE_COMMENT_SUCCESS:
//       return reciveResult(state);
//     case DELETE_COMMENT_FAILURE:
//       return reciveError(state, action);
//     case LIKE_COMMENT_REQUEST:
//       return sendRequest(state);
//     case LIKE_COMMENT_SUCCESS:
//       return reciveResult(state);
//     case LIKE_COMMENT_FAILURE:
//       return reciveError(state, action);
//     case DISLIKE_COMMENT_REQUEST:
//       return sendRequest(state);
//     case DISLIKE_COMMENT_SUCCESS:
//       return reciveResult(state);
//     case DISLIKE_COMMENT_FAILURE:
//       return reciveError(state, action);
//     default:
//       return state;
//   }
// }
