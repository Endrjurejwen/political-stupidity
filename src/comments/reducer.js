import {
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  DELETE_COMMENT,
  DELETE_COMMENT_ERROR,
  LIKE_COMMENT,
  LIKE_COMMENT_ERROR,
  DISLIKE_COMMENT,
  DISLIKE_COMMENT_ERROR
} from './actions';

const initialState = {
  error: null
};

export default function(state = initialState, action) {
  const { type, quotation, error } = action;
  switch (type) {
    case CREATE_COMMENT:
      console.log('Created Comment', quotation);
      return state;
    case CREATE_COMMENT_ERROR:
      console.log('create Comment error', error);
      return state;
    case DELETE_COMMENT:
      console.log('Delete Comment');
      return state;
    case DELETE_COMMENT_ERROR:
      console.log('Delete Comment error', error);
      return state;
    case LIKE_COMMENT:
      console.log('like Comment');
      return state;
    case LIKE_COMMENT_ERROR:
      console.log('Like Comment error', error);
      return state;
    case DISLIKE_COMMENT:
      console.log('Dislike Comment');
      return state;
    case DISLIKE_COMMENT_ERROR:
      console.log('Dislike Comment error', error);
      return state;
    default:
      return state;
  }
}
