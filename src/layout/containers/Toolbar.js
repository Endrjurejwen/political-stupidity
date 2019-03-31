import React, { Component } from 'react';
import { shape, func, string, bool } from 'prop-types';
import { history } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getIsMenuOpenState } from 'layout/selectors';
import { getUserInfoState } from 'auth/selectors';
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
    actions: shape({
      toggleMenu: func.isRequired,
      logout: func.isRequired
    }).isRequired,
    history: history.isRequired,
    isMenuOpen: bool,
    user: shape({
      firstName: string,
      lastName: string,
      id: string
    })
  };

  static defaultProps = {
    isMenuOpen: false,
    user: null
  };

  handleNavigateClick = () => {
    const { history, user } = this.props;
    const path = user.id ? '/quotes/create' : '/login';
    history.push(path);
  };

  handleToggleMenuClick = () => {
    this.props.actions.toggleMenu();
  };

  handleLogoutClick = () => {
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
          toggleMenu={this.handleToggleMenuClick}
        />
        <p>
          <strong>{helloText}</strong>
        </p>
        <Button onClick={this.handleNavigateClick}>{actionBtnText}</Button>
        <Navigation
          desktop
          isLogin={user.id ? 1 : 0}
          navItems={links}
          logout={this.handleLogoutClick}
        />
        <SideDrawer isOpen={isMenuOpen}>
          <Navigation
            isLogin={user.id ? 1 : 0}
            navItems={links}
            closeMenu={this.handleToggleMenuClick}
            logout={this.handleLogoutClick}
          />
        </SideDrawer>
        {isMenuOpen && <Backdrop close={this.handleToggleMenuClick} />}
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
