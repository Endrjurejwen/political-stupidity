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
  return (
    <S.Form ref={formRef} onSubmit={onCommentSubmit}>
      <TextareaBox
        fullWidth
        ref={autoFocusRef}
        required
        id="comment"
        value={content}
        onChange={event => onCommentChange(event.target.value)}
      />
      <S.SubmitButton type="submit" className="textarea-button">
        {SubmitButtonLabel}
      </S.SubmitButton>
    </S.Form>
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
