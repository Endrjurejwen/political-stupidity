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

const createCommentForm = ({
  commentValue,
  onCommentSubmit,
  onCommentChange,
  actions,
  match,
  comment,
  closeEditForm,
  isLoading
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
    actions.createComment(quotationID, content).then(() => {
      setContent('');
      window.scrollTo(0, document.body.scrollHeight);
    });
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
      <WithLoader isLoading={isLoading}>
        <TextareaBox
          fullWidth
          ref={autoFocusRef}
          required
          id="comment"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      </WithLoader>
      <SubmitButton type="submit" className="textarea-button">
        {comment ? 'Zapisz zmiany' : 'Skomentuj'}
      </SubmitButton>
    </Form>
  );
};

createCommentForm.propTypes = {
  commentValue: string.isRequired,
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
    mapStateToProps,
    mapDispatchToProps
  )
)(createCommentForm);

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
