import React from 'react';
import { shape, func, bool } from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { quotationType } from 'quotes/propTypes';
import { withUser, withPrivacyGuard, LikeButton } from 'common';
import { likeQuotation, dislikeQuotation } from 'quotes/actions';

const LikeButtonWithPrivacyGuard = withPrivacyGuard(LikeButton);

const likeQuotationButton = ({ quotation, user, history, actions }) => {
  const handleLikeClick = () => {
    if (!user.id) {
      // history.push('/login');
    } else {
      actions.likeQuotation(quotation.id);
    }
  };

  const handleDislikeClick = () => {
    if (!user.id) {
      // history.push('/login');
    } else {
      actions.dislikeQuotation(quotation.id);
    }
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
  actions: shape({
    likeQuotation: func.isRequired,
    dislikeQuotation: func.isRequired
  }).isRequired,
  quotation: quotationType
};

likeQuotationButton.defaultProps = {
  quotation: null
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        likeQuotation,
        dislikeQuotation
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
)(likeQuotationButton);

// const ComponentWithUser = withUser(likeQuotationButton);

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(ComponentWithUser)
// );
