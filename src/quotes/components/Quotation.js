import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Icon, Card } from 'elements';
import { spacing, elevation, color, flexCenter } from 'utils';

const quotation = ({ quotation, click }) => (
  <Card>
    <p data-testid="quotation-body">{quotation.body}</p>
    <Author>{quotation.author}</Author>
    <FlexContainer>
      <Button secondary onClick={click}>
        Czytaj więcej
      </Button>
      <IconContainer>
        <div>{quotation.comments.length}</div>
        <Icon name="comments" />
      </IconContainer>
      <IconContainer>
        <div>{quotation.likes}</div>
        <IconButton>
          <Icon name="fullLove" />
        </IconButton>
      </IconContainer>
    </FlexContainer>
    <UserName>Opublikował {quotation.user}</UserName>
    <Data>{quotation.dataStamp}</Data>
  </Card>
);

quotation.propTypes = {
  quotation: PropTypes.shape().isRequired
};

// quotation.defaultProps = {

// };

export default quotation;

// const Card = styled.article`
//   ${elevation[1]};
//   margin: 0 auto ${spacing[6]};
//   max-width: 30rem;
//   /* border: 1px solid green; */
//   border-radius: 8px;
//   padding: ${spacing[2]} ${spacing[3]};
// `;

const Author = styled.div`
  margin-top: ${spacing[2]};
  font-size: 0.9rem;
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

const FlexContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between', alignItems: 'flex-end' })};
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid lightgrey;
  margin-bottom: ${spacing[2]};
`;

const IconContainer = styled.div`
  ${flexCenter};
  font-size: 0.9rem;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 0.85rem;
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: grey;
`;
