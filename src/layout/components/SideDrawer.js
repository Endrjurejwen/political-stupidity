import React from 'react';
import styled from 'styled-components';
import { element, bool } from 'prop-types';

import { Button } from 'elements';
import { color, fixed, elevation, spacing, media } from 'utils';

const sideDrawer = ({ children, isOpen, isLogin, logout, closeMenu }) => (
  <Wrapper data-testid="sideDrawer" isOpen={isOpen}>
    {children}
    <LogOutButton
      secondary
      isLogin={isLogin}
      onClick={() => {
        logout();
        closeMenu();
      }}
    >
      Wyloguj się
    </LogOutButton>
  </Wrapper>
);

sideDrawer.propTypes = {
  children: element.isRequired,
  isOpen: bool.isRequired
};

const Wrapper = styled.div`
  ${fixed()};
  ${elevation[3]};
  display: flex;
  flex-direction: column;
  padding: ${spacing[2]} ${spacing[4]};
  height: 50vh;
  width: 100vw;
  z-index: 30;
  background-color: ${color.primary};
  color: ${color.textLight};
  text-align: center;

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-50vh)'};

  ${media.tablet`
    display: none;
  `}
`;

const LogOutButton = styled(Button)`
  font-size: 0.7rem;
  font-weight: normal;
  font-family: inherit;
  align-self: center;
  color: #fff;
  display: ${({ isLogin }) => (isLogin ? 'block' : 'none')};
  margin-left: 10px;

  ${media.tablet`
    display: none;
  `}
`;

export default sideDrawer;
