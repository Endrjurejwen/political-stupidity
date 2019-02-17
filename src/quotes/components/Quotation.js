import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LikeButton } from 'common';
import { Button, Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const quotation = ({ quotation, navigationClick, likeClick }) => (
  <Card>
    <p data-testid="quotation-body">{quotation.body}</p>
    <Author data-testid="quotation-author">{quotation.author}</Author>
    <FlexContainer>
      <Button
        data-testid="quotation-comments-button"
        secondary
        onClick={navigationClick}
      >
        Komentarze ({quotation.comments.length})
      </Button>
      <LikeButton likes={quotation.likes} click={likeClick} />
    </FlexContainer>
    <UserName data-testid="quotation-user">
      Opublikował {quotation.user}
    </UserName>
    <Data data-testid="quotation-timestamp">{quotation.timestamp}</Data>
  </Card>
);

quotation.propTypes = {
  quotation: PropTypes.shape().isRequired
};

export default quotation;

const Author = styled.div`
  margin: ${spacing[2]} 0;
  font-size: 0.9rem;
`;

const FlexContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid lightgrey;
  margin-bottom: ${spacing[2]};
`;

const UserName = styled.div`
  font-size: 0.85rem;
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: grey;
`;
