import React from 'react';
import { func, bool, number, arrayOf, shape, string } from 'prop-types';
import NavigationItem from 'app/layout/components/NavigationItem';

import * as S from './style';

const navigation = ({ desktop, closeMenu, navItems, isLogin }) => (
  <S.Wrapper desktop={desktop}>
    <S.NavigationList isLogin={isLogin}>
      {navItems.map(navItem => (
        <NavigationItem
          key={navItem.name}
          path={navItem.path}
          name={navItem.name}
          closeMenu={closeMenu}
        />
      ))}
    </S.NavigationList>
  </S.Wrapper>
);

navigation.propTypes = {
  closeMenu: func,
  desktop: bool,
  isLogin: number,
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

// const Wrapper = styled.nav`
//   background-color: transparent;
//   width: 100%;
//   height: 100%;
//   display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   ${media.tablet`
//     display: flex;
//     width: auto;
//     flex-direction: row;
//     margin-left: 5rem;
//   `}
// `;

// const NavigationList = styled.ul`
//   ${flexCenter({ justifyContent: 'center' })};
//   flex-flow: column;
//   list-style: none;
//   background-color: transparent;
//   width: 100%;
//   height: 100%;
//   margin-bottom: ${spacing[4]};
//   border-bottom: ${({ isLogin }) =>
//     isLogin ? `1px solid ${color.action}` : 'none'};

//   ${media.tablet`
//     width: auto;
//     flex-flow: row;
//     justify-content: space-between;
//     margin-bottom: 0;
//     margin-right: ${spacing[3]};
//     border-bottom: none;
//   `}
// `;
