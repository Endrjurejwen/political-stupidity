import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1, H5 } from 'elements';
import { spacing, color } from 'utils';

const header = ({ counters }) => (
  <Wrapper>
    <Title>Polityczny Poprawczak</Title>
    <QuotesContainer>
      <QuotesNumber data-testid="quotes-number">{counters.quotes}</QuotesNumber>
      <H5>Cytaty</H5>
    </QuotesContainer>
    <CommentsContainer>
      <CommentsNumber data-testid="comments-number">
        {counters.comments}
      </CommentsNumber>
      <H5>Komentarze</H5>
    </CommentsContainer>
  </Wrapper>
);

header.propTypes = {
  counters: PropTypes.shape({
    quotes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    comments: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired
};

export default header;

const Wrapper = styled.header`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr fit-content(50%) fit-content(50%) 1fr;
  grid-row-gap: ${spacing[1]};
  justify-items: start;
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid ${color.textDark};
`;

const Title = styled(H1)`
  grid-column: 2 / 4;
  display: inline-block;
`;

const QuotesContainer = styled.div`
  grid-column: 2 / 3;
  justify-self: start;
`;

const CommentsContainer = styled.div`
  grid-column: 3 / 4;
  justify-self: end;
`;

const QuotesNumber = styled.div`
  font-size: 3rem;
  line-height: 1;
`;

const CommentsNumber = styled.div`
  font-size: 3rem;
  line-height: 1;
`;
