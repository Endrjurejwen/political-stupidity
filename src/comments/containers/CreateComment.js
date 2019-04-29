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
  const [content, setContent] = useState('');
  const resetTextareaSize = () => {
    const element = document.querySelector('.resizeTextArea');
    element.style.height = 'inherit';
  };

  const handleCreateCommentSubmit = event => {
    resetTextareaSize();

    const quotationID = match.params.id;
    event.preventDefault();
    actions.createComment(quotationID, content).then(() => {
      setContent('');
      window.scrollTo(0, document.body.scrollHeight);
    });
  };

  return (
    <WithLoader isLoading={isLoading}>
      <CommentForm
        content={content}
        onCommentSubmit={handleCreateCommentSubmit}
        onCommentChange={setContent}
        SubmitButtonLabel="Skomentuj"
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
        createComment
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
