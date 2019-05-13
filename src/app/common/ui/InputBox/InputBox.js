import React, { forwardRef } from 'react';
import { func, string } from 'prop-types';

import * as S from './style';

const inputBox = forwardRef(
  ({ type, placeholder, id, change, ...rest }, ref) => (
    <S.InputBox>
      <S.Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={change}
        {...rest}
      />
      <S.Label htmlFor={id}>{placeholder}</S.Label>
    </S.InputBox>
  )
);

inputBox.propTypes = {
  change: func,
  id: string.isRequired,
  placeholder: string,
  type: string
};

inputBox.defaultProps = {
  change: () => null,
  placeholder: 'name',
  type: 'text'
};

export default inputBox;
