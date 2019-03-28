import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'comments/components/Comment';
import { commentType } from 'comments/propTypes';
import { LikeButton, CloseButton } from 'common';

const commentsList = ({
  comments,
  deleteClick,
  onLikeClick,
  onDislikeClick,
  user
}) => (
  <>
    {comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
        likeButton={
          <LikeButton
            likes={comment.likesCount}
            full={user.id in comment.likes}
            click={
              user.id in comment.likes
                ? () => onDislikeClick(comment.id)
                : () => onLikeClick(comment.id)
            }
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
  onLikeClick: PropTypes.func.isRequired,
  onDislikeClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

commentsList.defaultProps = {
  comments: null
};

export default commentsList;
