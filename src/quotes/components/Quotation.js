import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { LikeButton } from 'common';
import { Button, Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const quotation = ({ quotation, navigationClick, likeClick, full }) => (
  <Card>
    <p data-testid="quotation-content">{quotation.content}</p>
    <Author data-testid="quotation-author">{quotation.author}</Author>
    <FlexContainer>
      <Button
        data-testid="quotation-comments-button"
        secondary
        onClick={navigationClick}
      >
        Komentarze ({quotation.comments.length})
      </Button>
      <LikeButton
        likes={Object.keys(quotation.likes).length}
        click={likeClick}
        full={full}
      />
    </FlexContainer>
    <UserName data-testid="quotation-user">
      Opublikował {quotation.userFirstName} {quotation.userLastName}
    </UserName>
    <Data data-testid="quotation-timestamp">
      {moment(quotation.createAt.toDate()).calendar()}
    </Data>
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
