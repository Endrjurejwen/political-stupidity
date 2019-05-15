import React, { useState } from 'react';
import { commentType } from 'app/comments/propTypes';
import EditComment from 'app/comments/containers/EditComment';
import DeleteComment from 'app/comments/containers/DeleteComment';
import LikeComment from 'app/comments/containers/LikeComment';
import {
  EditButton,
  DeleteButton,
  withToggle,
  Toolbox,
  Data
} from 'app/common';

import * as S from './style';

const DeleteCommentWithToggle = withToggle({
  modalComponent: DeleteComment,
  toggleButton: DeleteButton
});

const comment = ({ comment }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  const toggleEditComment = () => setIsEditActive(!isEditActive);

  let textBox = (
    <S.Text data-testid="comment-content">{comment.content}</S.Text>
  );
  if (isEditActive) {
    textBox = (
      <EditComment comment={comment} closeEditForm={toggleEditComment} />
    );
  }
  return (
    <S.Card secondary>
      <S.Header>
        <S.H6>
          {comment.author.firstName} {comment.author.lastName}
        </S.H6>
      </S.Header>
      {textBox}
      <S.Footer>
        <Data dataNumber={comment.createAt} />
        <LikeComment comment={comment} />
      </S.Footer>
      <Toolbox id={comment.author.id}>
        <DeleteCommentWithToggle comment={comment} />
        <EditButton onClick={toggleEditComment} />
      </Toolbox>
    </S.Card>
  );
};

comment.propTypes = {
  comment: commentType
};

comment.defaultProps = {
  comment: null
};

export default comment;
