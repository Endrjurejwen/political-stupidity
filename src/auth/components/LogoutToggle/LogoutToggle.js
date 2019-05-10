import React from 'react';
import { func } from 'prop-types';
import { Toggle, Modal } from 'common';
import Logout from 'auth/containers/Logout';
import LogoutButton from 'auth/components/LogoutButton';

const logoutToggle = ({ closeMenu }) => (
  <Toggle
    open={show => (
      <LogoutButton
        onClick={() => {
          show();
          closeMenu();
        }}
      />
    )}
    content={hide => (
      <Modal close={hide}>
        <Logout closeModal={hide} />
      </Modal>
    )}
  />
);

logoutToggle.propTypes = {
  closeMenu: func
};

logoutToggle.defaultProps = {
  closeMenu: () => null
};

export default logoutToggle;
