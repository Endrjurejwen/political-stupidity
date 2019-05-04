import React from 'react';
import { func } from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { logout } from 'auth/actions';
// import { getUserInfoState } from 'auth/selectors';
// import { Button } from 'elements';
// import { spacing } from 'utils';
import Confirmation from 'quotes/components/Confirmation';

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

// const mapStateToProps = state => ({
//   user: getUserInfoState(state)
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         logout
//       },
//       dispatch
//     )
//   };
// };

export default connect(
  null,
  { logout }
)(logoutButton);

// const LogOutButton = styled(Button)`
//   box-shadow: none;
//   font-size: 0.7rem;
//   font-weight: normal;
//   font-family: inherit;
//   /* align-self: center; */
//   color: #fff;
//   display: block;
//   /* margin-left: ${spacing[3]}; */
//   font-size: 0.9rem;
//   padding: ${spacing[1]} ${spacing[2]};

//   border: none;
//   line-height: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;
