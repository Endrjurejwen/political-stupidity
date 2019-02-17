import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { toggleMenu } from 'layout/actions';
import { Backdrop } from 'common';
import { Button } from 'elements';
import ToolbarWrapper from 'layout/components/ToolbarWrapper';
import SideDrawer from 'layout/components/SideDrawer';
import MenuButton from 'layout/components/MenuButton';
import Navigation from 'layout/components/Navigation';

const SIGN_IN_NAVIGATION_ITEMS = [
  { name: 'Strona Główna', path: '/home' },
  { name: 'Idea', path: '/about' },
  { name: 'Regulamin', path: '/terms' },
  { name: 'Wyloguj się', path: '/logout' }
];

class Toolbar extends Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired
  };

  static defaultProps = {
    isMenuOpen: false
  };

  historyPushHandler = () => {
    const { history } = this.props;
    history.push('/create');
  };

  render() {
    const { isMenuOpen, toggleMenu } = this.props;
    return (
      <ToolbarWrapper>
        <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <h2>Logo</h2>
        <Button onClick={this.historyPushHandler}>Dodaj Cytat</Button>
        <Navigation desktop navItems={SIGN_IN_NAVIGATION_ITEMS} />
        <SideDrawer
          navItems={SIGN_IN_NAVIGATION_ITEMS}
          closeMenu={toggleMenu}
          isOpen={isMenuOpen}
        />
        {isMenuOpen && <Backdrop close={toggleMenu} />}
      </ToolbarWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.menu.isMenuOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMenu
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Toolbar)
);
