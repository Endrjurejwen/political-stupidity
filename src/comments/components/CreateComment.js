import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { TextareaBox } from 'common';
import { Button } from 'elements';
import { spacing, media } from 'utils';

const createComment = ({ commentValue, onCommentSubmit, onCommentChange }) => (
  <Form onSubmit={onCommentSubmit}>
    <TextareaBox id="comment" value={commentValue} onChange={onCommentChange} />
    <SubmitButton>Skomentuj</SubmitButton>
  </Form>
);

createComment.propTypes = {
  commentValue: string.isRequired,
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired
};

export default createComment;

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  margin: ${spacing[2]} auto;
`;

const SubmitButton = styled(Button)`
  margin-top: -1rem;

  ${media.tablet`
    align-self: flex-end;
  `}
`;
