import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'app/auth/actions';
import { Confirmation } from 'app/common';

export const logoutButton = ({ logout, onCloseModal }) => {
  const handleLogoutClick = () => {
    logout();
  };
  return (
    <Confirmation
      onCloseClick={onCloseModal}
      onConfirmClick={handleLogoutClick}
      text="Czy na pewno chcesz się wylogować?"
      title="Wyloguj się"
    />
  );
};

logoutButton.propTypes = {
  logout: func.isRequired,
  onCloseModal: func
};

logoutButton.defaultProps = {
  onCloseModal: () => null
};

export default connect(
  null,
  { logout }
)(logoutButton);
