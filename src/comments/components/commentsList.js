import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'comments/components/Comment';
import { commentType } from 'types';
import { LikeButton, CloseButton } from 'common';

const commentsList = ({ comments, deleteClick, likeClick, userId }) => (
  <>
    {comments.map(comment => (
      <Comment
        comment={comment}
        key={comment.id}
        likeClick={() => likeClick(comment.id)}
        userId={userId}
        likeButton={
          <LikeButton
            click={() => likeClick(comment.id)}
            likes={comment.likesCount}
            full={userId in comment.likes}
          />
        }
        closeButton={
          <CloseButton
            click={() => deleteClick(comment.id)}
            isDisplay={comment.authorId === userId}
          />
        }
      />
    ))}
  </>
);

commentsList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
  userId: PropTypes.string.isRequired,
  likeClick: PropTypes.func.isRequired,
  deleteClick: PropTypes.func.isRequired
};

export default commentsList;
