import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
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
        isEditButtonsDisplay={comment.author.id === user.id}
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
        closeButton={<CloseButton click={() => deleteClick(comment.id)} />}
      />
    ))}
  </>
);

commentsList.propTypes = {
  comments: arrayOf(commentType),
  deleteClick: func.isRequired,
  onDislikeClick: func.isRequired,
  onLikeClick: func.isRequired,
  user: shape({
    id: string.isRequired
  }).isRequired
};

commentsList.defaultProps = {
  comments: null
};

export default commentsList;
