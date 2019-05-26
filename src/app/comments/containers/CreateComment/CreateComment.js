import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { match } from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { WithLoader } from 'app/common';
import { createComment } from 'app/comments/operations';
import { getIsLoadingState } from 'app/comments/selectors';
import CommentForm from 'app/comments/components/CommentForm';

export const createCommentForm = ({ createComment, isLoading, match }) => {
  const [content, setContent] = useState('');
  const resetTextareaSize = () => {
    const element = document.querySelector('.resizeTextArea');
    element.style.height = 'inherit';
  };

  const handleCreateCommentSubmit = () => {
    resetTextareaSize();

    const quotationID = match.params.id;
    // event.preventDefault();
    createComment(quotationID, content).then(() => {
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
  createComment: func.isRequired,
  isLoading: bool,
  match: match.isRequired
};

createCommentForm.defaultProps = {
  isLoading: false
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingState(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { createComment }
  )
)(createCommentForm);
