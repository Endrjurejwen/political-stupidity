import React from 'react';
import { number, string, shape, oneOfType } from 'prop-types';
import styled, { css } from 'styled-components';
import { H1, H5 } from 'elements';
import { spacing, color, elevation } from 'utils';

const header = ({ counters }) => (
  <Header>
    <Title marginBottom={spacing[2]}>Polityczny Poprawczak</Title>
    <QuotesContainer>
      <Number data-testid="quotes-number">{counters.quotes}</Number>
      <Caption>Mądrości</Caption>
    </QuotesContainer>
    <CommentsContainer>
      <Number data-testid="comments-number">{counters.comments}</Number>
      <Caption>Komentarze</Caption>
    </CommentsContainer>
  </Header>
);

header.propTypes = {
  counters: shape({
    comments: oneOfType([string, number]),
    quotes: oneOfType([string, number])
  }).isRequired
};

export default header;

const Header = styled.header`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr fit-content(50%) fit-content(50%) 1fr;
  grid-row-gap: ${spacing[1]};
  justify-items: start;
  padding-bottom: ${spacing[3]};
  margin-bottom: ${spacing[4]};
  /* border-bottom: 1px solid ${color.textDark}; */
`;

const figure = css`
  border: 1px solid rgba(255, 199, 137, 0.4);
  background-color: rgba(255, 199, 137, 0.4);
  padding: ${spacing[3]};
  border-radius: 8px;
`;

const Title = styled(H1)`
  grid-column: 2 / 4;
  display: inline-block;
`;

const QuotesContainer = styled.figure`
  grid-column: 2 / 3;
  justify-self: start;
  ${figure};
`;

const CommentsContainer = styled.figure`
  grid-column: 3 / 4;
  justify-self: end;
  ${figure};
`;

const Number = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

// const CommentsNumber = styled.span`
//   font-size: 3rem;
//   line-height: 1;
// `;

const Caption = styled.figcaption`
  font-size: 1.1rem;
`;
