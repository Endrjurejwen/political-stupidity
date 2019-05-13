import React from 'react';
import { ConfirmationError } from 'app/common';

import * as S from './style';

const authErrorHandler = ({ error, resetError }) => {
  const handleClick = () => {
    resetError();
  };
  let errorMessage = null;
  if (error) {
    errorMessage = (
      <S.Wrapper>
        <ConfirmationError onConfirmClick={handleClick} text={error} />
      </S.Wrapper>
    );
  }
  return errorMessage;
};

export default authErrorHandler;
