import React from 'react';
import { func, bool } from 'prop-types';
import styled from 'styled-components';
import { Toggle, Modal } from 'common';
import { Button } from 'elements';
import { media } from 'utils';
import Login from 'auth/containers/Login';

const loginButton = ({ desktop, fixed, closeMenu }) => (
  <Toggle
    open={show => (
      <ActionButton
        desktop={desktop}
        fixed={fixed}
        onClick={() => {
          show();
          closeMenu();
        }}
      >
        Zaloguj się
      </ActionButton>
    )}
    content={hide => (
      <Modal close={hide}>
        <Login closeModal={hide} />
      </Modal>
    )}
  />
);

loginButton.propTypes = {
  desktop: bool,
  fixed: bool,
  closeMenu: func
};

loginButton.defaultProps = {
  desktop: false,
  fixed: false,
  closeMenu: () => null
};

export default loginButton;

const ActionButton = styled(Button)`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: ${({ desktop }) => (desktop ? 'none' : 'block')};
  z-index: 2;

  ${media.tablet`
    display: ${({ desktop }) => (desktop ? 'block' : 'none')};
  `}
`;
