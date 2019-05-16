import React from 'react';
import { func } from 'prop-types';
import { match } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from 'app/comments/actions';
import { commentType } from 'app/comments/propTypes';
import { Confirmation } from 'app/common';

const deleteCommentConfirmation = ({
  deleteComment,
  onCloseModal,
  comment,
  match
}) => {
  const handleDeleteClick = () => {
    const quotationID = match.params.id;
    deleteComment(quotationID, comment.id);
  };

  return (
    <Confirmation
      onCloseClick={onCloseModal}
      onConfirmClick={handleDeleteClick}
      text="Czy na pewno chcesz usunąć ten komentarz?"
      title="Usunięcie komentarza"
    />
  );
};

deleteCommentConfirmation.propTypes = {
  deleteComment: func.isRequired,
  comment: commentType,
  match: match.isRequired,
  onCloseModal: func
};

deleteCommentConfirmation.defaultProps = {
  comment: null,
  onCloseModal: () => null
};

export default withRouter(
  connect(
    null,
    { deleteComment }
  )(deleteCommentConfirmation)
);
