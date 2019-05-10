import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { userType } from 'auth/propTypes';
import { Backdrop, withUser } from 'common';
import ToolbarWrapper from 'layout/components/ToolbarWrapper';
import SideDrawer from 'layout/components/SideDrawer';
import MenuButton from 'layout/components/MenuButton';
import Navigation from 'layout/components/Navigation';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import UserPanel from 'auth/components/UserPanel';

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

const toolbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = user.id ? SIGN_IN_NAVIGATION_ITEMS : SIGN_OUT_NAVIGATION_ITEMS;

  return (
    <ToolbarWrapper>
      <div style={{ marginRight: 'auto' }}>Klasa Polityczna</div>
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={handleToggleMenu} />
      {user.id ? <CreateQuotationToggle desktop /> : <LoginButton desktop />}
      <Navigation desktop navItems={links} />
      <UserPanel />
      <SideDrawer isOpen={isMenuOpen} closeMenu={handleToggleMenu}>
        <Navigation navItems={links} closeMenu={handleToggleMenu} />
      </SideDrawer>
      {isMenuOpen && <Backdrop close={handleToggleMenu} />}
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
