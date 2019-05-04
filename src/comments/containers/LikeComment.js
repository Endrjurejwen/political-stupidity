import React from 'react';
import { shape, func, string } from 'prop-types';
import { match } from 'react-router-prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { commentType } from 'comments/propTypes';
import { withUser, LikeButton } from 'common';
import { likeComment, dislikeComment } from 'comments/actions';

const likeCommentButton = ({
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
      full={isLiked}
      onClick={isLiked ? handleDislikeClick : handleLikeClick}
    />
  );
};

likeCommentButton.propTypes = {
  comment: commentType,
  dislikeComment: func.isRequired,
  likeComment: func.isRequired,
  match: match.isRequired,
  user: shape({
    id: string,
    firstName: string,
    lastName: string
  })
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

// const ComponentWithUser = withUser(likeQuotationButton);

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(ComponentWithUser)
// );

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         likeComment,
//         dislikeComment
//       },
//       dispatch
//     )
//   };
// };
