import React from 'react';
import { string, func, shape } from 'prop-types';
import { TextareaBox } from 'app/common';

import * as S from './style';

const commentForm = ({
  onCommentSubmit,
  onCommentChange,
  SubmitButtonLabel,
  autoFocusRef,
  formRef,
  content
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    onCommentSubmit();
  };
  return (
    <S.CommentForm onSubmit={handleSubmit} ref={formRef}>
      <TextareaBox
        isFullWidth
        ref={autoFocusRef}
        required
        id="comment"
        value={content}
        onChange={event => onCommentChange(event)}
      />
      <S.SubmitButton type="submit" className="textarea-button">
        {SubmitButtonLabel}
      </S.SubmitButton>
    </S.CommentForm>
  );
};

commentForm.propTypes = {
  autoFocusRef: shape(),
  content: string,
  formRef: shape(),
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired,
  SubmitButtonLabel: string
};

commentForm.defaultProps = {
  autoFocusRef: null,
  content: '',
  formRef: null,
  SubmitButtonLabel: null
};

export default commentForm;
