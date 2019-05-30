import React from 'react';
import { withToggle } from 'app/common';
import SortQuotes from 'app/quotes/containers/SortQuotes';
import FilterQuotes from 'app/quotes/containers/FilterQuotes';
import FilterButton from 'app/quotes/components/FilterButton';

import * as S from './style';

const FilterQuotesWithToggle = withToggle({
  modalComponent: FilterQuotes,
  toggleButton: FilterButton
});

const controls = () => (
  <S.FlexWrapper>
    <S.PanelContainer>
      <SortQuotes />
      <FilterQuotesWithToggle />
    </S.PanelContainer>
  </S.FlexWrapper>
);

export default controls;
