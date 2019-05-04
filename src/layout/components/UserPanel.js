import React from 'react';
import styled from 'styled-components';
import { userType } from 'auth/propTypes';
import { withUser } from 'common';
import { color, media } from 'utils';
import LogoutToggle from 'auth/components/LogoutToggle';
import UserSummary from 'auth/components/UserSummary';

const userPanel = ({ user }) => (
  <Wrapper isLogin={!!user.id}>
    <UserSummary name={user.firstName} />
    <LogoutToggle />
  </Wrapper>
);

userPanel.propTypes = {
  user: userType
};

userPanel.defaultProps = {
  user: null
};

export default withUser(userPanel);

const Wrapper = styled.div`
  display: none;
  height: 100%;
  padding: 0 1rem;
  border-right: 1px solid ${color.textLight};
  border-left: 1px solid ${color.textLight};
  border-bottom: 2px solid transparent;

  ${media.tablet`
    display: ${({ isLogin }) => (isLogin ? 'flex' : 'none ')};
    justify-content: space-between;
    width: 11rem;
  `}
`;
