import React from 'react';

import * as S from './style';

const spinner = () => (
  <S.Spinner>
    <S.Symbol data-testid="spinner">Loading...</S.Symbol>
    <S.Label>Wczytuję...</S.Label>
  </S.Spinner>
);

export default spinner;
