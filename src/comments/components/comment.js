import React from 'react';
import styled from 'styled-components';
import { LikeButton } from 'common';
import { Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const comment = ({ comment, likeClick }) => (
  <Card secondary>
    <Text data-testid="comment-body">{comment.body}</Text>
    <FlexContainer>
      <div>
        <UserName data-testid="comment-user">{comment.user}</UserName>
        <Data data-testid="comment-timestamp">{comment.timestamp}</Data>
      </div>
      <LikeButton likes={comment.likes} click={likeClick} />
    </FlexContainer>
  </Card>
);

export default comment;

const FlexContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between', alignItems: 'flex-end' })};
  border-top: 1px solid lightgrey;
`;

const Text = styled.p`
  padding: 0 0 ${spacing[2]};
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
