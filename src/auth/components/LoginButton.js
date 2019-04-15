import React from 'react';
import styled from 'styled-components';
import { Toggle, Modal } from 'common';
import { Button } from 'elements';
import { media } from 'utils';
import Login from 'auth/containers/Login';

const createQuotationButton = ({ desktop }) => (
  <Toggle
    open={show => <ActionButton desktop={desktop} onClick={show}>Zaloguj się</ActionButton>}
    content={hide => (
      <Modal close={hide}>
        <Login closeModal={hide} />
      </Modal>
    )}
  />
);

export default createQuotationButton;

const ActionButton = styled(Button)`
  position: ${props => (props.desktop ? 'static' : 'fixed')};
  bottom: 1rem;
  right: 0.5rem;
  display: ${({ desktop }) => (desktop ? 'none' : 'block')};
  z-index: 2;

  ${media.tablet`
    display: ${({ desktop }) => (desktop ? 'block' : 'none')};
  `}
`;
