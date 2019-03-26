import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getIsMenuOpenState, getUserInfoState } from 'layout/selectors';
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
    actions: PropTypes.shape({
      toggleMenu: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired
    }).isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string
    }),
    history: ReactRouterPropTypes.history.isRequired
  };

  static defaultProps = {
    isMenuOpen: false,
    user: null
  };

  navigationHandler = () => {
    const { history, user } = this.props;
    const path = user.id ? '/quotes/create' : '/login';
    history.push(path);
  };

  toggleMenuHandler = () => {
    this.props.actions.toggleMenu();
  };

  logoutHandler = () => {
    this.props.actions.logout();
  };

  render() {
    const { isMenuOpen, user } = this.props;
    const links = user.id
      ? SIGN_IN_NAVIGATION_ITEMS
      : SIGN_OUT_NAVIGATION_ITEMS;
    const actionBtnText = user.id ? 'Dodaj cytat' : 'Zaloguj się';
    const helloText = user.id ? user.firstName : null;

    return (
      <ToolbarWrapper>
        <MenuButton
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMenuHandler}
        />
        <p>
          <strong>{helloText}</strong>
        </p>
        <Button onClick={this.navigationHandler}>{actionBtnText}</Button>
        <Navigation
          desktop
          isLogin={user.id ? 1 : 0}
          navItems={links}
          logout={this.logoutHandler}
        />
        <SideDrawer isOpen={isMenuOpen}>
          <Navigation
            isLogin={user.id ? 1 : 0}
            navItems={links}
            closeMenu={this.toggleMenuHandler}
            logout={this.logoutHandler}
          />
        </SideDrawer>
        {isMenuOpen && <Backdrop close={this.toggleMenuHandler} />}
      </ToolbarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: getIsMenuOpenState(state),
  user: getUserInfoState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        toggleMenu,
        logout
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Toolbar)
);
