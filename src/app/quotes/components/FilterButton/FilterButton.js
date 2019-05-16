import React from 'react';
import { func } from 'prop-types';

import * as S from './style';

const filterButton = ({ onClick }) => (
  <S.FilterButton onClick={onClick}>
    <span>Filtry</span>
    <S.FilterSymbol />
  </S.FilterButton>
);

filterButton.propTypes = {
  onClick: func
};

filterButton.defaultProps = {
  onClick: () => null
};

export default filterButton;
