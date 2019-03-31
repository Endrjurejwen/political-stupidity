import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import { media, color, spacing } from 'utils';

const menuButton = ({ toggleMenu, isMenuOpen }) => (
  <MenuBtn
    aria-label="Menu Button"
    data-testid="menu-button"
    onClick={toggleMenu}
  >
    <MenuIcon isMenuOpen={isMenuOpen} />
  </MenuBtn>
);

menuButton.propTypes = {
  isMenuOpen: bool.isRequired,
  toggleMenu: func.isRequired
};

export default menuButton;

const MenuBtn = styled.button`
  display: block;
  z-index: 40;
  cursor: pointer;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 ${spacing[3]};

  ${media.tablet`
    display: none;
  `}
`;

const MenuIcon = styled.div`
  position: relative;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? 'transparent' : color.textLight};
  width: 22px;
  height: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${color.textLight};
    width: 22px;
    height: 2px;
    left: 0;
    transition: transform 0.2s ease-out;
  }

  &::before {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-6px')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
  }

  &::after {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '6px')};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
  }
`;
