import React from 'react';
import { func } from 'prop-types';
import { userType } from 'app/auth/propTypes';
import { quotationType } from 'app/quotes/propTypes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withUser, withPrivacyGuard, LikeButton } from 'app/common';
import { likeQuotation, dislikeQuotation } from 'app/quotes/actions';

const LikeButtonWithPrivacyGuard = withPrivacyGuard(LikeButton);

const likeQuotationButton = ({
  quotation,
  user,
  likeQuotation,
  dislikeQuotation
}) => {
  const handleLikeClick = () => {
    likeQuotation(quotation.id);
  };

  const handleDislikeClick = () => {
    dislikeQuotation(quotation.id);
  };

  const isLiked = user.id in quotation.likes;
  return (
    <LikeButtonWithPrivacyGuard
      likes={quotation.likesCount}
      isLiked={isLiked}
      onClick={isLiked ? handleDislikeClick : handleLikeClick}
    />
  );
};

likeQuotationButton.propTypes = {
  dislikeQuotation: func.isRequired,
  likeQuotation: func.isRequired,
  quotation: quotationType,
  user: userType
};

likeQuotationButton.defaultProps = {
  quotation: null,
  user: null
};

export default compose(
  withRouter,
  withUser,
  connect(
    null,
    { likeQuotation, dislikeQuotation }
  )
)(likeQuotationButton);

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
//         likeQuotation,
//         dislikeQuotation
//       },
//       dispatch
//     )
//   };
// };
