import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { userType } from 'app/auth/propTypes';
import { Backdrop, withUser, withToggle } from 'app/common';
import ToolbarWrapper from 'app/layout/components/ToolbarWrapper';
import SideDrawer from 'app/layout/components/SideDrawer';
import MenuButton from 'app/layout/components/MenuButton';
import Navigation from 'app/layout/components/Navigation';
import ReturnButton from 'app/layout/components/ReturnButton';
import LoginButton from 'app/auth/components/LoginButton';
import UserPanel from 'app/auth/components/UserPanel';
import Login from 'app/auth/containers/Login';
import CreateQuotation from 'app/quotes/containers/CreateQuotation';
import CreateQuotationButton from 'app/quotes/components/CreateQuotationButton';

const SIGN_IN_NAVIGATION_ITEMS = [
  { name: 'Strona Główna', path: '/quotes' },
  { name: 'Idea', path: '/about' },
  { name: 'Regulamin', path: '/terms' }
];

const SIGN_OUT_NAVIGATION_ITEMS = [
  { name: 'Strona Główna', path: '/quotes' },
  { name: 'Idea', path: '/about' },
  { name: 'Regulamin', path: '/terms' },
  { name: 'Załóż konto', path: '/signup' }
];

const LoginWithToggle = withToggle({
  modalComponent: Login,
  toggleButton: LoginButton
});

const CreateQuotationWithToggle = withToggle({
  modalComponent: CreateQuotation,
  toggleButton: CreateQuotationButton
});

const toolbar = ({ user, location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = user.id ? SIGN_IN_NAVIGATION_ITEMS : SIGN_OUT_NAVIGATION_ITEMS;

  let actionButton = <LoginWithToggle isDesktop />;
  if (user.id) {
    actionButton = <CreateQuotationWithToggle isDesktop />;
  }

  let contextInfo = <div style={{ marginRight: 'auto' }}>¯\_(ツ)_/¯</div>;
  if (location.pathname.includes('/quotes/')) {
    contextInfo = <ReturnButton />;
  }

  return (
    <ToolbarWrapper>
      {contextInfo}
      {actionButton}
      <Navigation isDesktop navItems={links} />
      <UserPanel />
      <SideDrawer isOpen={isMenuOpen} onCloseMenu={handleToggleMenu}>
        <Navigation navItems={links} onCloseMenu={handleToggleMenu} />
      </SideDrawer>
      <MenuButton isMenuOpen={isMenuOpen} onToggleMenu={handleToggleMenu} />
      {isMenuOpen && <Backdrop onClose={handleToggleMenu} />}
    </ToolbarWrapper>
  );
};

toolbar.propTypes = {
  user: userType
};

toolbar.defaultProps = {
  user: null
};

export default withRouter(withUser(toolbar));
