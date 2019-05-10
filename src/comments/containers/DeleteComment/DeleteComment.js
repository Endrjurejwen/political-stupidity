import React from 'react';
import { func } from 'prop-types';
import { match } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from 'comments/actions';
import { commentType } from 'comments/propTypes';
import { Confirmation } from 'common';

const deleteCommentConfirmation = ({
  deleteComment,
  closeModal,
  comment,
  match
}) => {
  const handleDeleteClick = () => {
    const quotationID = match.params.id;
    deleteComment(quotationID, comment.id);
  };

  return (
    <Confirmation
      onCloseClick={closeModal}
      onConfirmClick={handleDeleteClick}
      text="Czy na pewno chcesz usunąć ten komentarz?"
      title="Usunięcie komentarza"
    />
  );
};

deleteCommentConfirmation.propTypes = {
  deleteComment: func.isRequired,
  closeModal: func,
  comment: commentType,
  match: match.isRequired
};

deleteCommentConfirmation.defaultProps = {
  closeModal: () => null,
  comment: null
};

export default withRouter(
  connect(
    null,
    { deleteComment }
  )(deleteCommentConfirmation)
);
