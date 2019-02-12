import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media, flexCenter } from 'utils';

import NavigationItem from 'layout/components/NavigationItem';

// const SIGN_IN_NAVIGATION_ITEMS = [
//   { name: 'Strona Główna', path: '/home' },
//   { name: 'Idea', path: '/about' },
//   { name: 'Regulamin', path: '/terms' },
//   { name: 'Wyloguj się', path: '/logout' }
// ];

const navigation = ({ desktop, closeMenu, navItems }) => (
  <StyledNav desktop={desktop}>
    <NavigationList>
      {navItems.map(navItem => (
        <NavigationItem
          key={navItem.name}
          path={navItem.path}
          name={navItem.name}
          closeMenu={closeMenu}
        />
      ))}
    </NavigationList>
  </StyledNav>
);

navigation.propTypes = {
  desktop: PropTypes.bool,
  closeMenu: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

navigation.defaultProps = {
  desktop: false,
  closeMenu: () => null
};

export default navigation;

const StyledNav = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  ${media.tablet`
    display: flex;
    width: auto;
  `}
`;

const NavigationList = styled.ul`
  ${flexCenter({ justifyContent: 'space-around' })};
  flex-flow: column;
  list-style: none;
  background-color: transparent;
  width: 100%;
  height: 100%;

  ${media.tablet`
    flex-flow: row;
    justify-content: space-between;
  `}
`;
