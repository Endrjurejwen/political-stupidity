import React, { useState, useRef } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextareaBox, useAutoFocus, useOnClickOutside, useEscapeKey, WithLoader } from 'common';
import { Button } from 'elements';
import { spacing, media, margins } from 'utils';
import { createComment, editComment } from 'comments/actions';
import { getIsLoadingState } from 'comments/selectors';
import CommentForm from 'comments/components/CommentForm';

const createCommentForm = ({
  onCommentSubmit,
  onCommentChange,
  actions,
  match,
  comment,
  closeEditForm,
  isLoading
}) => {
  const [content, setContent] = useState(comment.content);
  const submitFormRef = useRef(null);
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);
  useOnClickOutside(submitFormRef, closeEditForm);
  useEscapeKey(closeEditForm);

  const resetTextareaSize = () => {
    const element = document.querySelector('.resizeTextArea');
    element.style.height = 'inherit';
  };

  const handleEditCommentSubmit = event => {
    resetTextareaSize();

    const quotationID = match.params.id;
    event.preventDefault();
    actions.editComment(quotationID, comment.id, content);
    setContent('');
    closeEditForm();
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

createCommentForm.propTypes = {
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        editComment
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(createCommentForm);
