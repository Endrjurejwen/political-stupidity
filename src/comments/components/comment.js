import React, { useState } from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { commentType } from 'comments/propTypes';
import CreateComment from 'comments/components/CreateComment';
import { EditButton } from 'common';
import { Card, H6 } from 'elements';
import { spacing, flexCenter, absolute, color } from 'utils';

const comment = ({
  comment,
  deleteButton,
  editButton,
  likeButton,
  isEditButtonsDisplay
}) => {
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <Card secondary>
      <Header>
        <H6>
          {comment.author.firstName} {comment.author.lastName}
        </H6>
      </Header>
      {isEditActive ? (
        <CreateComment
          comment={comment}
          closeEditForm={() => setIsEditActive(!isEditActive)}
        />
      ) : (
        <Text data-testid="comment-content">{comment.content}</Text>
      )}
      <FlexContainer>
        {/* <div> */}
        {/* <UserName data-testid="comment-user">
            {comment.author.firstName} {comment.author.lastName}
          </UserName> */}
        <Data data-testid="comment-timestamp">
          {moment(comment.createAt.toDate()).calendar()}
        </Data>
        {/* </div> */}
        {likeButton}
      </FlexContainer>
      <ToolboxWrapper isDisplay={isEditButtonsDisplay}>
        {deleteButton}
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

const FlexContainer = styled.div`
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
    width: 87%;
  }

  &:after {
    left: 87%;
    height: 10px;
    width: 10px;
    border-radius: 100px;
    transform: translateY(-5px);
  }
`;

const Text = styled.p`
  padding: 0 ${spacing[3]} ${spacing[2]};
  margin-bottom: ${spacing[3]};
`;

const UserName = styled.div`
  font-size: 0.85rem;
  padding-top: ${spacing[1]};

  margin-top: ${spacing[1]};
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
