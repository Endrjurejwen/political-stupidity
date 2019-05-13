import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'app/auth/actions';
import { Confirmation } from 'app/common';

const logoutButton = ({ logout, closeMenu, closeModal }) => {
  const handleLogoutClick = () => {
    logout();
    closeMenu();
  };
  return (
    <Confirmation
      onCloseClick={closeModal}
      onConfirmClick={handleLogoutClick}
      text="Czy na pewno chcesz się wylogować?"
      title="Wyloguj się"
    />
  );
};

logoutButton.propTypes = {
  closeMenu: func,
  closeModal: func,
  logout: func.isRequired
};

logoutButton.defaultProps = {
  closeMenu: () => null,
  closeModal: () => null
};

export default connect(
  null,
  { logout }
)(logoutButton);
