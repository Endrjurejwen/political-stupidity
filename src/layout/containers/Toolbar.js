import React, { useState } from 'react';
import { userType } from 'auth/propTypes';
import { Backdrop, withUser } from 'common';
import ToolbarWrapper from 'layout/components/ToolbarWrapper';
import SideDrawer from 'layout/components/SideDrawer';
import MenuButton from 'layout/components/MenuButton';
import Navigation from 'layout/components/Navigation';
import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
import LoginButton from 'auth/components/LoginButton';
import UserPanel from 'layout/components/UserPanel';

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

export default withUser(toolbar);

// import React, { Component } from 'react';
// // import styled from 'styled-components';
// import { shape, func, string, bool } from 'prop-types';
// // import { history } from 'react-router-prop-types';
// import { connect } from 'react-redux';
// // import { withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { getIsMenuOpenState } from 'layout/selectors';
// import { getUserInfoState } from 'auth/selectors';
// import { toggleMenu } from 'layout/actions';
// import { logout } from 'auth/actions';
// // import { Button, Icon } from 'elements';
// // import { media, spacing, flexCenter, color } from 'utils';
// import { Backdrop } from 'common';
// import ToolbarWrapper from 'layout/components/ToolbarWrapper';
// import SideDrawer from 'layout/components/SideDrawer';
// import MenuButton from 'layout/components/MenuButton';
// import Navigation from 'layout/components/Navigation';
// import CreateQuotationToggle from 'quotes/components/CreateQuotationToggle';
// import LoginButton from 'auth/components/LoginButton';
// // import UserDetails from 'auth/components/UserDetails';
// // import Login from 'auth/containers/Login';
// // import LogoutButton from 'auth/containers/LogoutButton';
// // import LogoutToggle from 'auth/components/LogoutToggle';
// // import UserSummary from 'auth/components/UserSummary';
// import UserPanel from 'layout/components/UserPanel';

// const SIGN_IN_NAVIGATION_ITEMS = [
//   { name: 'Strona Główna', path: '/quotes' },
//   { name: 'Idea', path: '/about' },
//   { name: 'Regulamin', path: '/terms' }
// ];

// const SIGN_OUT_NAVIGATION_ITEMS = [
//   { name: 'Strona Główna', path: '/quotes' },
//   { name: 'Idea', path: '/about' },
//   { name: 'Regulamin', path: '/terms' },
//   { name: 'Załóż konto', path: '/signup' }
// ];

// class Toolbar extends Component {
//   static propTypes = {
//     actions: shape({
//       toggleMenu: func.isRequired,
//       logout: func.isRequired
//     }).isRequired,
//     isMenuOpen: bool,
//     user: shape({
//       firstName: string,
//       lastName: string,
//       id: string
//     })
//   };

//   static defaultProps = {
//     isMenuOpen: false,
//     user: null
//   };

//   // handleNavigateClick = () => {
//   //   const { history, user } = this.props;
//   //   const path = user.id ? '/quotes/create' : '/login';
//   //   history.push(path);
//   // };

//   handleToggleMenuClick = () => {
//     this.props.actions.toggleMenu();
//   };

//   // handleLogoutClick = () => {
//   //   this.props.actions.logout();
//   // };

//   render() {
//     const { isMenuOpen, user } = this.props;
//     const links = user.id
//       ? SIGN_IN_NAVIGATION_ITEMS
//       : SIGN_OUT_NAVIGATION_ITEMS;

//     return (
//       <ToolbarWrapper>
//         <div style={{ marginRight: 'auto' }}>Klasa Polityczna</div>
//         <MenuButton
//           isMenuOpen={isMenuOpen}
//           toggleMenu={this.handleToggleMenuClick}
//         />
//         {user.id ? <CreateQuotationToggle desktop /> : <LoginButton desktop />}
//         <Navigation desktop navItems={links} />
//         <UserPanel />
//         <SideDrawer isOpen={isMenuOpen} closeMenu={this.handleToggleMenuClick} >
//           <Navigation navItems={links} closeMenu={this.handleToggleMenuClick} />
//         </SideDrawer>
//         {isMenuOpen && <Backdrop close={this.handleToggleMenuClick} />}
//       </ToolbarWrapper>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isMenuOpen: getIsMenuOpenState(state),
//   user: getUserInfoState(state)
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(
//       {
//         toggleMenu,
//         logout
//       },
//       dispatch
//     )
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Toolbar);
