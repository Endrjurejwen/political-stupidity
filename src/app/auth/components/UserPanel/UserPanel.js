import React from 'react';
import { userType } from 'app/auth/propTypes';
import { withUser } from 'app/common';
import LogoutToggle from 'app/auth/components/LogoutToggle';
import UserSummary from 'app/auth/components/UserSummary';

import * as S from './style';

const userPanel = ({ user }) => (
  <S.Wrapper isLogin={!!user.id}>
    <UserSummary name={user.firstName} />
    <LogoutToggle />
  </S.Wrapper>
);

userPanel.propTypes = {
  user: userType
};

userPanel.defaultProps = {
  user: null
};

export default withUser(userPanel);
