import React, { useState, forwardRef, useRef } from 'react';
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

const commentForm = forwardRef(({
  commentValue,
  onCommentSubmit,
  onCommentChange,
  actions,
  match,
  comment,
  closeEditForm,
  isLoading,
  SubmitButtonLabel,
  autoFocusRef,
  formRef,
  content
}) => {

    return (
      <Form ref={formRef} onSubmit={onCommentSubmit}>
        <TextareaBox
          fullWidth
          ref={autoFocusRef}
          required
          id="comment"
          value={content}
          onChange={event => onCommentChange(event.target.value)}
        />
        <SubmitButton type="submit" className="textarea-button">
          {SubmitButtonLabel}
        </SubmitButton>
      </Form>
    );
} );

commentForm.propTypes = {
  commentValue: string.isRequired,
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired
};

export default commentForm;

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;

  padding: 0 ${spacing[3]} ${spacing[2]};
  /* margin-bottom: ${spacing[3]}; */
  /* margin: ${spacing[2]} auto ${spacing[5]}; */
  margin: 0 auto ${spacing[0]};

  .text-area {
    padding: 0;
    margin: 0;
    padding-bottom: ${spacing[0]};
  }

  &:focus-within .textarea-button {
    position: relative;
    visibility: visible;
    margin-top: ${spacing[3]};
    transform: translateY(0);
  }
`;

const SubmitButton = styled(Button)`
  position: absolute;
  margin-top: 0;
  visibility: hidden;
  transform: translateY(-45px);
  transition: transform 0.1s ease-out;

  ${media.tablet`
    align-self: flex-end;
  `}
`;
