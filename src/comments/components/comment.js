import React from 'react';
import styled from 'styled-components';
import { Icon, Card } from 'elements';
import { elevation, spacing, color, flexCenter } from 'utils';

const comment = ({ comment }) => (
  <Card secondary>
    <Text>{comment.body}</Text>
    <FlexContainer>
      <div>
        <UserName>{comment.user}</UserName>
        <Data>{comment.dataStamp}</Data>
      </div>
      <IconContainer>
        <div>{comment.likes}</div>
        <IconButton>
          <Icon name="fullLove" />
        </IconButton>
      </IconContainer>
    </FlexContainer>
  </Card>
);

export default comment;

// const Card = styled.article`
//   ${elevation[1]};
//   margin: 0 auto ${spacing[6]};
//   max-width: 30rem;
//   /* border: 1px solid green; */
//   border-radius: 8px;
//   padding: ${spacing[2]} ${spacing[3]};
//   position: relative;
// `;

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

const IconButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover svg g path {
    transition: 0.2s fill ease;
    fill: ${color.action};
  }
`;

const IconContainer = styled.div`
  ${flexCenter};
  font-size: 0.9rem;
  flex-direction: column;
`;
