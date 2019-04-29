import React from 'react';
import { shape, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from 'comments/actions';
import { commentType } from 'comments/propTypes';
import Confirmation from 'quotes/components/Confirmation';

const deleteCommentConfirmation = ({ actions, closeModal, comment, match }) => {
  const handleDeleteClick = () => {
    actions.deleteComment(match.params.id, comment.id);
  };

  return (
    <Confirmation
      onCloseClick={closeModal}
      onConfirmClick={handleDeleteClick}
    />
  );
};

deleteCommentConfirmation.propTypes = {
  actions: shape({
    deleteComment: func.isRequired
  }).isRequired,
  closeModal: func,
  comment: commentType
};

deleteCommentConfirmation.defaultProps = {
  closeModal: () => null,
  comment: null
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        deleteComment
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(deleteCommentConfirmation)
);
