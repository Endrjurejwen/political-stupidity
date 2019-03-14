import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { LikeButton, CloseButton } from 'common';
import { Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const comment = ({ comment, likeClick, deleteClick, userId }) => (
  <Card secondary>
    <Text data-testid="comment-content">{comment.content}</Text>
    <FlexContainer>
      <div>
        <UserName data-testid="comment-user">{comment.userFirstName}</UserName>
        <Data data-testid="comment-timestamp">
          {moment(comment.createAt.toDate()).calendar()}
        </Data>
      </div>
      <LikeButton
        likes={Object.keys(comment.likes).length}
        click={likeClick}
        full={userId in comment.likes}
      />
    </FlexContainer>
    <CloseButton click={deleteClick} isDisplay={comment.authorId === userId} />
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
