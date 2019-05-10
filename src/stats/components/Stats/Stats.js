import React from 'react';
import { number, string, shape, oneOfType } from 'prop-types';

import * as S from './style';

const stats = ({ counters }) => (
  <S.StatsWrapper>
    <S.QuotesContainer>
      <S.Caption>Mądrości</S.Caption>
      <S.Number data-testid="quotes-number">{counters.quotes}</S.Number>
    </S.QuotesContainer>
    <S.CommentsContainer>
      <S.Caption>Komentarze</S.Caption>
      <S.Number data-testid="comments-number">{counters.comments}</S.Number>
    </S.CommentsContainer>
  </S.StatsWrapper>
);

stats.propTypes = {
  counters: shape({
    comments: oneOfType([string, number]),
    quotes: oneOfType([string, number])
  }).isRequired
};

export default stats;
