import React from 'react';
import styled from 'styled-components';
import { func, element } from 'prop-types';
import { Backdrop, CloseButton, Portal, useBodyScrollLock } from 'common';
import { Card } from 'elements';
import { media, fixed, elevation, spacing, flexCenter, absolute } from 'utils';

const modal = ({ close, children }) => {
  useBodyScrollLock();
  return (
    <Portal>
      <ModalCard>
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
  margin: 0 auto ${spacing[6]};
  background-color: #eee;
  width: 80%;
  border-radius: 8px;
  padding: ${spacing[2]} ${spacing[3]};

  ${media.tablet`
    width: auto;
    /* max-width: 50%; */
  `}

  ${media.desktop`
    /* width: auto; */
    max-width: 40%;
  `}
`;

const ModalContent = styled.div`
  margin: ${spacing[3]} 0 ${spacing[2]};
`;

const CloseButtonWrapper = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter};
`;
