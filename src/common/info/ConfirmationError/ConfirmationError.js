import React, { useRef } from 'react';
import { string, func } from 'prop-types';
import { useAutoFocus } from 'common';

import * as S from './style';

const confirmation = ({ title, text, onConfirmClick }) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <>
      <S.H5>{title}</S.H5>
      <p>{text}</p>
      <S.ButtonsContainer>
        <S.InlineButton marginLeft="auto" onClick={onConfirmClick}>
          Rozumiem
        </S.InlineButton>
      </S.ButtonsContainer>
    </>
  );
};

confirmation.propTypes = {
  onConfirmClick: func,
  text: string,
  title: string
};

confirmation.defaultProps = {
  onConfirmClick: () => null,
  text: '',
  title: 'Ups! Mamy problem'
};

export default confirmation;
