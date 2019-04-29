import React from 'react';
import { shape, func } from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { commentType } from 'comments/propTypes';
import { withUser, LikeButton } from 'common';
import { likeComment, dislikeComment } from 'comments/actions';

const likeCommentButton = ({ comment, user, actions, match }) => {
  const handleLikeClick = () => {
    actions.likeComment(match.params.id, comment.id);
  };

  const handleDislikeClick = () => {
    actions.dislikeComment(match.params.id, comment.id);
  };

  const isLiked = user.id in comment.likes;
  return (
    <LikeButton
      likes={comment.likesCount}
      full={isLiked}
      onClick={isLiked ? handleDislikeClick : handleLikeClick}
    />
  );
};

likeCommentButton.propTypes = {
  actions: shape({
    likeComment: func.isRequired,
    dislikeComment: func.isRequired
  }).isRequired,
  comment: commentType
};

likeCommentButton.defaultProps = {
  comment: null
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        likeComment,
        dislikeComment
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
  withUser,
  connect(
    null,
    mapDispatchToProps
  )
)(likeCommentButton);

// const ComponentWithUser = withUser(likeQuotationButton);

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(ComponentWithUser)
// );
