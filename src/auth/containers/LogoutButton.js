import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { logout } from 'auth/actions';
// import { getUserInfoState } from 'auth/selectors';
import { Button, Icon } from 'elements';
import { spacing, color } from 'utils';

const logoutButton = ({ onClick }) => (
  <LogOutButton onClick={onClick}>
    <Icon name="logout" color={color.textLight} />
  </LogOutButton>
);

logoutButton.propTypes = {
  onClick: func
};

logoutButton.defaultProps = {
  onClick: () => null
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

export default logoutButton;

const LogOutButton = styled(Button)`
  box-shadow: none;
  font-size: 0.7rem;
  font-weight: normal;
  font-family: inherit;
  color: #fff;
  display: block;
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
`;

// import React from 'react';
// import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { logout } from 'auth/actions';
// import { getUserInfoState } from 'auth/selectors';
// import { Button, Icon } from 'elements';
// import { media, spacing, color } from 'utils';

// const logoutButton = ({ isLogin, actions, closeMenu, user }) => (
//   <LogOutButton
//     // secondary
//     // isLogin={!!user.id}
//     onClick={() => {
//       actions.logout();
//       closeMenu();
//     }}
//   >
//     <Icon name="logout" color={color.textLight} />
//   </LogOutButton>
// );

// logoutButton.defaultProps = {
//   closeMenu: () => null
// };

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

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(logoutButton);

// const LogOutButton = styled(Button)`
//   box-shadow: none;
//   font-size: 0.7rem;
//   font-weight: normal;
//   font-family: inherit;
//   color: #fff;
//   display: block;
//   font-size: 0.9rem;
//   padding: ${spacing[1]} ${spacing[2]};

//   border: none;
//   line-height: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;
