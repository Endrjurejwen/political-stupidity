import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Button } from 'elements';
import { media, flexCenter, spacing, color } from 'utils';

import NavigationItem from 'layout/components/NavigationItem';

// const SIGN_IN_NAVIGATION_ITEMS = [
//   { name: 'Strona Główna', path: '/home' },
//   { name: 'Idea', path: '/about' },
//   { name: 'Regulamin', path: '/terms' },
//   { name: 'Wyloguj się', path: '/logout' }
// ];

const navigation = ({ desktop, closeMenu, navItems, logout, display }) => (
  <Wrapper desktop={desktop}>
    <NavigationList display={display}>
      {navItems.map(navItem => (
        <NavigationItem
          key={navItem.name}
          path={navItem.path}
          name={navItem.name}
          closeMenu={closeMenu}
        />
      ))}
    </NavigationList>
    <LogOutButton display={display} onClick={logout} secondary>
      Wyloguj się
    </LogOutButton>
  </Wrapper>
);

navigation.propTypes = {
  desktop: PropTypes.bool,
  display: PropTypes.bool,
  closeMenu: PropTypes.func,
  logout: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

navigation.defaultProps = {
  desktop: false,
  closeMenu: () => null,
  logout: () => null,
  display: false
};

export default navigation;

const Wrapper = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    display: flex;
    width: auto;
    flex-direction: row;
  `}
`;

const NavigationList = styled.ul`
  ${flexCenter({ justifyContent: 'space-around' })};
  flex-flow: column;
  list-style: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  margin-bottom: ${spacing[4]};
  /* border-bottom: 1px solid ${color.action}; */
  border-bottom: ${({ display }) =>
    display ? `1px solid ${color.action}` : 'none'};

  ${media.tablet`
    width: auto;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 0;
    margin-right: ${spacing[3]};
    border-bottom: none;
  `}
`;

const LogOutButton = styled(Button)`
  /* width: 10rem; */
  align-self: center;
  color: #fff;
  display: ${({ display }) => (display ? 'block' : 'none')};
`;
