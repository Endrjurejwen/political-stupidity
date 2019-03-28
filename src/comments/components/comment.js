import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { commentType } from 'comments/propTypes';
import { Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const comment = ({ comment, closeButton, likeButton }) => (
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
    {closeButton}
  </Card>
);

comment.propTypes = {
  comment: commentType.isRequired,
  likeButton: PropTypes.element,
  closeButton: PropTypes.element
};

comment.defaultProps = {
  likeButton: null,
  closeButton: null
};

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
