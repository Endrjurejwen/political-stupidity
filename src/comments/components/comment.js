import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { commentType } from 'comments/propTypes';
import { Card } from 'elements';
import { spacing, flexCenter, absolute } from 'utils';

const comment = ({
  comment,
  closeButton,
  likeButton,
  isEditButtonsDisplay
}) => (
  <Card secondary>
    <Text data-testid="comment-content">{comment.content}</Text>
    <FlexContainer>
      <div>
        <UserName data-testid="comment-user">
          {comment.author.firstName} {comment.author.lastName}{' '}
        </UserName>
        <Data data-testid="comment-timestamp">
          {moment(comment.createAt.toDate()).calendar()}
        </Data>
      </div>
      {likeButton}
    </FlexContainer>
    <EditButtonsWrapper isDisplay={isEditButtonsDisplay}>
      {closeButton}
    </EditButtonsWrapper>
  </Card>
);

comment.propTypes = {
  closeButton: element,
  comment: commentType.isRequired,
  likeButton: element
};

comment.defaultProps = {
  closeButton: null,
  likeButton: null
};

export default comment;

const FlexContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between', alignItems: 'flex-end' })};
  border-top: 1px solid lightgrey;
`;

const Text = styled.p`
  /* padding: 0 0 ${spacing[2]}; */
`;

const UserName = styled.div`
  font-size: 0.85rem;
  padding-top: ${spacing[1]};

  margin-top: ${spacing[1]};
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: grey;
`;

const EditButtonsWrapper = styled.aside`
  /* width: 200px;
  height: 100px; */
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
`;
