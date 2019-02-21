import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { toggleMenu } from 'layout/actions';
import { logout } from 'auth/actions';
import { Backdrop } from 'common';
import { Button } from 'elements';
import ToolbarWrapper from 'layout/components/ToolbarWrapper';
import SideDrawer from 'layout/components/SideDrawer';
import MenuButton from 'layout/components/MenuButton';
import Navigation from 'layout/components/Navigation';

const SIGN_IN_NAVIGATION_ITEMS = [
  { name: 'Strona Główna', path: '/home' },
  { name: 'Idea', path: '/about' },
  { name: 'Regulamin', path: '/terms' }
  // { name: 'Wyloguj się', path: '/logout' }
];

const SIGN_OUT_NAVIGATION_ITEMS = [
  { name: 'Strona Główna', path: '/home' },
  { name: 'Idea', path: '/about' },
  { name: 'Regulamin', path: '/terms' },
  { name: 'Załóż konto', path: '/signup' }
];

class Toolbar extends Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
    auth: PropTypes.shape().isRequired
  };

  static defaultProps = {
    isMenuOpen: false
  };

  navigationHandler = () => {
    const { history, auth } = this.props;
    const path = auth.uid ? '/create' : '/login';
    history.push(path);
  };

  render() {
    const { isMenuOpen, toggleMenu, logout, auth } = this.props;
    const links = auth.uid
      ? SIGN_IN_NAVIGATION_ITEMS
      : SIGN_OUT_NAVIGATION_ITEMS;
    const actionBtnText = auth.uid ? 'Dodaj cytat' : 'Zaloguj się';
    return (
      <ToolbarWrapper>
        <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <h2>Logo</h2>
        <Button onClick={this.navigationHandler}>{actionBtnText}</Button>
        <Navigation
          display={auth.uid}
          desktop
          navItems={links}
          logout={logout}
        />
        <SideDrawer
          display={auth.uid}
          navItems={links}
          closeMenu={toggleMenu}
          isOpen={isMenuOpen}
          logout={() => {
            logout();
            toggleMenu();
          }}
        />
        {isMenuOpen && <Backdrop close={toggleMenu} />}
      </ToolbarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.menu.isMenuOpen,
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMenu,
      logout
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Toolbar)
);
