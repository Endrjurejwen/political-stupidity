import React, { useState, useRef } from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextareaBox, useAutoFocus, useOnClickOutside, useEscapeKey } from 'common';
import { Button } from 'elements';
import { spacing, media } from 'utils';
import { createComment, editComment } from 'comments/actions';

const createCommentForm = ({
  commentValue,
  onCommentSubmit,
  onCommentChange,
  actions,
  match,
  comment,
  closeEditForm
}) => {
  const [content, setContent] = useState(comment ? comment.content : '');
  const autoFocusRef = useRef(null);
  const submitFormRef = useRef(null);
  if (comment) {
    useAutoFocus(autoFocusRef);
    useOnClickOutside(submitFormRef, closeEditForm);
    useEscapeKey(closeEditForm);
  }

  const resetTextareaSize = () => {
    const element = document.querySelector('.resizeTextArea');
    element.style.height = 'inherit';
  };

  const handleCreateCommentSubmit = event => {
    resetTextareaSize();

    const quotationID = match.params.id;
    event.preventDefault();
    actions.createComment(quotationID, content);
    setContent('');
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
    <Form
      ref={submitFormRef}
      onSubmit={comment ? handleEditCommentSubmit : handleCreateCommentSubmit}
    >
      <TextareaBox
        ref={autoFocusRef}
        required
        id="comment"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <SubmitButton type="submit" className="textarea-button">Skomentuj</SubmitButton>
    </Form>
  );
};

createCommentForm.propTypes = {
  commentValue: string.isRequired,
  onCommentChange: func.isRequired,
  onCommentSubmit: func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        createComment,
        editComment
      },
      dispatch
    )
  };
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(createCommentForm);

const Form = styled.form`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  margin: ${spacing[2]} auto ${spacing[5]};

  /* &:focus-within .textarea-button {
    visibility: visible;
  } */

  /* textarea {
    border: none;
    margin: 0;
    padding: 0;
  } */
`;

const SubmitButton = styled(Button)`
  margin-top: -1rem;
  /* visibility: hidden; */

  ${media.tablet`
    align-self: flex-end;
  `}
`;

// return (
//   <Form onSubmit={onCommentSubmit}>
//     <TextareaBox
//       required
//       id="comment"
//       value={commentValue}
//       onChange={onCommentChange}
//     />
//     <SubmitButton className="textarea-button">Skomentuj</SubmitButton>
//   </Form>
// );
// };
