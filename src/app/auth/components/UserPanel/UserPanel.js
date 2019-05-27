import React from 'react';
import { userType } from 'app/auth/propTypes';
import { withUser, withToggle } from 'app/common';
import LogoutButton from 'app/auth/components/LogoutButton';
import UserSummary from 'app/auth/components/UserSummary';
import Logout from 'app/auth/containers/Logout';

import * as S from './style';

const LogoutWithToggle = withToggle({
  modalComponent: Logout,
  toggleButton: LogoutButton
});

const userPanel = ({ user }) => (
  <S.Wrapper isLogin={!!user.id}>
    <UserSummary nick={user.nick} />
    <LogoutWithToggle />
  </S.Wrapper>
);

userPanel.propTypes = {
  user: userType
};

userPanel.defaultProps = {
  user: null
};

export default withUser(userPanel);
