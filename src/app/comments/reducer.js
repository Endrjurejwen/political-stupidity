import reduceReducers from 'reduce-reducers';
import {
  makeAsyncReducer,
  makeAsyncReducerWithLoading,
  makeResetErrorReducer
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

const resetCommentsErrorReducer = makeResetErrorReducer({
  name: 'COMMENTS',
  initialState
});

const reducer = reduceReducers(
  createCommentReducer,
  editCommentReducer,
  deleteCommentReducer,
  likeCommentReducer,
  dislikeCommentReducer,
  resetCommentsErrorReducer
);

export default reducer;
