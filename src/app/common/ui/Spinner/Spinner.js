import React from 'react';
import { string } from 'prop-types';

import * as S from './style';

const spinner = ({ bgColor }) => (
  <S.Spinner>
    <S.Symbol bgColor={bgColor} data-testid="spinner">
      Loading...
    </S.Symbol>
    <S.Label>Wczytuję...</S.Label>
  </S.Spinner>
);

spinner.propTypes = {
  bgColor: string
};

spinner.defaultProps = {
  bgColor: '#FFF'
};

export default spinner;
