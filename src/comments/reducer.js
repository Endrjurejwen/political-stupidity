import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  LIKE_COMMENT_REQUEST,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_REQUEST,
  DISLIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_FAILURE
} from './actionTypes';

const initialState = {
  error: null
  // isLoading: false
};

const sendRequest = state => ({ ...state, error: null });
const reciveResult = state => ({ ...state });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message
});

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case CREATE_COMMENT_REQUEST:
      return sendRequest(state);
    case CREATE_COMMENT_SUCCESS:
      return reciveResult(state);
    case CREATE_COMMENT_FAILURE:
      return reciveError(state, action);
    case DELETE_COMMENT_REQUEST:
      return sendRequest(state);
    case DELETE_COMMENT_SUCCESS:
      return reciveResult(state);
    case DELETE_COMMENT_FAILURE:
      return reciveError(state, action);
    case LIKE_COMMENT_REQUEST:
      return sendRequest(state);
    case LIKE_COMMENT_SUCCESS:
      return reciveResult(state);
    case LIKE_COMMENT_FAILURE:
      return reciveError(state, action);
    case DISLIKE_COMMENT_REQUEST:
      return sendRequest(state);
    case DISLIKE_COMMENT_SUCCESS:
      return reciveResult(state);
    case DISLIKE_COMMENT_FAILURE:
      return reciveError(state, action);
    default:
      return state;
  }
}

// import {
//   CREATE_COMMENT,
//   CREATE_COMMENT_ERROR,
//   DELETE_COMMENT,
//   DELETE_COMMENT_ERROR,
//   LIKE_COMMENT,
//   LIKE_COMMENT_ERROR,
//   DISLIKE_COMMENT,
//   DISLIKE_COMMENT_ERROR
// } from './actions';

// const initialState = {
//   error: null
// };

// export default function(state = initialState, action) {
//   const { type, quotation, error } = action;
//   switch (type) {
//     case CREATE_COMMENT:
//       console.log('Created Comment', quotation);
//       return state;
//     case CREATE_COMMENT_ERROR:
//       console.log('create Comment error', error);
//       return state;
//     case DELETE_COMMENT:
//       console.log('Delete Comment');
//       return state;
//     case DELETE_COMMENT_ERROR:
//       console.log('Delete Comment error', error);
//       return state;
//     case LIKE_COMMENT:
//       console.log('like Comment');
//       return state;
//     case LIKE_COMMENT_ERROR:
//       console.log('Like Comment error', error);
//       return state;
//     case DISLIKE_COMMENT:
//       console.log('Dislike Comment');
//       return state;
//     case DISLIKE_COMMENT_ERROR:
//       console.log('Dislike Comment error', error);
//       return state;
//     default:
//       return state;
//   }
// }
