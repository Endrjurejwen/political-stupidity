import React from 'react';
import { func, string } from 'prop-types';
import { match } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment } from 'app/comments/actions';
import { Confirmation } from 'app/common';

export const deleteCommentConfirmation = ({
  deleteComment,
  onCloseModal,
  commentID,
  match
}) => {
  const handleDeleteClick = () => {
    const quotationID = match.params.id;
    deleteComment(quotationID, commentID);
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
  commentID: string,
  match: match.isRequired,
  onCloseModal: func
};

deleteCommentConfirmation.defaultProps = {
  commentID: null,
  onCloseModal: () => null
};

export default withRouter(
  connect(
    null,
    { deleteComment }
  )(deleteCommentConfirmation)
);
