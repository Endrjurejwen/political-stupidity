import React from 'react';
import { element, bool, func } from 'prop-types';
import { userType } from 'auth/propTypes';
import { withUser } from 'common';
import { spacing } from 'utils';
import UserDetails from 'auth/components/UserDetails';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import LogoutToggle from 'auth/components/LogoutToggle';

import * as S from './style';

const sideDrawer = ({ children, closeMenu, isOpen, user }) => {
  let actionButton = <LoginButton closeMenu={closeMenu} />;
  let headerContent = (
    <S.H4 center textLight marginBottom={spacing[4]}>
      Klasa Polityczna
    </S.H4>
  );
  if (user.id) {
    headerContent = <UserDetails user={user} />;
    actionButton = <CreateQuotationToggle extended closeMenu={closeMenu} />;
  }
  return (
    <S.Wrapper data-testid="sideDrawer" isOpen={isOpen}>
      <S.Header>
        {headerContent}
        {user.id && <LogoutToggle closeMenu={closeMenu} />}
      </S.Header>
      <S.NavContainer>
        {children}
        {actionButton}
      </S.NavContainer>
      <S.Footer>
        <p>&copy; Andrzej Kruk 2019</p>
      </S.Footer>
    </S.Wrapper>
  );
};

sideDrawer.propTypes = {
  children: element.isRequired,
  closeMenu: func,
  isOpen: bool,
  user: userType
};

sideDrawer.defaultProps = {
  closeMenu: () => null,
  isOpen: false,
  user: null
};

export default withUser(sideDrawer);
