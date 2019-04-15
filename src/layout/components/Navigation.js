import React from 'react';
import styled from 'styled-components';
import { func, bool, number, arrayOf, shape, string } from 'prop-types';

import { Button } from 'elements';
import { media, flexCenter, spacing, color } from 'utils';

import NavigationItem from 'layout/components/NavigationItem';

const navigation = ({ desktop, closeMenu, navItems, logout, isLogin }) => (
  <Wrapper desktop={desktop}>
    <NavigationList isLogin={isLogin}>
      {navItems.map(navItem => (
        <NavigationItem
          key={navItem.name}
          path={navItem.path}
          name={navItem.name}
          closeMenu={closeMenu}
        />
      ))}
    </NavigationList>
    {/* <LogOutButton
      secondary
      isLogin={isLogin}
      onClick={() => {
        logout();
        closeMenu();
      }}
    >
      Wyloguj się
    </LogOutButton> */}
  </Wrapper>
);

navigation.propTypes = {
  closeMenu: func,
  desktop: bool,
  isLogin: number,
  logout: func.isRequired,
  navItems: arrayOf(
    shape({
      name: string.isRequired,
      path: string.isRequired
    })
  ).isRequired
};

navigation.defaultProps = {
  closeMenu: () => null,
  desktop: false,
  isLogin: 0
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
    margin-left: 5rem;
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
  border-bottom: ${({ isLogin }) =>
    isLogin ? `1px solid ${color.action}` : 'none'};

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
  font-size: 0.7rem;
  font-weight: normal;
  font-family: inherit;  
  align-self: center;
  color: #fff;
  display: ${({ isLogin }) => (isLogin ? 'block' : 'none')};
`;
