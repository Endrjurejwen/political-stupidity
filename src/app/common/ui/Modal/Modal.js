import React, { useEffect } from 'react';
import { func, element } from 'prop-types';
import { Backdrop, CloseButton, Portal, useBodyScrollLock } from 'app/common';
import { trapTabKey } from 'utils';

import * as S from './style';

const modal = ({ close, children }) => {
  useBodyScrollLock();

  useEffect(() => {
    // const focusedElementBeforeModal = document.activeElement;
    document.addEventListener('keydown', event => trapTabKey(event, close));
    return () => {
      // focusedElementBeforeModal.focus();
      document.removeEventListener('keydown', event =>
        trapTabKey(event, close)
      );
    };
  }, []);

  return (
    <Portal>
      <S.Modal className="modal" aria-modal="true">
        <S.CloseButtonWrapper>
          <CloseButton click={close} />
        </S.CloseButtonWrapper>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
      <Backdrop close={close} />
    </Portal>
  );
};

modal.propTypes = {
  close: func.isRequired,
  children: element
};

modal.defaultProps = {
  children: null
};

export default modal;
