import React, { useRef } from 'react';
import { string, func } from 'prop-types';
import { spacing } from 'utils';
import { useAutoFocus } from 'common';

import * as S from './style';

const confirmation = ({ title, text, onConfirmClick, onCloseClick }) => {
  const autoFocusRef = useRef(null);
  useAutoFocus(autoFocusRef);

  return (
    <>
      <S.H5>{title}</S.H5>
      <p>{text}</p>
      <S.ButtonsContainer>
        <S.InlineButton
          ref={autoFocusRef}
          marginLeft="auto"
          onClick={onCloseClick}
        >
          Anuluję
        </S.InlineButton>
        <S.InlineButton
          marginLeft={spacing[6]}
          onClick={() => {
            onConfirmClick();
            onCloseClick();
          }}
        >
          Potwierdzam
        </S.InlineButton>
      </S.ButtonsContainer>
    </>
  );
};

confirmation.propTypes = {
  onConfirmClick: func,
  onCloseClick: func,
  text: string,
  title: string
};

confirmation.defaultProps = {
  onConfirmClick: () => null,
  onCloseClick: () => null,
  text:
    'Czy potwierdzasz usunięcie cytatu? Będzie się to wiązać z usunięciem również wszystkich komentarzy, kóre pojawiły się pod tym cytatem! ',
  title: 'Usunięcie cytatu'
};

export default confirmation;
