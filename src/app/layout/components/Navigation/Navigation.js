import React from 'react';
import { func, bool, number, arrayOf, shape, string } from 'prop-types';
import NavigationItem from 'app/layout/components/NavigationItem';

import * as S from './style';

const navigation = ({ isDesktop, onCloseMenu, navItems, isLogin }) => (
  <S.Wrapper isDesktop={isDesktop}>
    <S.NavigationList isLogin={isLogin}>
      {navItems.map(navItem => (
        <NavigationItem
          key={navItem.name}
          path={navItem.path}
          name={navItem.name}
          onCloseMenu={onCloseMenu}
        />
      ))}
    </S.NavigationList>
  </S.Wrapper>
);

navigation.propTypes = {
  isDesktop: bool,
  isLogin: number,
  navItems: arrayOf(
    shape({
      name: string.isRequired,
      path: string.isRequired
    })
  ).isRequired,
  onCloseMenu: func
};

navigation.defaultProps = {
  isDesktop: false,
  isLogin: 0,
  onCloseMenu: () => null
};

export default navigation;
