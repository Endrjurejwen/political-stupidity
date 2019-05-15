import React from 'react';
// import { Modal, Toggle, withDelayUnmounting } from 'app/common';
// import SortQuotes from 'app/quotes/containers/SortQuotes';
// import FilterQuotes from 'app/quotes/containers/FilterQuotes';

import * as S from './style';

const FilterButton = ({ onClick }) => (
  <S.FilterButton onClick={onClick}>
    <span>Filtry</span>
    <S.FilterSymbol />
  </S.FilterButton>
);

export default FilterButton;
