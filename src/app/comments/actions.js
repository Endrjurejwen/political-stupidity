import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  LIKE_COMMENT_REQUEST,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  DISLIKE_COMMENT_REQUEST,
  DISLIKE_COMMENT_SUCCESS,
  DISLIKE_COMMENT_FAILURE,
  RESET_COMMENTS_ERROR
} from 'app/comments/actionTypes';

// CREATE_COMMENT
export const createCommentRequest = () => ({
  type: CREATE_COMMENT_REQUEST
});

export const createCommentSuccess = () => ({
  type: CREATE_COMMENT_SUCCESS
});

export const createCommentFailure = error => ({
  type: CREATE_COMMENT_FAILURE,
  error
});

// EDIT_COMMENT
export const editCommentRequest = () => ({
  type: EDIT_COMMENT_REQUEST
});

export const editCommentSuccess = () => ({
  type: EDIT_COMMENT_SUCCESS
});

export const editCommentFailure = error => ({
  type: EDIT_COMMENT_FAILURE,
  error
});

// DELETE_COMMENT
export const deleteCommentRequest = () => ({
  type: DELETE_COMMENT_REQUEST
});

export const deleteCommentSuccess = () => ({
  type: DELETE_COMMENT_SUCCESS
});

export const deleteCommentFailure = error => ({
  type: DELETE_COMMENT_FAILURE,
  error
});

// LIKE_COMMENT
export const likeCommentRequest = () => ({
  type: LIKE_COMMENT_REQUEST
});

export const likeCommentSuccess = () => ({
  type: LIKE_COMMENT_SUCCESS
});

export const likeCommentFailure = error => ({
  type: LIKE_COMMENT_FAILURE,
  error
});

// DISLIKE_COMMENT
export const dislikeCommentRequest = () => ({
  type: DISLIKE_COMMENT_REQUEST
});

export const dislikeCommentSuccess = () => ({
  type: DISLIKE_COMMENT_SUCCESS
});

export const dislikeCommentFailure = error => ({
  type: DISLIKE_COMMENT_FAILURE,
  error
});

// RESET ERROR
export const resetCommentsError = () => ({
  type: RESET_COMMENTS_ERROR
});
