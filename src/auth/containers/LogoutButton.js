import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from 'auth/actions';
import { getUserInfoState } from 'auth/selectors';
import { Button, Icon } from 'elements';
import { media, spacing } from 'utils';

const logoutButton = ({ isLogin, actions, closeMenu, user }) => (
  <LogOutButton
    secondary
    isLogin={!!user.id}
    onClick={() => {
      actions.logout();
      closeMenu();
    }}
  >
    <Icon name="logout" color="#fff" />
  </LogOutButton>
);

logoutButton.defaultProps = {
  closeMenu: () => null
};

const mapStateToProps = state => ({
  user: getUserInfoState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        logout
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(logoutButton);

const LogOutButton = styled(Button)`
  box-shadow: none;
  font-size: 0.7rem;
  font-weight: normal;
  font-family: inherit;
  /* align-self: center; */
  color: #fff;
  display: block;
  /* margin-left: ${spacing[3]}; */
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[3]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
`;
