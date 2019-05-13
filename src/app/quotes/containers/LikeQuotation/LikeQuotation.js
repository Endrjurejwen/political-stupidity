import React from 'react';
import { shape, func, string } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { quotationType } from 'app/quotes/propTypes';
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
      full={isLiked}
      onClick={isLiked ? handleDislikeClick : handleLikeClick}
    />
  );
};

likeQuotationButton.propTypes = {
  dislikeQuotation: func.isRequired,
  likeQuotation: func.isRequired,
  quotation: quotationType,
  user: shape({
    id: string,
    firstName: string,
    lastName: string
  })
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
