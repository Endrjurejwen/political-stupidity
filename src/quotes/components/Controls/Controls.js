import React from 'react';
import { Modal, Toggle } from 'common';
import SortQuotes from 'quotes/containers/SortQuotes';
import FilterQuotes from 'quotes/containers/FilterQuotes';

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
