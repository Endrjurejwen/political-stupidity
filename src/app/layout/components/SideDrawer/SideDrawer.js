import React from 'react';
import { element, bool, func } from 'prop-types';
import { userType } from 'app/auth/propTypes';
import { withUser, withToggle } from 'app/common';
import { spacing } from 'utils';
import UserDetails from 'app/auth/components/UserDetails';
import LoginButton from 'app/auth/components/LoginButton';
import LogoutButton from 'app/auth/components/LogoutButton';
import Login from 'app/auth/containers/Login';
import Logout from 'app/auth/containers/Logout';
import CreateQuotation from 'app/quotes/containers/CreateQuotation';
import CreateQuotationButton from 'app/quotes/components/CreateQuotationButton';

import * as S from './style';

const LoginWithToggle = withToggle({
  modalComponent: Login,
  toggleButton: LoginButton
});

const LogoutWithToggle = withToggle({
  modalComponent: Logout,
  toggleButton: LogoutButton
});

const CreateQuotationWithToggle = withToggle({
  modalComponent: CreateQuotation,
  toggleButton: CreateQuotationButton
});

const sideDrawer = ({ children, onCloseMenu, isOpen, user }) => {
  let actionButton = <LoginWithToggle onCloseMenu={onCloseMenu} />;
  let headerContent = (
    <>
      <S.Title center textLight marginBottom={spacing[4]}>
        Klasa Polityczna
      </S.Title>
      <div>¯\_(ツ)_/¯</div>
    </>
  );
  if (user.id) {
    headerContent = <UserDetails user={user} />;
    actionButton = (
      <CreateQuotationWithToggle isExtended onCloseMenu={onCloseMenu} />
    );
  }
  return (
    <S.Wrapper data-testid="sideDrawer" isOpen={isOpen}>
      <S.Header>
        {headerContent}
        {user.id && <LogoutWithToggle onCloseMenu={onCloseMenu} />}
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
  isOpen: bool,
  onCloseMenu: func,
  user: userType
};

sideDrawer.defaultProps = {
  isOpen: false,
  onCloseMenu: () => null,
  user: null
};

export default withUser(sideDrawer);
