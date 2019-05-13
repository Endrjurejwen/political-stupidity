import React from 'react';
import { arrayOf } from 'prop-types';
import Comment from 'app/comments/components/Comment';
import { commentType } from 'app/comments/propTypes';

const commentsList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </>
);

commentsList.propTypes = {
  comments: arrayOf(commentType)
};

commentsList.defaultProps = {
  comments: null
};

export default commentsList;
