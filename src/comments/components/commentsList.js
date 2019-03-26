import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'comments/components/Comment';
import { commentType } from 'comments/types';
import { LikeButton, CloseButton } from 'common';

const commentsList = ({ comments, deleteClick, likeClick, user }) => (
  <>
    {comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
        likeButton={
          <LikeButton
            click={() => likeClick(comment.id)}
            likes={comment.likesCount}
            full={user.id in comment.likes}
          />
        }
        closeButton={
          <CloseButton
            click={() => deleteClick(comment.id)}
            isDisplay={comment.author.id === user.id}
          />
        }
      />
    ))}
  </>
);

commentsList.propTypes = {
  comments: PropTypes.arrayOf(commentType),
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  likeClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

commentsList.defaultProps = {
  comments: null
};

export default commentsList;
