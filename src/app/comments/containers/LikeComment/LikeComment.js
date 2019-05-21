import React from 'react';
import { func } from 'prop-types';
import { commentType } from 'app/comments/propTypes';
import { userType } from 'app/auth/propTypes';
import { match } from 'react-router-prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withUser, LikeButton } from 'app/common';
import { likeComment, dislikeComment } from 'app/comments/actions';

export const likeCommentButton = ({
  comment,
  user,
  likeComment,
  dislikeComment,
  match
}) => {
  const handleLikeClick = () => {
    const quotationID = match.params.id;
    likeComment(quotationID, comment.id);
  };

  const handleDislikeClick = () => {
    const quotationID = match.params.id;
    dislikeComment(quotationID, comment.id);
  };

  const isLiked = user.id in comment.likes;
  return (
    <LikeButton
      likes={comment.likesCount}
      isLiked={isLiked}
      onClick={isLiked ? handleDislikeClick : handleLikeClick}
    />
  );
};

likeCommentButton.propTypes = {
  comment: commentType,
  dislikeComment: func.isRequired,
  likeComment: func.isRequired,
  match: match.isRequired,
  user: userType
};

likeCommentButton.defaultProps = {
  comment: null,
  user: null
};

export default compose(
  withRouter,
  withUser,
  connect(
    null,
    { likeComment, dislikeComment }
  )
)(likeCommentButton);
