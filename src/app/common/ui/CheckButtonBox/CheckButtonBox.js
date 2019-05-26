import React from 'react';
import { string } from 'prop-types';

import * as S from './style';

const checkButtonBox = ({ id, label, ...props }) => (
  <S.InputBox>
    <S.Input id={id} {...props} data-testid={`filter-${id}`} />
    <label htmlFor={id}>
      <S.RadioButton>{label}</S.RadioButton>
    </label>
  </S.InputBox>
);

checkButtonBox.propTypes = {
  id: string.isRequired,
  label: string
};

checkButtonBox.defaultProps = {
  label: ''
};

export default checkButtonBox;
