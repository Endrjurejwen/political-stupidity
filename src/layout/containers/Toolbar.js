import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
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
    authId: PropTypes.string.isRequired,
    profile: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.string])
    ),
    history: ReactRouterPropTypes.history.isRequired
  };

  static defaultProps = {
    isMenuOpen: false,
    profile: null
  };

  navigationHandler = () => {
    const { history, authId } = this.props;
    const path = authId ? '/create' : '/login';
    history.push(path);
  };

  render() {
    const { isMenuOpen, toggleMenu, logout, authId, profile } = this.props;
    const links = authId ? SIGN_IN_NAVIGATION_ITEMS : SIGN_OUT_NAVIGATION_ITEMS;
    const actionBtnText = authId ? 'Dodaj cytat' : 'Zaloguj się';
    const helloText = authId ? profile.firstName : null;

    return (
      <ToolbarWrapper>
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <p>
          <strong>{helloText}</strong>
        </p>
        <Button onClick={this.navigationHandler}>{actionBtnText}</Button>
        <Navigation
          desktop
          isLogin={authId ? 1 : 0}
          navItems={links}
          logout={logout}
        />
        <SideDrawer isOpen={isMenuOpen}>
          <Navigation
            isLogin={authId ? 1 : 0}
            navItems={links}
            closeMenu={toggleMenu}
            logout={logout}
          />
        </SideDrawer>
        {isMenuOpen && <Backdrop close={toggleMenu} />}
      </ToolbarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.menu.isMenuOpen,
  authId: state.firebase.auth.uid,
  profile: state.firebase.profile
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
