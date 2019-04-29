import React, { useState } from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { commentType } from 'comments/propTypes';
import EditComment from 'comments/containers/EditComment';
import DeleteComment from 'comments/containers/DeleteComment';
import LikeComment from 'comments/containers/LikeComment';
import { EditButton, DeleteButton, withToggle } from 'common';
import { Card, H6 } from 'elements';
import { spacing, flexCenter, absolute, color } from 'utils';

const DeleteCommentWithToggle = withToggle({
  modalComponent: DeleteComment,
  toggleButton: DeleteButton
});

const comment = ({
  comment,
  deleteButton,
  editButton,
  likeButton,
  isEditButtonsDisplay
}) => {
  const [isEditActive, setIsEditActive] = useState(false);

  let textBox = <Text data-testid="comment-content">{comment.content}</Text>;
  if (isEditActive) {
    textBox = (
      <EditComment
        comment={comment}
        closeEditForm={() => setIsEditActive(!isEditActive)}
      />
    );
  }
  return (
    <Card secondary>
      <Header>
        <H6>
          {comment.author.firstName} {comment.author.lastName}
        </H6>
      </Header>
      {textBox}
      <Footer>
        <Data data-testid="comment-timestamp">
          {moment(comment.createAt.toDate()).calendar()}
        </Data>
        <LikeComment comment={comment} />
      </Footer>
      <ToolboxWrapper isDisplay={isEditButtonsDisplay}>
        <DeleteCommentWithToggle comment={comment} />
        <EditButton click={() => setIsEditActive(!isEditActive)} />
      </ToolboxWrapper>
    </Card>
  );
};

comment.propTypes = {
  deleteButton: element,
  comment: commentType.isRequired,
  likeButton: element
};

comment.defaultProps = {
  deleteButton: null,
  likeButton: null
};

export default comment;

const Header = styled.header`
  padding: ${spacing[2]} ${spacing[3]} ${spacing[2]};
  /* border-bottom: 1px solid ${color.layoutBorder}; */
`;

const Footer = styled.footer`
  ${flexCenter({ justifyContent: 'space-between' })};
  /* border-top: 1px solid ${color.action}; */
  position: relative;

  &:before, &:after {
    content: '';
    background: ${color.secondary};
    position: absolute;
    top: 0;
  }

  &:before {
    left: 0;
    height: 1px;
    width: 35%;
  }

  &:after {
    left: 35%;
    height: 10px;
    width: 10px;
    border-radius: 100px;
    transform: translateY(-5px);
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  padding: 0 ${spacing[3]} ${spacing[2]};
  margin-bottom: ${spacing[3]};
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: ${color.textSecondary};
  padding: ${spacing[3]} 0 ${spacing[4]};
`;

const ToolboxWrapper = styled.aside`
  /* width: 200px;
  height: 100px; */
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 0;
`;
