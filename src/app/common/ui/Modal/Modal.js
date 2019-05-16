import React, { useEffect } from 'react';
import { func, element, bool } from 'prop-types';
import { Backdrop, CloseButton, Portal, useBodyScrollLock } from 'app/common';
import { trapTabKey } from 'utils';

import * as S from './style';

const modal = ({ onCloseModal, children, isShown }) => {
  useBodyScrollLock();

  useEffect(() => {
    document.addEventListener('keydown', event =>
      trapTabKey(event, onCloseModal)
    );
    return () => {
      document.removeEventListener('keydown', event =>
        trapTabKey(event, onCloseModal)
      );
    };
  }, []);

  return (
    <Portal>
      <S.Modal className="modal" aria-modal="true">
        <S.CloseButtonWrapper>
          <CloseButton onClick={onCloseModal} />
        </S.CloseButtonWrapper>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
      <Backdrop isShown={isShown} onClose={onCloseModal} />
    </Portal>
  );
};

modal.propTypes = {
  children: element,
  isShown: bool,
  onCloseModal: func.isRequired
};

modal.defaultProps = {
  children: null,
  isShown: false
};

export default modal;
