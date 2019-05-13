import React from 'react';
import { Modal, Toggle } from 'app/common';
import SortQuotes from 'app/quotes/containers/SortQuotes';
import FilterQuotes from 'app/quotes/containers/FilterQuotes';

import * as S from './style';

const controls = () => (
  <S.FlexWrapper>
    <S.PanelContainer>
      <SortQuotes />
      <Toggle
        open={show => (
          <S.FilterButton onClick={show}>
            <span>Filtry</span>
            <S.FilterSymbol />
          </S.FilterButton>
        )}
        content={hide => (
          <Modal close={hide}>
            <FilterQuotes closeModal={hide} />
          </Modal>
        )}
      />
    </S.PanelContainer>
  </S.FlexWrapper>
);

export default controls;
