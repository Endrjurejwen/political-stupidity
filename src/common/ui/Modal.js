import React, { useEffect } from 'react';
import styled from 'styled-components';
import { func, element } from 'prop-types';
import { Backdrop, CloseButton, Portal, useBodyScrollLock } from 'common';
import {
  media,
  fixed,
  elevation,
  spacing,
  flexCenter,
  absolute,
  color,
  trapTabKey
} from 'utils';

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
      <ModalCard className="modal" aria-modal="true">
        <CloseButtonWrapper>
          <CloseButton click={close} />
        </CloseButtonWrapper>
        <ModalContent>{children}</ModalContent>
      </ModalCard>
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

const ModalCard = styled.div`
  ${fixed({ x: '50%', y: '45%' })};
  transform: translate(-50%, -50%);
  ${elevation[3]};
  z-index: 100;
  margin: 0 auto ${spacing[0]};
  background-color: ${color.backgroundLight};
  width: 80%;
  border-radius: 8px;
  padding: ${spacing[2]} ${spacing[3]};
  max-height: 80%;
  min-height: 12rem;
  min-width: 20rem;
  overflow-y: auto;

  ${media.tablet`
    /* width: auto; */
    /* max-width: 50%; */
  `}

  ${media.desktop`
    /* width: auto; */
    max-width: 40%;
  `}
`;

const ModalContent = styled.div`
  margin: ${spacing[3]} 0 ${spacing[2]};
  max-height: 80%;
  overflow-y: auto;
`;

const CloseButtonWrapper = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter};
`;
