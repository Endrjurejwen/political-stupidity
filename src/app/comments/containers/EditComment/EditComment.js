import React, { useState, useRef } from 'react';
import { func, bool } from 'prop-types';
import { commentType } from 'app/comments/propTypes';
import { match } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  useAutoFocus,
  useOnClickOutside,
  useEscapeKey,
  WithLoader
} from 'app/common';
import { editComment } from 'app/comments/actions';
import { getIsLoadingState } from 'app/comments/selectors';
import CommentForm from 'app/comments/components/CommentForm';

export const editCommentForm = ({
  editComment,
  match,
  comment,
  onCloseEditForm,
  isLoading
}) => {
  const [content, setContent] = useState(comment.content);
  const submitFormRef = useRef(null);
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);
  useOnClickOutside(submitFormRef, onCloseEditForm);
  useEscapeKey(onCloseEditForm);

  const resetTextareaSize = () => {
    const element = document.querySelector('.resizeTextArea');
    element.style.height = 'inherit';
  };

  const handleEditCommentSubmit = event => {
    resetTextareaSize();

    const quotationID = match.params.id;
    event.preventDefault();
    editComment(quotationID, comment.id, content);
    setContent('');
    onCloseEditForm();
  };

  return (
    <WithLoader isLoading={isLoading}>
      <CommentForm
        formRef={submitFormRef}
        autoFocusRef={autoFocusRef}
        content={content}
        onCommentSubmit={handleEditCommentSubmit}
        onCommentChange={setContent}
        SubmitButtonLabel="Zapisz zmiany"
      />
    </WithLoader>
  );
};

editCommentForm.propTypes = {
  comment: commentType,
  editComment: func.isRequired,
  isLoading: bool,
  match: match.isRequired,
  onCloseEditForm: func
};

editCommentForm.defaultProps = {
  comment: null,
  isLoading: false,
  onCloseEditForm: () => null
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingState(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { editComment }
  )
)(editCommentForm);
