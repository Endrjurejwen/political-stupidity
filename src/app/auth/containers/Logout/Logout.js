import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'app/auth/actions';
import { Confirmation } from 'app/common';

const logoutButton = ({ logout, closeModal }) => {
  const handleLogoutClick = () => {
    logout();
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
  closeModal: func,
  logout: func.isRequired
};

logoutButton.defaultProps = {
  closeModal: () => null
};

export default connect(
  null,
  { logout }
)(logoutButton);
